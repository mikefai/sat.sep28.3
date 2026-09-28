import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  BarChart3, 
  Printer, 
  ArrowLeft, 
  Flame, 
  FileCheck, 
  RotateCcw, 
  Sparkles, 
  X 
} from 'lucide-react';
import { ExamResult, Question, DifficultyLevel } from '../types/exam';
import { getQuestionById } from '../data';
import { MathRenderer } from '../components/common/MathRenderer';

interface ResultsPageProps {
  result: ExamResult;
  onRetakeExam: () => void;
  onNavigate: (page: string) => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({
  result,
  onRetakeExam,
  onNavigate
}) => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | 'incorrect' | 'correct' | 'flagged'>('all');
  const [domainFilter, setDomainFilter] = useState<string>('all');

  // Trigger celebration confetti on score load if score is strong (>= 1200)
  useEffect(() => {
    if (result.compositeScore >= 1200) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [result.compositeScore]);

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainder = sec % 60;
    if (mins === 0) return `${remainder}s`;
    return `${mins}m ${remainder}s`;
  };

  const filteredResults = result.questionResults.filter(qRes => {
    if (statusFilter === 'incorrect' && qRes.isCorrect) return false;
    if (statusFilter === 'correct' && !qRes.isCorrect) return false;
    if (statusFilter === 'flagged' && !qRes.wasFlagged) return false;
    if (domainFilter !== 'all' && qRes.domain !== domainFilter) return false;
    return true;
  });

  const domainsList = Array.from(new Set(result.questionResults.map(q => q.domain)));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Header & Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <button
              onClick={() => onNavigate('exams')}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Mock Exams</span>
            </button>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Exam Performance & Score Report
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {result.examTitle} • Completed on {result.date}
            </p>
          </div>

          <div className="flex items-center space-x-3 no-print">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 font-semibold text-xs transition flex items-center space-x-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print Score Report</span>
            </button>
            <button
              onClick={onRetakeExam}
              className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition flex items-center space-x-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Exam</span>
            </button>
          </div>
        </div>

        {/* Hero Score Showcase Card */}
        <div className="bg-gradient-to-br from-bluebook-header via-bluebook-dark to-slate-950 text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Composite Score */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-3">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated Official Scaled Score</span>
              </div>
              <div className="font-mono text-6xl md:text-7xl font-black text-white tracking-tight">
                {result.compositeScore}
              </div>
              <div className="text-sm font-semibold text-blue-200">
                Score Range: <span className="text-white font-bold">{result.scoreRange}</span>
              </div>
              <div className="text-xs text-blue-300 flex items-center justify-center lg:justify-start space-x-2 pt-1">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{result.percentile}th National Representative Percentile</span>
              </div>
            </div>

            {/* Right: Section Scores & High-Level Stats */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Reading & Writing Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Reading & Writing
                </div>
                <div className="font-mono text-4xl font-extrabold text-white">
                  {result.rwScore}
                </div>
                <div className="text-xs text-blue-100 flex items-center justify-between pt-1 border-t border-white/10">
                  <span>Scaled Range: 200–800</span>
                  <span className="font-semibold text-emerald-300">Benchmark Met</span>
                </div>
              </div>

              {/* Math Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Math Section
                </div>
                <div className="font-mono text-4xl font-extrabold text-white">
                  {result.mathScore}
                </div>
                <div className="text-xs text-blue-100 flex items-center justify-between pt-1 border-t border-white/10">
                  <span>Scaled Range: 200–800</span>
                  <span className="font-semibold text-emerald-300">Benchmark Met</span>
                </div>
              </div>

              {/* Accuracy */}
              <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                <div className="text-[11px] text-slate-300 font-medium">Overall Accuracy</div>
                <div className="text-xl font-bold text-white mt-0.5">
                  {result.accuracy}% ({result.totalCorrect}/{result.totalQuestions})
                </div>
              </div>

              {/* Total Time */}
              <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                <div className="text-[11px] text-slate-300 font-medium">Total Active Time</div>
                <div className="text-xl font-bold text-white mt-0.5">
                  {formatSeconds(result.totalTimeSeconds)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Domain Breakdown */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-brand-600" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Domain Mastery Breakdown
              </h2>
            </div>

            <div className="space-y-4">
              {Object.values(result.domainBreakdown).map((d) => (
                <div key={d.domain} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-800 dark:text-slate-200">{d.domain}</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">
                      {d.percentage}% ({d.correct}/{d.total})
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        d.percentage >= 80
                          ? 'bg-emerald-500'
                          : d.percentage >= 60
                          ? 'bg-brand-500'
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${d.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Difficulty & Time Analytics */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Pacing & Difficulty Breakdown
              </h2>
            </div>

            {/* Difficulty Meters */}
            <div className="grid grid-cols-2 gap-3 text-center">
              {(['Easy', 'Medium', 'Hard', 'Elite 1500+'] as DifficultyLevel[]).map((level) => {
                const diff = result.difficultyBreakdown[level];
                return (
                  <div key={level} className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">{level}</div>
                    <div className="font-extrabold text-lg text-slate-900 dark:text-white mt-0.5">
                      {diff.percentage}%
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {diff.correct}/{diff.total} Correct
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pacing Stats */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex justify-between py-1 text-slate-600 dark:text-slate-400">
                <span>Avg. Time per Question:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">
                  {formatSeconds(result.timeStats.averageTimePerQuestion)}
                </span>
              </div>
              <div className="flex justify-between py-1 text-slate-600 dark:text-slate-400">
                <span>Avg. Time on Correct Items:</span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {formatSeconds(result.timeStats.correctAvgTime)}
                </span>
              </div>
              <div className="flex justify-between py-1 text-slate-600 dark:text-slate-400">
                <span>Avg. Time on Incorrect Items:</span>
                <span className="font-mono font-bold text-rose-600 dark:text-rose-400">
                  {formatSeconds(result.timeStats.incorrectAvgTime)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Question-by-Question Review Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <FileCheck className="w-5 h-5 text-brand-600" />
                <span>Question-by-Question In-Depth Review</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Click any question to view its full passage, step-by-step solution, and detailed distractor trap rationales.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-medium">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1 rounded-lg transition ${
                    statusFilter === 'all'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-bold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  All ({result.questionResults.length})
                </button>
                <button
                  onClick={() => setStatusFilter('incorrect')}
                  className={`px-3 py-1 rounded-lg transition ${
                    statusFilter === 'incorrect'
                      ? 'bg-rose-600 text-white shadow-sm font-bold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Incorrect ({result.questionResults.filter(q => !q.isCorrect).length})
                </button>
                <button
                  onClick={() => setStatusFilter('correct')}
                  className={`px-3 py-1 rounded-lg transition ${
                    statusFilter === 'correct'
                      ? 'bg-emerald-600 text-white shadow-sm font-bold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Correct ({result.totalCorrect})
                </button>
                <button
                  onClick={() => setStatusFilter('flagged')}
                  className={`px-3 py-1 rounded-lg transition ${
                    statusFilter === 'flagged'
                      ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Flagged ({result.questionResults.filter(q => q.wasFlagged).length})
                </button>
              </div>

              {/* Domain Dropdown */}
              <select
                value={domainFilter}
                onChange={(e) => setDomainFilter(e.target.value)}
                className="text-xs font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 focus:outline-none"
              >
                <option value="all">All Domains</option>
                {domainsList.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Section & Module</th>
                  <th className="px-4 py-3">Domain</th>
                  <th className="px-4 py-3">Skill</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Your Answer</th>
                  <th className="px-4 py-3">Correct</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {filteredResults.map((qRes, idx) => {
                  const fullQ = getQuestionById(qRes.questionId);

                  return (
                    <tr
                      key={qRes.questionId}
                      onClick={() => fullQ && setSelectedQuestion(fullQ)}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition"
                    >
                      <td className="px-4 py-3.5 font-bold font-mono text-slate-900 dark:text-white">
                        {idx + 1}
                      </td>
                      <td className="px-4 py-3.5 text-slate-600 dark:text-slate-300">
                        {qRes.section === 'reading-writing' ? 'RW' : 'Math'} M{qRes.module} Q{qRes.questionNumber}
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-slate-800 dark:text-slate-200">
                        {qRes.domain}
                      </td>
                      <td className="px-4 py-3.5 text-slate-600 dark:text-slate-400">
                        {qRes.skill}
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {qRes.difficulty}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 font-mono font-bold">
                        {qRes.userAnswer || <span className="text-slate-400 italic">Omitted</span>}
                      </td>
                      <td className="px-4 py-3.5 font-mono font-bold text-brand-600">
                        {qRes.correctAnswer}
                      </td>
                      <td className="px-4 py-3.5">
                        {qRes.isCorrect ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Correct</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold text-[11px]">
                            <XCircle className="w-3.5 h-3.5 text-rose-500" />
                            <span>Incorrect</span>
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-right">
                        <button className="text-brand-600 dark:text-brand-400 font-bold hover:underline">
                          Review
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Deep Explanation Modal */}
      {selectedQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-bluebook-header text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-xs uppercase font-extrabold tracking-wider bg-white/20 px-2.5 py-1 rounded-md">
                  {selectedQuestion.section === 'reading-writing' ? 'Reading & Writing' : 'Math'} • Module {selectedQuestion.module} Q{selectedQuestion.questionNumber}
                </span>
                <span className="text-xs text-blue-200 font-medium">
                  {selectedQuestion.domain} ({selectedQuestion.skill})
                </span>
              </div>
              <button
                onClick={() => setSelectedQuestion(null)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200">
              {/* Passage Stimulus if present */}
              {selectedQuestion.passage && (
                <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                    Passage Stimulus
                  </div>
                  <div className="passage-content font-serif text-sm leading-relaxed">
                    <MathRenderer content={selectedQuestion.passage} />
                  </div>
                </div>
              )}

              {/* Question Text */}
              <div className="p-4 bg-blue-50/50 dark:bg-blue-950/30 rounded-2xl border border-blue-200 dark:border-blue-900/50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1 font-mono">
                  Question Prompt
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  <MathRenderer content={selectedQuestion.question} />
                </div>
              </div>

              {/* Correct Answer Rationale */}
              <div className="p-5 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Correct Answer: {selectedQuestion.answer}</span>
                </div>
                <div className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
                  <MathRenderer content={selectedQuestion.explanation} />
                </div>
              </div>

              {/* Distractor Rationales (Why incorrect choices fail & common traps) */}
              {selectedQuestion.distractorExplanations && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <Flame className="w-4 h-4 text-rose-500" />
                    <span>Distractor Analysis & Tested Traps</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {Object.entries(selectedQuestion.distractorExplanations).map(([opt, distractor]) => (
                      <div
                        key={opt}
                        className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs"
                      >
                        <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                          <span>Option {opt}</span>
                          <span className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold uppercase bg-rose-50 dark:bg-rose-950/50 px-1.5 py-0.5 rounded">
                            {distractor.coreTrap}
                          </span>
                        </div>
                        <div className="text-slate-600 dark:text-slate-400">
                          <strong className="text-slate-700 dark:text-slate-300">Why chosen:</strong> {distractor.whyStudentsChoose}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400">
                          <strong className="text-slate-700 dark:text-slate-300">Why incorrect:</strong> {distractor.whyIncorrect}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 text-right">
              <button
                onClick={() => setSelectedQuestion(null)}
                className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-lg transition hover:opacity-90"
              >
                Close Explanation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
