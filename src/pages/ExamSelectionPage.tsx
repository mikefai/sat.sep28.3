import React from 'react';
import { Play, Clock, BookOpen, CheckCircle, Flame, ArrowRight, RotateCcw } from 'lucide-react';
import { EXAM_METADATA } from '../data';
import { ExamSession, ExamId } from '../types/exam';

interface ExamSelectionPageProps {
  onStartExam: (examId: ExamId, mode: 'timed' | 'untimed') => void;
  activeSession: ExamSession | null;
  onResumeSession: () => void;
}

export const ExamSelectionPage: React.FC<ExamSelectionPageProps> = ({
  onStartExam,
  activeSession,
  onResumeSession
}) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Digital SAT 2026 Mock Exam Catalog
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Select a full-length 98-question mock examination. Both exams closely follow official Bluebook timing, module navigation, and IRT psychometric curves.
          </p>
        </div>

        {/* In-Progress Session Notification Banner */}
        {activeSession && activeSession.status !== 'completed' && (
          <div className="bg-amber-500/10 border-2 border-amber-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                <RotateCcw className="w-5 h-5 font-bold" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Exam Session In Progress: {activeSession.examId === 'mock-1' ? 'Mock Exam 1' : 'Mock Exam 2'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {activeSession.currentSection === 'reading-writing' ? 'Reading & Writing' : 'Math'} • Module {activeSession.currentModule} • Question {activeSession.currentQuestionIndex + 1}
                </p>
              </div>
            </div>
            <button
              onClick={onResumeSession}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-md transition shrink-0"
            >
              Resume Active Exam
            </button>
          </div>
        )}

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mock Exam 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                  Mock Exam 1
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Standard Benchmark</span>
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {EXAM_METADATA['mock-1'].title}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {EXAM_METADATA['mock-1'].description}
              </p>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 text-center text-xs">
                <div>
                  <div className="text-slate-400 font-medium">Questions</div>
                  <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">98 Qs</div>
                </div>
                <div>
                  <div className="text-slate-400 font-medium">Estimated Time</div>
                  <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">134 Mins</div>
                </div>
                <div>
                  <div className="text-slate-400 font-medium">Difficulty</div>
                  <div className="font-extrabold text-brand-600 mt-0.5">Adaptive</div>
                </div>
              </div>

              {/* Module Feature List */}
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {EXAM_METADATA['mock-1'].features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => onStartExam('mock-1', 'timed')}
                className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Start Timed Exam (Recommended)</span>
              </button>
              <button
                onClick={() => onStartExam('mock-1', 'untimed')}
                className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs transition"
              >
                Start Untimed Study Practice
              </button>
            </div>
          </div>

          {/* Mock Exam 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  Mock Exam 2
                </span>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 flex items-center space-x-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>1500+ Calibrated</span>
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {EXAM_METADATA['mock-2'].title}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {EXAM_METADATA['mock-2'].description}
              </p>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 text-center text-xs">
                <div>
                  <div className="text-slate-400 font-medium">Questions</div>
                  <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">98 Qs</div>
                </div>
                <div>
                  <div className="text-slate-400 font-medium">Estimated Time</div>
                  <div className="font-extrabold text-slate-900 dark:text-white mt-0.5">134 Mins</div>
                </div>
                <div>
                  <div className="text-slate-400 font-medium">Difficulty</div>
                  <div className="font-extrabold text-purple-600 mt-0.5">Elite 1500+</div>
                </div>
              </div>

              {/* Module Feature List */}
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {EXAM_METADATA['mock-2'].features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => onStartExam('mock-2', 'timed')}
                className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Start Timed Exam (Recommended)</span>
              </button>
              <button
                onClick={() => onStartExam('mock-2', 'untimed')}
                className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs transition"
              >
                Start Untimed Study Practice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
