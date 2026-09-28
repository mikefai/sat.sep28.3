export type ExamId = 'mock-1' | 'mock-2';
export type SectionId = 'reading-writing' | 'math';
export type ModuleNumber = 1 | 2;
export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard' | 'Elite 1500+';

export type RWDomain = 
  | 'Information and Ideas'
  | 'Craft and Structure'
  | 'Expression of Ideas'
  | 'Standard English Conventions';

export type MathDomain = 
  | 'Algebra'
  | 'Advanced Math'
  | 'Problem Solving & Data Analysis'
  | 'Geometry & Trigonometry';

export type QuestionDomain = RWDomain | MathDomain;

export type QuestionType = 'multiple-choice' | 'spr';

export interface QuestionChoice {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface DistractorExplanation {
  whyStudentsChoose: string;
  whyIncorrect: string;
  coreTrap: string;
}

export interface TableData {
  title?: string;
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
}

export interface Question {
  id: string; // e.g. "m1-rw1-q1"
  examId: ExamId;
  section: SectionId;
  module: ModuleNumber;
  questionNumber: number;
  domain: QuestionDomain;
  skill: string;
  difficulty: DifficultyLevel;
  type: QuestionType;
  passageTitle?: string;
  passageSource?: string;
  passage?: string;
  question: string;
  tableData?: TableData;
  figureSvg?: string;
  figureType?: 'geometry' | 'scatterplot' | 'histogram' | 'function' | 'box-plot' | 'unit-circle' | 'table';
  choices?: QuestionChoice[];
  answer: string; // 'A' | 'B' | 'C' | 'D' or number / fraction string for SPR
  acceptableAnswers?: string[];
  explanation: string;
  distractorExplanations?: Partial<Record<'A' | 'B' | 'C' | 'D', DistractorExplanation>>;
}

export interface ExamSession {
  examId: ExamId;
  mode: 'timed' | 'untimed' | 'practice';
  currentSection: SectionId;
  currentModule: ModuleNumber;
  currentQuestionIndex: number;
  answers: Record<string, string>;
  flagged: Record<string, boolean>;
  eliminations: Record<string, string[]>;
  timeRemaining: number; // seconds remaining in current module
  timeSpentPerQuestion: Record<string, number>;
  notes: Record<string, string>;
  highlights: Record<string, string[]>;
  status: 'in-progress' | 'module-review' | 'break' | 'completed';
  startedAt: number;
  completedAt?: number;
}

export interface DomainStats {
  domain: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface SkillStats {
  skill: string;
  domain: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface QuestionResultSummary {
  questionId: string;
  questionNumber: number;
  section: SectionId;
  module: ModuleNumber;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  domain: string;
  skill: string;
  difficulty: DifficultyLevel;
  timeSpent: number;
  wasFlagged: boolean;
}

export interface ExamResult {
  id: string;
  examId: ExamId;
  examTitle: string;
  date: string;
  timestamp: number;
  rwScore: number;
  mathScore: number;
  compositeScore: number;
  scoreRange: string;
  percentile: number;
  accuracy: number;
  totalCorrect: number;
  totalQuestions: number;
  totalTimeSeconds: number;
  domainBreakdown: Record<string, DomainStats>;
  skillBreakdown: Record<string, SkillStats>;
  difficultyBreakdown: Record<DifficultyLevel, { correct: number; total: number; percentage: number }>;
  timeStats: {
    averageTimePerQuestion: number;
    rwAverageTime: number;
    mathAverageTime: number;
    correctAvgTime: number;
    incorrectAvgTime: number;
  };
  questionResults: QuestionResultSummary[];
}
