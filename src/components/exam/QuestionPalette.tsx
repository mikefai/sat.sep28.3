import React from 'react';
import { X, Bookmark, Check } from 'lucide-react';
import { Question } from '../../types/exam';

interface QuestionPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<string, string>;
  flagged: Record<string, boolean>;
  onSelectQuestion: (index: number) => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  isOpen,
  onClose,
  questions,
  currentQuestionIndex,
  answers,
  flagged,
  onSelectQuestion
}) => {
  if (!isOpen) return null;

  const total = questions.length;
  const answeredCount = questions.filter(q => answers[q.id] && answers[q.id].trim() !== '').length;
  const flaggedCount = questions.filter(q => flagged[q.id]).length;
  const unansweredCount = total - answeredCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-xl w-full overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-bluebook-header text-white px-5 py-3.5 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-sm">Question Navigation Palette</h3>
            <div className="text-xs text-blue-200 flex items-center space-x-3 mt-0.5">
              <span>Answered: {answeredCount}/{total}</span>
              <span>•</span>
              <span>Unanswered: {unansweredCount}</span>
              <span>•</span>
              <span className="text-amber-300">Flagged: {flaggedCount}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition"
            title="Close Palette"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend */}
        <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-around text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center space-x-1.5">
            <span className="w-4 h-4 rounded bg-brand-600 text-white flex items-center justify-center text-[10px] font-bold">1</span>
            <span>Answered</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-4 h-4 rounded border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 flex items-center justify-center text-[10px]">1</span>
            <span>Unanswered</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="relative">
              <span className="w-4 h-4 rounded border-2 border-slate-300 bg-white flex items-center justify-center text-[10px]">1</span>
              <Bookmark className="w-3 h-3 text-amber-500 fill-amber-500 absolute -top-1 -right-1.5" />
            </div>
            <span>For Review</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-4 h-4 rounded ring-2 ring-blue-500 ring-offset-1 bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-700">1</span>
            <span>Current</span>
          </div>
        </div>

        {/* Question Grid */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-5 sm:grid-cols-9 gap-2.5">
            {questions.map((q, idx) => {
              const isCurrent = idx === currentQuestionIndex;
              const isAnswered = answers[q.id] && answers[q.id].trim() !== '';
              const isFlagged = !!flagged[q.id];

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onSelectQuestion(idx);
                    onClose();
                  }}
                  className={`relative h-11 rounded-xl font-bold text-sm flex flex-col items-center justify-center transition-all ${
                    isCurrent
                      ? 'ring-2 ring-brand-500 ring-offset-2 bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border-2 border-brand-500'
                      : isAnswered
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{idx + 1}</span>
                  {isFlagged && (
                    <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400 absolute -top-1.5 -right-1" />
                  )}
                  {isAnswered && !isCurrent && (
                    <Check className="w-2.5 h-2.5 text-blue-100 absolute bottom-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 dark:bg-slate-800 px-5 py-3 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-lg hover:opacity-90 transition"
          >
            Return to Exam
          </button>
        </div>
      </div>
    </div>
  );
};
