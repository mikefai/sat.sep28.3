import React from 'react';
import { ChevronLeft, ChevronRight, Grid, CheckSquare } from 'lucide-react';

interface ExamFooterProps {
  currentIndex: number;
  totalQuestions: number;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  onPrev: () => void;
  onNext: () => void;
  onOpenPalette: () => void;
  onReviewModule: () => void;
}

export const ExamFooter: React.FC<ExamFooterProps> = ({
  currentIndex,
  totalQuestions,
  isFirstQuestion,
  isLastQuestion,
  onPrev,
  onNext,
  onOpenPalette,
  onReviewModule
}) => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between shadow-inner select-none z-20">
      {/* Back Button */}
      <button
        onClick={onPrev}
        disabled={isFirstQuestion}
        className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition ${
          isFirstQuestion
            ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100 dark:bg-slate-800'
            : 'text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      {/* Central Palette Trigger */}
      <button
        onClick={onOpenPalette}
        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950/50 dark:hover:text-brand-400 border border-slate-200 dark:border-slate-700 transition group shadow-sm"
      >
        <Grid className="w-4 h-4 text-slate-500 group-hover:text-brand-600" />
        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-brand-600">
          Question {currentIndex + 1} of {totalQuestions}
        </span>
      </button>

      {/* Next or Review Button */}
      {isLastQuestion ? (
        <button
          onClick={onReviewModule}
          className="flex items-center space-x-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-md"
        >
          <span>Review Module</span>
          <CheckSquare className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={onNext}
          className="flex items-center space-x-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 transition shadow-md"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
};
