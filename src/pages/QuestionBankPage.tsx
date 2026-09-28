import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  CheckCircle2, 
  Flame, 
  Eye, 
  EyeOff, 
  Layers, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { getExamQuestions } from '../data';
import { Question, ExamId, SectionId, DifficultyLevel } from '../types/exam';
import { MathRenderer } from '../components/common/MathRenderer';

export const QuestionBankPage: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<'all' | ExamId>('all');
  const [selectedSection, setSelectedSection] = useState<'all' | SectionId>('all');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const allQuestions = [...getExamQuestions('mock-1'), ...getExamQuestions('mock-2')];

  const domainsList = Array.from(new Set(allQuestions.map(q => q.domain)));

  const filteredQuestions = allQuestions.filter(q => {
    if (selectedExam !== 'all' && q.examId !== selectedExam) return false;
    if (selectedSection !== 'all' && q.section !== selectedSection) return false;
    if (selectedDomain !== 'all' && q.domain !== selectedDomain) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
    if (searchQuery.trim() !== '') {
      const qText = `${q.question} ${q.passage || ''} ${q.skill} ${q.domain}`.toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });

  const toggleReveal = (qId: string) => {
    setRevealedAnswers(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Complete 196-Item Question Repository</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Digital SAT Practice & Study Vault
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Browse, search, and practice with all 196 authentic DSAT items from Mock Exam 1 and Mock Exam 2 with instant answer reveals and distractor analysis.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search keywords, concepts, passages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            {/* Exam Select */}
            <div>
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value as any)}
                className="w-full py-2.5 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium focus:outline-none"
              >
                <option value="all">All Exams (196 Qs)</option>
                <option value="mock-1">Mock Exam 1 (98 Qs)</option>
                <option value="mock-2">Mock Exam 2 (98 Qs)</option>
              </select>
            </div>

            {/* Section Select */}
            <div>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value as any)}
                className="w-full py-2.5 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium focus:outline-none"
              >
                <option value="all">All Sections</option>
                <option value="reading-writing">Reading & Writing</option>
                <option value="math">Math</option>
              </select>
            </div>

            {/* Difficulty Select */}
            <div>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full py-2.5 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium focus:outline-none"
              >
                <option value="all">All Difficulties</option>
                <option value="Easy">Easy (20%)</option>
                <option value="Medium">Medium (45%)</option>
                <option value="Hard">Hard (25%)</option>
                <option value="Elite 1500+">Elite 1500+ (10%)</option>
              </select>
            </div>
          </div>

          {/* Domain Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <span className="text-slate-400 font-semibold mr-1">Domain:</span>
            <button
              onClick={() => setSelectedDomain('all')}
              className={`px-3 py-1 rounded-lg transition ${
                selectedDomain === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              All Domains
            </button>
            {domainsList.map(dom => (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-3 py-1 rounded-lg transition ${
                  selectedDomain === dom
                    ? 'bg-brand-600 text-white font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {dom}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-2">
          <span>Showing <strong>{filteredQuestions.length}</strong> questions matching filters</span>
          <button
            onClick={() => {
              const allRevealed = filteredQuestions.every(q => revealedAnswers[q.id]);
              const newState: Record<string, boolean> = {};
              filteredQuestions.forEach(q => {
                newState[q.id] = !allRevealed;
              });
              setRevealedAnswers(newState);
            }}
            className="text-brand-600 dark:text-brand-400 font-semibold hover:underline"
          >
            Toggle All Explanations
          </button>
        </div>

        {/* Question Cards Stream */}
        <div className="space-y-6">
          {filteredQuestions.map((q, idx) => {
            const isRevealed = !!revealedAnswers[q.id];

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
              >
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-bold text-xs bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-2.5 py-1 rounded-md">
                      Item #{idx + 1}
                    </span>
                    <span className="text-xs text-slate-500">
                      {q.examId === 'mock-1' ? 'Mock 1' : 'Mock 2'} • {q.section === 'reading-writing' ? 'RW' : 'Math'} M{q.module} Q{q.questionNumber}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                      {q.domain}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {q.difficulty}
                    </span>
                  </div>
                </div>

                {/* Passage if applicable */}
                {q.passage && (
                  <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                      Stimulus / Passage
                    </div>
                    <div className="passage-content font-serif text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                      <MathRenderer content={q.passage} />
                    </div>
                  </div>
                )}

                {/* Question Prompt */}
                <div className="text-base font-semibold text-slate-900 dark:text-white">
                  <MathRenderer content={q.question} />
                </div>

                {/* Choices */}
                {q.type === 'multiple-choice' && q.choices && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.choices.map((choice) => (
                      <div
                        key={choice.id}
                        className={`p-3.5 rounded-xl border text-xs flex items-start space-x-3 ${
                          isRevealed && choice.id === q.answer
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold'
                            : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          isRevealed && choice.id === q.answer
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          {choice.id}
                        </span>
                        <div className="pt-0.5">
                          <MathRenderer content={choice.text} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reveal Explanation Button */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleReveal(q.id)}
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition flex items-center space-x-1.5"
                  >
                    {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-brand-600" />}
                    <span>{isRevealed ? 'Hide Solution' : 'Reveal Solution & Traps'}</span>
                  </button>
                </div>

                {/* Solution Drawer */}
                {isRevealed && (
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-fadeIn">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 space-y-1.5 text-xs">
                      <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Correct Answer: {q.answer}</span>
                      </div>
                      <div className="text-emerald-900 dark:text-emerald-200 leading-relaxed">
                        <MathRenderer content={q.explanation} />
                      </div>
                    </div>

                    {q.distractorExplanations && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {Object.entries(q.distractorExplanations).map(([opt, distractor]) => (
                          <div
                            key={opt}
                            className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 text-xs"
                          >
                            <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                              <span>Option {opt}</span>
                              <span className="text-[10px] text-rose-600 dark:text-rose-400 uppercase font-semibold">
                                {distractor.coreTrap}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-500">
                              <strong>Why chosen:</strong> {distractor.whyStudentsChoose}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              <strong>Why incorrect:</strong> {distractor.whyIncorrect}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
