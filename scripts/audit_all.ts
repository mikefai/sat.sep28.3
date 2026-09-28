import { ALL_QUESTIONS, getExamQuestions } from '../src/data/index.js';
import { HARDEST_QUESTIONS } from '../src/data/hardest_questions.js';
import { rawToScaledRW, rawToScaledMath, calculatePercentile, generateScoreRange } from '../src/utils/scoring.js';

console.log('=== APEX DSAT DEEP AUDIT SUITE ===\n');

let errorCount = 0;
let warningCount = 0;

function reportError(msg: string) {
  console.error('❌ ERROR:', msg);
  errorCount++;
}

function reportWarning(msg: string) {
  console.warn('⚠️ WARNING:', msg);
  warningCount++;
}

// Helper to check LaTeX balance
function checkLatex(text: string | undefined, qId: string, location: string) {
  if (!text) return;
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '$' && (i === 0 || text[i - 1] !== '\\')) {
      count++;
    }
  }
  if (count % 2 !== 0) {
    reportWarning(`Odd number of '$' in ${qId} (${location}): count = ${count}`);
  }
}

// 1. Audit Mock Exams
const exams = ['mock-1', 'mock-2'] as const;
for (const examId of exams) {
  const allQs = getExamQuestions(examId);
  console.log(`Auditing ${examId}: ${allQs.length} questions`);

  if (allQs.length !== 98) {
    reportError(`${examId} has ${allQs.length} questions instead of 98`);
  }

  // Check unique IDs
  const seenIds = new Set<string>();
  for (const q of allQs) {
    if (seenIds.has(q.id)) {
      reportError(`Duplicate question ID: ${q.id} in ${examId}`);
    }
    seenIds.add(q.id);
  }

  // Check sections & modules
  const sections = ['reading-writing', 'math'] as const;
  for (const sec of sections) {
    for (const mod of [1, 2] as const) {
      const moduleQs = ALL_QUESTIONS[examId][sec][mod];
      const expected = sec === 'reading-writing' ? 27 : 22;
      if (moduleQs.length !== expected) {
        reportError(`${examId} ${sec} M${mod} has ${moduleQs.length} questions (expected ${expected})`);
      }

      moduleQs.forEach((q, idx) => {
        // Question number check
        if (q.questionNumber !== idx + 1) {
          reportWarning(`${q.id}: questionNumber is ${q.questionNumber} but index is ${idx + 1}`);
        }

        // Section & Module check
        if (q.section !== sec) {
          reportError(`${q.id}: section is ${q.section}, expected ${sec}`);
        }
        if (q.module !== mod) {
          reportError(`${q.id}: module is ${q.module}, expected ${mod}`);
        }
        if (q.examId !== examId) {
          reportError(`${q.id}: examId is ${q.examId}, expected ${examId}`);
        }

        // Domain & Skill
        if (!q.domain || q.domain.trim() === '') {
          reportError(`${q.id}: missing domain`);
        }
        if (!q.skill || q.skill.trim() === '') {
          reportError(`${q.id}: missing skill`);
        }

        // Multiple choice validation
        if (q.type === 'multiple-choice') {
          if (!q.choices || q.choices.length !== 4) {
            reportError(`${q.id}: MC question does not have exactly 4 choices (has ${q.choices?.length})`);
          } else {
            const expectedIds = ['A', 'B', 'C', 'D'];
            const actualIds = q.choices.map(c => c.id);
            if (JSON.stringify(actualIds) !== JSON.stringify(expectedIds)) {
              reportError(`${q.id}: choice IDs are [${actualIds.join(', ')}] instead of [A, B, C, D]`);
            }
            if (!expectedIds.includes(q.answer)) {
              reportError(`${q.id}: answer '${q.answer}' is not in [A, B, C, D]`);
            }
            q.choices.forEach(c => {
              if (!c.text || c.text.trim() === '') {
                reportError(`${q.id}: choice ${c.id} text is empty`);
              }
              checkLatex(c.text, q.id, `choice ${c.id}`);
            });
          }
        } else if (q.type === 'spr') {
          // SPR validation
          if (q.section !== 'math') {
            reportError(`${q.id}: SPR question found in non-math section`);
          }
          if (q.answer === undefined || q.answer === null || q.answer === '') {
            reportError(`${q.id}: SPR question answer is empty`);
          }
        }

        // Passage & Question text
        if (sec === 'reading-writing' && (!q.passage || q.passage.trim() === '')) {
          reportWarning(`${q.id}: RW question has empty passage`);
        }
        if (!q.question || q.question.trim() === '') {
          reportError(`${q.id}: question prompt is empty`);
        }
        if (!q.explanation || q.explanation.trim() === '') {
          reportWarning(`${q.id}: explanation is empty`);
        }

        // Check LaTeX formatting
        checkLatex(q.passage, q.id, 'passage');
        checkLatex(q.question, q.id, 'question');
        checkLatex(q.explanation, q.id, 'explanation');

        // Check distractor rationales if provided
        if (q.distractorExplanations) {
          Object.entries(q.distractorExplanations).forEach(([choiceKey, distractor]) => {
            if (choiceKey === q.answer) {
              reportWarning(`${q.id}: Correct answer '${choiceKey}' is present in distractorExplanations`);
            }
            if (!distractor.whyStudentsChoose || !distractor.whyIncorrect) {
              reportError(`${q.id}: Distractor ${choiceKey} is missing whyStudentsChoose or whyIncorrect`);
            }
          });
        }
      });
    }
  }
}

// 2. Audit Hardest Questions Masterclass
console.log(`\nAuditing HARDEST_QUESTIONS: ${HARDEST_QUESTIONS.length} items`);
if (HARDEST_QUESTIONS.length !== 20) {
  reportError(`HARDEST_QUESTIONS has ${HARDEST_QUESTIONS.length} items, expected 20`);
}
const infCount = HARDEST_QUESTIONS.filter(q => q.category === 'inference').length;
const puncCount = HARDEST_QUESTIONS.filter(q => q.category === 'punctuation').length;
if (infCount !== 10) reportError(`HARDEST_QUESTIONS has ${infCount} inferences, expected 10`);
if (puncCount !== 10) reportError(`HARDEST_QUESTIONS has ${puncCount} punctuations, expected 10`);

HARDEST_QUESTIONS.forEach((q, idx) => {
  if (!q.id) reportError(`Hardest Q #${idx + 1} has no ID`);
  if (!['inference', 'punctuation'].includes(q.category)) {
    reportError(`${q.id}: invalid category ${q.category}`);
  }
  if (!q.subCategory || q.subCategory.trim() === '') {
    reportError(`${q.id}: missing subCategory`);
  }
  if (!q.trapType || q.trapType.trim() === '') {
    reportError(`${q.id}: missing trapType`);
  }
  if (!q.ruleLesson || q.ruleLesson.trim() === '') {
    reportError(`${q.id}: missing ruleLesson`);
  }
  if (!q.proTip || q.proTip.trim() === '') {
    reportError(`${q.id}: missing proTip`);
  }
  if (!q.choices || q.choices.length !== 4) {
    reportError(`${q.id}: does not have 4 choices`);
  } else {
    const choiceIds = q.choices.map(c => c.id);
    if (!choiceIds.includes(q.answer)) {
      reportError(`${q.id}: answer '${q.answer}' not in [${choiceIds.join(', ')}]`);
    }
  }
  checkLatex(q.passage, q.id, 'passage');
  checkLatex(q.question, q.id, 'question');
});

// 3. Audit Scoring Curves & Boundary Edge Cases
console.log('\nAuditing Scoring Functions...');
// Test range 0 to 54 for RW
for (let r = 0; r <= 54; r++) {
  const s = rawToScaledRW(r, 54);
  if (s < 200 || s > 800 || s % 10 !== 0) {
    reportError(`rawToScaledRW(${r}) returned invalid score ${s}`);
  }
}
if (rawToScaledRW(0, 54) !== 200) reportError(`rawToScaledRW(0) must be 200, got ${rawToScaledRW(0, 54)}`);
if (rawToScaledRW(54, 54) !== 800) reportError(`rawToScaledRW(54) must be 800, got ${rawToScaledRW(54, 54)}`);

// Test range 0 to 44 for Math
for (let m = 0; m <= 44; m++) {
  const s = rawToScaledMath(m, 44);
  if (s < 200 || s > 800 || s % 10 !== 0) {
    reportError(`rawToScaledMath(${m}) returned invalid score ${s}`);
  }
}
if (rawToScaledMath(0, 44) !== 200) reportError(`rawToScaledMath(0) must be 200, got ${rawToScaledMath(0, 44)}`);
if (rawToScaledMath(44, 44) !== 800) reportError(`rawToScaledMath(44) must be 800, got ${rawToScaledMath(44, 44)}`);

// Test total score bounds
for (let tot = 400; tot <= 1600; tot += 10) {
  const p = calculatePercentile(tot);
  if (p < 1 || p > 99) {
    reportError(`calculatePercentile(${tot}) returned ${p}`);
  }
  const range = generateScoreRange(tot);
  if (!range || typeof range !== 'string' || !range.includes('-')) {
    reportError(`generateScoreRange(${tot}) returned invalid structure: ${range}`);
  }
}

console.log('\n========================================');
console.log(`AUDIT COMPLETE: ${errorCount} Errors, ${warningCount} Warnings`);
console.log('========================================\n');
