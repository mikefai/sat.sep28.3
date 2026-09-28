import React, { useState } from 'react';
import { Bookmark, CheckCircle, AlertCircle, ArrowRight, ArrowLeft, Filter } from 'lucide-react';
import { Question, SectionId, ModuleNumber } from '../../types/exam';

interface ModuleReviewScreenProps {
  section: SectionId;
  module: ModuleNumber;
  questions: Question[];
  answers: Record<string, string>;
  flagged: Record<string, boolean>;
  onSelectQuestion: (index: number) => void;
  onSubmitModule: () => void;
  onReturnToExam: () => void;
}

export const ModuleReviewScreen: React.FC<ModuleReviewScreenProps> = ({
  section,
  module,
  questions,
  answers,
  flagged,
  onSelectQuestion,
  onSubmitModule,
  onReturnToExam
}) => {
  const [filter, setFilter] = useState<'all' | 'unanswered' | 'flagged'>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const total = questions.length;
  const answeredCount = questions.filter(q => answers[q.id] && answers[q.id].trim() !== '').length;
  const flaggedCount = questions.filter(q => flagged[q.id]).length;
  const unansweredCount = total - answeredCount;

  const filteredQuestions = questions.filter((q) => {
    const isAnswered = answers[q.id] && answers[q.id].trim() !== '';
    const isFlagged = !!flagged[q.id];
    if (filter === 'unanswered') return !isAnswered;
    if (filter === 'flagged') return isFlagged;
    return true;
  });

  return (
    <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-6 shadow-sm">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400">
              {section === 'reading-writing' ? 'Section 1: Reading and Writing' : 'Section 2: Math'}
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
              Check Your Work: Module {module}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Review your answers below. You can return to any question in this module before submitting.
            </p>
          </div>

          {/* Quick Statistics Summary */}
          <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
            <div className="px-3 py-1 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-bold rounded-lg border border-brand-200 dark:border-brand-800">
              Answered: {answeredCount}/{total}
            </div>
            {unansweredCount > 0 && (
              <div className="px-3 py-1 bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold rounded-lg border border-rose-200 dark:border-rose-800">
                Unanswered: {unansweredCount}
              </div>
            )}
            {flaggedCount > 0 && (
              <div className="px-3 py-1 bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold rounded-lg border border-amber-200 dark:border-amber-800 flex items-center space-x-1">
                <Bookmark className="w-3 h-3 fill-amber-500" />
                <span>Flagged: {flaggedCount}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Review Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Filter Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Filter View:</span>
            </div>
            <div className="flex items-center space-x-1.5 text-xs font-medium">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filter === 'all'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                All Questions ({total})
              </button>
              <button
                onClick={() => setFilter('unanswered')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filter === 'unanswered'
                    ? 'bg-rose-600 text-white font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                Unanswered ({unansweredCount})
              </button>
              <button
                onClick={() => setFilter('flagged')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filter === 'flagged'
                    ? 'bg-amber-500 text-slate-900 font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                Flagged for Review ({flaggedCount})
              </button>
            </div>
          </div>

          {/* Questions Grid Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {filteredQuestions.map((q) => {
              const originalIndex = questions.findIndex(orig => orig.id === q.id);
              const isAnswered = answers[q.id] && answers[q.id].trim() !== '';
              const isFlagged = !!flagged[q.id];

              return (
                <button
                  key={q.id}
                  onClick={() => onSelectQuestion(originalIndex)}
                  className={`p-3.5 rounded-xl border-2 text-left flex flex-col justify-between h-24 transition group ${
                    isAnswered
                      ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-500 shadow-sm'
                      : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60 hover:border-rose-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-600">
                      Q{originalIndex + 1}
                    </span>
                    {isFlagged && (
                      <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[11px] mt-2">
                    <span className={`font-semibold ${isAnswered ? 'text-emerald-600 dark:text-emerald-400 flex items-center space-x-1' : 'text-rose-600 dark:text-rose-400'}`}>
                      {isAnswered ? (
                        <>
                          <CheckCircle className="w-3 h-3 inline mr-0.5" />
                          <span>{answers[q.id]}</span>
                        </>
                      ) : (
                        'No Answer'
                      )}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">{q.difficulty}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="p-12 text-center text-slate-400 dark:text-slate-500 text-sm">
              No questions found matching the selected filter.
            </div>
          )}
        </div>
      </div>

      {/* Review Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-8 py-4 flex items-center justify-between select-none shadow-lg">
        <button
          onClick={onReturnToExam}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Questions</span>
        </button>

        <button
          onClick={() => {
            if (unansweredCount > 0) {
              setShowSubmitModal(true);
            } else {
              onSubmitModule();
            }
          }}
          className="flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-md"
        >
          <span>Submit Module {module}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </footer>

      {/* Confirmation Modal if Unanswered Questions Remain */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-md w-full p-6 space-y-4">
            <div className="flex items-center space-x-3 text-amber-500">
              <AlertCircle className="w-6 h-6 shrink-0" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Unanswered Questions Remaining
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              You still have <strong>{unansweredCount} unanswered question{unansweredCount > 1 ? 's' : ''}</strong> in this module. Once you submit this module, you cannot return to change your answers.
            </p>
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              >
                Go Back & Answer
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  onSubmitModule();
                }}
                className="px-4 py-2 text-xs font-bold rounded-lg bg-rose-600 hover:bg-rose-700 text-white shadow"
              >
                Submit Module Anyway
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
