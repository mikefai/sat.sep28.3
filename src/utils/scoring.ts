import { ExamId, ExamResult, Question, DifficultyLevel, DomainStats, SkillStats, QuestionResultSummary } from '../types/exam';
import { getExamQuestions, EXAM_METADATA } from '../data';

/**
 * Checks if a user's answer matches the correct answer, accounting for multiple choice (case-insensitive)
 * and SPR (fraction equivalence, decimal equivalence, whitespace trim).
 */
export function checkAnswer(userAnswer: string | undefined, question: Question): boolean {
  if (!userAnswer || userAnswer.trim() === '') return false;
  
  const cleanUser = userAnswer.trim();
  const cleanCorrect = question.answer.trim();

  if (question.type === 'multiple-choice') {
    return cleanUser.toUpperCase() === cleanCorrect.toUpperCase();
  }

  // Student-Produced Response (SPR) evaluation
  // Check exact string or acceptableAnswers list
  if (question.acceptableAnswers) {
    if (question.acceptableAnswers.some(a => a.trim().toLowerCase() === cleanUser.toLowerCase())) {
      return true;
    }
  }

  if (cleanUser.toLowerCase() === cleanCorrect.toLowerCase()) {
    return true;
  }

  // Fraction vs decimal conversion check (e.g. "3/4" vs "0.75" or ".75")
  const parseNumber = (val: string): number | null => {
    if (val.includes('/')) {
      const parts = val.split('/');
      if (parts.length === 2) {
        const num = parseFloat(parts[0]);
        const den = parseFloat(parts[1]);
        if (!isNaN(num) && !isNaN(den) && den !== 0) {
          return num / den;
        }
      }
    }
    const parsed = parseFloat(val);
    return isNaN(parsed) ? null : parsed;
  };

  const userNum = parseNumber(cleanUser);
  const correctNum = parseNumber(cleanCorrect);

  if (userNum !== null && correctNum !== null) {
    return Math.abs(userNum - correctNum) < 0.0001;
  }

  return false;
}

/**
 * Converts Raw Correct Counts into Scaled Scores (200 - 800) based on non-linear IRT equating curves.
 */
export function rawToScaledRW(rawScore: number, totalQuestions: number = 54): number {
  if (rawScore <= 0) return 200;
  if (rawScore >= totalQuestions) return 800;

  const ratio = rawScore / totalQuestions;
  let score = 200;
  
  if (ratio >= 0.98) score = 800;
  else if (ratio >= 0.95) score = 770 + (ratio - 0.95) * 600; // 770-800
  else if (ratio >= 0.85) score = 680 + (ratio - 0.85) * 900; // 680-770
  else if (ratio >= 0.70) score = 570 + (ratio - 0.70) * 733; // 570-680
  else if (ratio >= 0.50) score = 440 + (ratio - 0.50) * 650; // 440-570
  else if (ratio >= 0.30) score = 320 + (ratio - 0.30) * 600; // 320-440
  else score = 200 + ratio * 400;

  const rounded = Math.round(score / 10) * 10;
  return Math.min(800, Math.max(200, rounded));
}

export function rawToScaledMath(rawScore: number, totalQuestions: number = 44): number {
  if (rawScore <= 0) return 200;
  if (rawScore >= totalQuestions) return 800;

  const ratio = rawScore / totalQuestions;
  let score = 200;
  
  if (ratio >= 0.97) score = 800;
  else if (ratio >= 0.93) score = 770 + (ratio - 0.93) * 750; // 770-800
  else if (ratio >= 0.82) score = 680 + (ratio - 0.82) * 818; // 680-770
  else if (ratio >= 0.65) score = 560 + (ratio - 0.65) * 705; // 560-680
  else if (ratio >= 0.45) score = 430 + (ratio - 0.45) * 650; // 430-560
  else if (ratio >= 0.25) score = 300 + (ratio - 0.25) * 650; // 300-430
  else score = 200 + ratio * 400;

  const rounded = Math.round(score / 10) * 10;
  return Math.min(800, Math.max(200, rounded));
}

export function calculatePercentile(compositeScore: number): number {
  if (compositeScore >= 1580) return 99;
  if (compositeScore >= 1530) return 99;
  if (compositeScore >= 1500) return 98;
  if (compositeScore >= 1450) return 96;
  if (compositeScore >= 1400) return 93;
  if (compositeScore >= 1350) return 89;
  if (compositeScore >= 1300) return 84;
  if (compositeScore >= 1250) return 78;
  if (compositeScore >= 1200) return 71;
  if (compositeScore >= 1150) return 64;
  if (compositeScore >= 1100) return 56;
  if (compositeScore >= 1050) return 48;
  if (compositeScore >= 1000) return 40;
  if (compositeScore >= 950) return 33;
  if (compositeScore >= 900) return 26;
  if (compositeScore >= 850) return 20;
  if (compositeScore >= 800) return 14;
  if (compositeScore >= 700) return 7;
  return 3;
}

export function generateScoreRange(score: number): string {
  const lower = Math.max(400, score - 30);
  const upper = Math.min(1600, score + 30);
  return `${lower} - ${upper}`;
}

export function computeExamResult(
  examId: ExamId,
  userAnswers: Record<string, string>,
  timeSpentPerQuestion: Record<string, number>,
  flaggedQuestions: Record<string, boolean> = {}
): ExamResult {
  const allQuestions = getExamQuestions(examId);
  const metadata = EXAM_METADATA[examId];

  let rwCorrect = 0;
  let mathCorrect = 0;
  let totalTime = 0;

  const domainMap: Record<string, { correct: number; total: number }> = {};
  const skillMap: Record<string, { correct: number; total: number; domain: string }> = {};
  const difficultyMap: Record<DifficultyLevel, { correct: number; total: number }> = {
    'Easy': { correct: 0, total: 0 },
    'Medium': { correct: 0, total: 0 },
    'Hard': { correct: 0, total: 0 },
    'Elite 1500+': { correct: 0, total: 0 }
  };

  const questionSummaries: QuestionResultSummary[] = [];

  let correctTimeSum = 0;
  let correctCount = 0;
  let incorrectTimeSum = 0;
  let incorrectCount = 0;
  let rwTimeSum = 0;
  let mathTimeSum = 0;

  for (const q of allQuestions) {
    const userAnswer = userAnswers[q.id] || '';
    const isCorrect = checkAnswer(userAnswer, q);
    const timeSpent = timeSpentPerQuestion[q.id] || 0;
    const wasFlagged = !!flaggedQuestions[q.id];

    totalTime += timeSpent;

    if (q.section === 'reading-writing') {
      if (isCorrect) rwCorrect++;
      rwTimeSum += timeSpent;
    } else {
      if (isCorrect) mathCorrect++;
      mathTimeSum += timeSpent;
    }

    if (isCorrect) {
      correctTimeSum += timeSpent;
      correctCount++;
    } else {
      incorrectTimeSum += timeSpent;
      incorrectCount++;
    }

    // Domain tracking
    if (!domainMap[q.domain]) {
      domainMap[q.domain] = { correct: 0, total: 0 };
    }
    domainMap[q.domain].total++;
    if (isCorrect) domainMap[q.domain].correct++;

    // Skill tracking
    if (!skillMap[q.skill]) {
      skillMap[q.skill] = { correct: 0, total: 0, domain: q.domain };
    }
    skillMap[q.skill].total++;
    if (isCorrect) skillMap[q.skill].correct++;

    // Difficulty tracking
    difficultyMap[q.difficulty].total++;
    if (isCorrect) difficultyMap[q.difficulty].correct++;

    questionSummaries.push({
      questionId: q.id,
      questionNumber: q.questionNumber,
      section: q.section,
      module: q.module,
      userAnswer,
      correctAnswer: q.answer,
      isCorrect,
      domain: q.domain,
      skill: q.skill,
      difficulty: q.difficulty,
      timeSpent,
      wasFlagged
    });
  }

  const rwScaled = rawToScaledRW(rwCorrect, 54);
  const mathScaled = rawToScaledMath(mathCorrect, 44);
  const composite = rwScaled + mathScaled;
  const percentile = calculatePercentile(composite);
  const scoreRange = generateScoreRange(composite);

  const domainBreakdown: Record<string, DomainStats> = {};
  for (const [domain, stats] of Object.entries(domainMap)) {
    domainBreakdown[domain] = {
      domain,
      correct: stats.correct,
      total: stats.total,
      percentage: Math.round((stats.correct / stats.total) * 100)
    };
  }

  const skillBreakdown: Record<string, SkillStats> = {};
  for (const [skill, stats] of Object.entries(skillMap)) {
    skillBreakdown[skill] = {
      skill,
      domain: stats.domain,
      correct: stats.correct,
      total: stats.total,
      percentage: Math.round((stats.correct / stats.total) * 100)
    };
  }

  const difficultyBreakdown: Record<DifficultyLevel, { correct: number; total: number; percentage: number }> = {
    'Easy': {
      correct: difficultyMap['Easy'].correct,
      total: difficultyMap['Easy'].total,
      percentage: difficultyMap['Easy'].total ? Math.round((difficultyMap['Easy'].correct / difficultyMap['Easy'].total) * 100) : 0
    },
    'Medium': {
      correct: difficultyMap['Medium'].correct,
      total: difficultyMap['Medium'].total,
      percentage: difficultyMap['Medium'].total ? Math.round((difficultyMap['Medium'].correct / difficultyMap['Medium'].total) * 100) : 0
    },
    'Hard': {
      correct: difficultyMap['Hard'].correct,
      total: difficultyMap['Hard'].total,
      percentage: difficultyMap['Hard'].total ? Math.round((difficultyMap['Hard'].correct / difficultyMap['Hard'].total) * 100) : 0
    },
    'Elite 1500+': {
      correct: difficultyMap['Elite 1500+'].correct,
      total: difficultyMap['Elite 1500+'].total,
      percentage: difficultyMap['Elite 1500+'].total ? Math.round((difficultyMap['Elite 1500+'].correct / difficultyMap['Elite 1500+'].total) * 100) : 0
    }
  };

  const totalQuestions = allQuestions.length;
  const totalCorrect = rwCorrect + mathCorrect;

  return {
    id: `${examId}-${Date.now()}`,
    examId,
    examTitle: metadata.title,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    timestamp: Date.now(),
    rwScore: rwScaled,
    mathScore: mathScaled,
    compositeScore: composite,
    scoreRange,
    percentile,
    accuracy: Math.round((totalCorrect / totalQuestions) * 100),
    totalCorrect,
    totalQuestions,
    totalTimeSeconds: totalTime,
    domainBreakdown,
    skillBreakdown,
    difficultyBreakdown,
    timeStats: {
      averageTimePerQuestion: Math.round(totalTime / totalQuestions),
      rwAverageTime: Math.round(rwTimeSum / 54),
      mathAverageTime: Math.round(mathTimeSum / 44),
      correctAvgTime: correctCount > 0 ? Math.round(correctTimeSum / correctCount) : 0,
      incorrectAvgTime: incorrectCount > 0 ? Math.round(incorrectTimeSum / incorrectCount) : 0
    },
    questionResults: questionSummaries
  };
}
