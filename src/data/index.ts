import { ExamId, Question, SectionId, ModuleNumber } from '../types/exam';
import { mock1_rw_module1 } from './mock1/rw_module1';
import { mock1_rw_module2 } from './mock1/rw_module2';
import { mock1_math_module1 } from './mock1/math_module1';
import { mock1_math_module2 } from './mock1/math_module2';
import { mock2_rw_module1 } from './mock2/rw_module1';
import { mock2_rw_module2 } from './mock2/rw_module2';
import { mock2_math_module1 } from './mock2/math_module1';
import { mock2_math_module2 } from './mock2/math_module2';

export interface ExamMetadata {
  id: ExamId;
  title: string;
  subtitle: string;
  totalQuestions: number;
  estimatedMinutes: number;
  difficulty: 'Realistic Adaptive' | 'Challenging 1500+ Calibrated';
  rwCount: number;
  mathCount: number;
  description: string;
  features: string[];
}

export const EXAM_METADATA: Record<ExamId, ExamMetadata> = {
  'mock-1': {
    id: 'mock-1',
    title: 'DSAT 2026 Full-Length Mock Exam 1',
    subtitle: 'Standard Adaptive Benchmark Examination',
    totalQuestions: 98,
    estimatedMinutes: 134,
    difficulty: 'Realistic Adaptive',
    rwCount: 54,
    mathCount: 44,
    description: 'Official-length Digital SAT practice exam covering full RW and Math modules with Bluebook pacing, Desmos calculator integration, and psychometric scoring.',
    features: [
      '27 Questions per RW Module (32 mins each)',
      '22 Questions per Math Module (35 mins each)',
      'Scheduled 10-Minute Break Screen',
      'Desmos-Style Graphing Calculator & Geometry tools',
      'Formula Reference Sheet and Annotator',
      '100% Distractor Trap Explanations'
    ]
  },
  'mock-2': {
    id: 'mock-2',
    title: 'DSAT 2026 Full-Length Mock Exam 2',
    subtitle: 'Advanced High-Yield Diagnostic Examination',
    totalQuestions: 98,
    estimatedMinutes: 134,
    difficulty: 'Challenging 1500+ Calibrated',
    rwCount: 54,
    mathCount: 44,
    description: 'Targeted high-difficulty exam featuring challenging vocabulary, advanced reading inferences, multi-step nonlinear algebra, and non-routine geometry.',
    features: [
      'Calibrated for top-percentile test-takers',
      'Advanced Reading & Writing Passage Synthesis',
      'Nonlinear Quadratic & Radical Systems in Math',
      'Detailed Domain Analytics & Score Range Predictor',
      'Student-Produced Response (SPR) validation',
      'Actionable Remediation Strategy Guide'
    ]
  }
};

export const ALL_QUESTIONS: Record<ExamId, Record<SectionId, Record<ModuleNumber, Question[]>>> = {
  'mock-1': {
    'reading-writing': {
      1: mock1_rw_module1,
      2: mock1_rw_module2
    },
    'math': {
      1: mock1_math_module1,
      2: mock1_math_module2
    }
  },
  'mock-2': {
    'reading-writing': {
      1: mock2_rw_module1,
      2: mock2_rw_module2
    },
    'math': {
      1: mock2_math_module1,
      2: mock2_math_module2
    }
  }
};

export function getExamQuestions(examId: ExamId): Question[] {
  const exam = ALL_QUESTIONS[examId];
  return [
    ...exam['reading-writing'][1],
    ...exam['reading-writing'][2],
    ...exam['math'][1],
    ...exam['math'][2]
  ];
}

export function getModuleQuestions(examId: ExamId, section: SectionId, module: ModuleNumber): Question[] {
  return ALL_QUESTIONS[examId][section][module];
}

export function getQuestionById(questionId: string): Question | undefined {
  const all = [...getExamQuestions('mock-1'), ...getExamQuestions('mock-2')];
  return all.find(q => q.id === questionId);
}
