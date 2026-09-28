import React from 'react';
import { Award, RotateCcw, TrendingUp, Calendar, Trash2, ArrowRight, BookOpen } from 'lucide-react';
import { ExamResult } from '../types/exam';

interface ResultsHistoryPageProps {
  history: ExamResult[];
  onSelectResult: (result: ExamResult) => void;
  onClearHistory: () => void;
  onStartExam: (examId: 'mock-1' | 'mock-2') => void;
  onNavigate: (page: string) => void;
}

export const ResultsHistoryPage: React.FC<ResultsHistoryPageProps> = ({
  history,
  onSelectResult,
  onClearHistory,
  onStartExam,
  onNavigate
}) => {
  if (history.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              No Exam History Yet
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Complete your first Digital SAT full-length mock exam to generate scaled scores, domain analytics, and percentiles.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <button
              onClick={() => onStartExam('mock-1')}
              className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition"
            >
              Start Mock Exam 1 (Standard)
            </button>
            <button
              onClick={() => onStartExam('mock-2')}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition"
            >
              Start Mock Exam 2 (1500+ Calibrated)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate highest score and average score
  const highestComposite = Math.max(...history.map(h => h.compositeScore));
  const avgComposite = Math.round(history.reduce((acc, h) => acc + h.compositeScore, 0) / history.length);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Test Performance & Analytics History
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Track your scaled scores, accuracy trends, and percentile progress across exam attempts.
            </p>
          </div>

          <button
            onClick={onClearHistory}
            className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center space-x-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear History</span>
          </button>
        </div>

        {/* High-Level Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div className="text-xs text-slate-400 font-medium">Exams Completed</div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {history.length}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div className="text-xs text-slate-400 font-medium">Highest Scaled Score</div>
            <div className="text-3xl font-extrabold text-brand-600 mt-1">
              {highestComposite}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <div className="text-xs text-slate-400 font-medium">Average Composite Score</div>
            <div className="text-3xl font-extrabold text-purple-600 mt-1">
              {avgComposite}
            </div>
          </div>
        </div>

        {/* Previous Attempts List */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Completed Exam Attempts
          </h2>

          <div className="space-y-3">
            {history.map((h) => (
              <div
                key={h.id}
                onClick={() => onSelectResult(h)}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-500 bg-slate-50/60 dark:bg-slate-950/60 hover:bg-white dark:hover:bg-slate-900 cursor-pointer transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-600 transition">
                      {h.examTitle}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold">
                      {h.percentile}th %ile
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{h.date}</span>
                    </span>
                    <span>•</span>
                    <span>Accuracy: {h.accuracy}% ({h.totalCorrect}/98)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3 text-right">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">RW</div>
                      <div className="font-mono font-bold text-sm text-slate-700 dark:text-slate-300">{h.rwScore}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Math</div>
                      <div className="font-mono font-bold text-sm text-slate-700 dark:text-slate-300">{h.mathScore}</div>
                    </div>
                    <div className="pl-3 border-l border-slate-200 dark:border-slate-700">
                      <div className="text-[10px] text-slate-400 uppercase">Total</div>
                      <div className="font-mono font-extrabold text-2xl text-brand-600">{h.compositeScore}</div>
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
