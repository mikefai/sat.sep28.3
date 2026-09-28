import React, { useState, useMemo } from 'react';
import { 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  Target, 
  ChevronRight, 
  RotateCcw, 
  Filter, 
  AlertTriangle, 
  Lightbulb, 
  Compass, 
  PenTool, 
  Eye, 
  EyeOff,
  ArrowRight,
  X
} from 'lucide-react';
import { HARDEST_QUESTIONS } from '../data/hardest_questions';
import { MathRenderer } from '../components/common/MathRenderer';

interface HardestQuestionsPageProps {
  onNavigateHome?: () => void;
  onStartExam?: (examId: 'mock-1' | 'mock-2') => void;
}

export const HardestQuestionsPage: React.FC<HardestQuestionsPageProps> = ({
  onNavigateHome: _onNavigateHome,
  onStartExam
}) => {
  // State
  const [activeCategory, setActiveCategory] = useState<'all' | 'inference' | 'punctuation'>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [mode, setMode] = useState<'drill' | 'study'>('drill');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [eliminations, setEliminations] = useState<Record<string, Record<string, boolean>>>({});
  const [revealedRationales, setRevealedRationales] = useState<Record<string, boolean>>({});
  const [showRulebookModal, setShowRulebookModal] = useState<boolean>(false);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return HARDEST_QUESTIONS.filter(q => {
      if (activeCategory !== 'all' && q.category !== activeCategory) return false;
      if (selectedSubCategory !== 'all' && q.subCategory !== selectedSubCategory) return false;
      return true;
    });
  }, [activeCategory, selectedSubCategory]);

  // Subcategories available
  const subCategories = useMemo(() => {
    const list = HARDEST_QUESTIONS
      .filter(q => activeCategory === 'all' || q.category === activeCategory)
      .map(q => q.subCategory);
    return Array.from(new Set(list));
  }, [activeCategory]);

  // Stats
  const stats = useMemo(() => {
    const total = HARDEST_QUESTIONS.length;
    const answeredCount = Object.keys(userAnswers).length;
    let correctCount = 0;
    let infCorrect = 0;
    let infTotal = HARDEST_QUESTIONS.filter(q => q.category === 'inference').length;
    let puncCorrect = 0;
    let puncTotal = HARDEST_QUESTIONS.filter(q => q.category === 'punctuation').length;

    HARDEST_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.answer) {
        correctCount++;
        if (q.category === 'inference') infCorrect++;
        if (q.category === 'punctuation') puncCorrect++;
      }
    });

    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    return {
      total,
      answeredCount,
      correctCount,
      accuracy,
      infCorrect,
      infTotal,
      puncCorrect,
      puncTotal
    };
  }, [userAnswers]);

  // Handle option click
  const handleSelectOption = (questionId: string, optionId: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  // Toggle elimination
  const handleToggleEliminate = (e: React.MouseEvent, questionId: string, optionId: string) => {
    e.stopPropagation();
    setEliminations(prev => {
      const qElims = prev[questionId] || {};
      return {
        ...prev,
        [questionId]: {
          ...qElims,
          [optionId]: !qElims[optionId]
        }
      };
    });
  };

  // Reset drill
  const handleResetDrill = () => {
    if (window.confirm('Are you sure you want to reset your drill progress?')) {
      setUserAnswers({});
      setEliminations({});
      setRevealedRationales({});
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Banner / Hero Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-brand-950 to-indigo-950 text-white p-8 sm:p-10 border border-slate-800 shadow-2xl">
          {/* Ambient light glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
                <span>DSAT 2026 Elite 1500+ Masterclass</span>
              </div>

              <button
                onClick={() => setShowRulebookModal(true)}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold text-white transition shadow-sm hover:scale-105"
              >
                <BookOpen className="w-4 h-4 text-brand-300" />
                <span>View SAT 2026 Rule & Trap Blueprint</span>
              </button>
            </div>

            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                The Hardest <span className="bg-gradient-to-r from-amber-300 via-brand-300 to-indigo-200 bg-clip-text text-transparent">Inference & Punctuation</span> Questions
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Authored to replicate the top 1% difficulty ceiling of the Digital SAT 2026. Master the treacherous boundaries of scientific hypothesis testing, competing cosmological models, colon amplification clauses, and restrictive appositive traps.
              </p>
            </div>

            {/* Live Stats Tracker Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
                <div className="text-[11px] text-slate-400 font-medium">Drill Progress</div>
                <div className="text-xl font-black text-white mt-0.5">
                  {stats.answeredCount} <span className="text-xs font-normal text-slate-400">/ {stats.total} Qs</span>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
                <div className="text-[11px] text-slate-400 font-medium">Mastery Accuracy</div>
                <div className={`text-xl font-black mt-0.5 ${stats.accuracy >= 80 ? 'text-emerald-400' : stats.accuracy >= 50 ? 'text-amber-400' : 'text-slate-200'}`}>
                  {stats.answeredCount > 0 ? `${stats.accuracy}%` : '—'}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
                <div className="text-[11px] text-slate-400 font-medium">Inference Score</div>
                <div className="text-xl font-black text-brand-300 mt-0.5">
                  {stats.infCorrect} <span className="text-xs font-normal text-slate-400">/ {stats.infTotal}</span>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
                <div className="text-[11px] text-slate-400 font-medium">Punctuation Score</div>
                <div className="text-xl font-black text-purple-300 mt-0.5">
                  {stats.puncCorrect} <span className="text-xs font-normal text-slate-400">/ {stats.puncTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 p-1 bg-slate-100 dark:bg-slate-950 rounded-xl">
            <button
              onClick={() => { setActiveCategory('all'); setSelectedSubCategory('all'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                activeCategory === 'all'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Elite (20)
            </button>
            <button
              onClick={() => { setActiveCategory('inference'); setSelectedSubCategory('all'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
                activeCategory === 'inference'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Inference (10)</span>
            </button>
            <button
              onClick={() => { setActiveCategory('punctuation'); setSelectedSubCategory('all'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
                activeCategory === 'punctuation'
                  ? 'bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Punctuation (10)</span>
            </button>
          </div>

          {/* Subcategory Filter */}
          {subCategories.length > 1 && (
            <div className="flex items-center space-x-2">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                className="py-1.5 px-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-medium focus:outline-none max-w-xs truncate"
              >
                <option value="all">All Archetypes ({filteredQuestions.length})</option>
                {subCategories.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          )}

          {/* Action Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setMode(mode === 'drill' ? 'study' : 'drill')}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center space-x-1.5 ${
                mode === 'study'
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300'
                  : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              {mode === 'study' ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{mode === 'study' ? 'Study Mode (All Open)' : 'Drill Mode (Interactive)'}</span>
            </button>

            {stats.answeredCount > 0 && (
              <button
                onClick={handleResetDrill}
                className="p-1.5 text-slate-400 hover:text-red-500 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title="Reset answers"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Main Content: Question List */}
        <div className="space-y-8">
          {filteredQuestions.map((q, idx) => {
            const isAnswered = !!userAnswers[q.id];
            const isCorrect = userAnswers[q.id] === q.answer;
            const qElims = eliminations[q.id] || {};
            const isRationaleOpen = mode === 'study' || revealedRationales[q.id] || isAnswered;

            return (
              <div
                key={q.id}
                id={q.id}
                className={`bg-white dark:bg-slate-900 rounded-3xl border transition-all duration-200 shadow-sm overflow-hidden ${
                  isAnswered
                    ? isCorrect
                      ? 'border-emerald-200 dark:border-emerald-900/60 ring-1 ring-emerald-500/20'
                      : 'border-rose-200 dark:border-rose-900/60 ring-1 ring-rose-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700'
                }`}
              >
                {/* Question Header Card Bar */}
                <div className="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-brand-600 dark:bg-brand-500 text-white font-black text-xs flex items-center justify-center shadow-sm">
                      {idx + 1}
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border ${
                      q.category === 'inference'
                        ? 'bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800'
                        : 'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                    }`}>
                      {q.category === 'inference' ? '🔬 Deep Inference' : '✒️ Boundary & Punctuation'}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                      1500+ Elite
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {q.subCategory}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  {isAnswered && (
                    <div className="flex items-center space-x-1.5 font-bold text-xs">
                      {isCorrect ? (
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center space-x-1 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Correct (+1)</span>
                        </span>
                      ) : (
                        <span className="text-rose-600 dark:text-rose-400 flex items-center space-x-1 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-200 dark:border-rose-800">
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Incorrect (Key: Choice {q.answer})</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Main Question Body & Choices */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Passage Box with DSAT Serif Styling */}
                  {q.passage && (
                    <div className="passage-content p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-[15px] sm:text-base">
                      <MathRenderer content={q.passage} />
                    </div>
                  )}

                  {/* Question Stem */}
                  <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                    <MathRenderer content={q.question} />
                  </div>

                  {/* Answer Choices */}
                  <div className="grid grid-cols-1 gap-3">
                    {(q.choices || []).map((choice) => {
                      const isChosen = userAnswers[q.id] === choice.id;
                      const isCorrectChoice = choice.id === q.answer;
                      const isEliminated = qElims[choice.id];

                      let choiceStyle = 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:border-brand-400 dark:hover:border-brand-500';
                      
                      if (isAnswered) {
                        if (isCorrectChoice) {
                          choiceStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-medium ring-1 ring-emerald-500';
                        } else if (isChosen && !isCorrect) {
                          choiceStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-950 dark:text-rose-100 ring-1 ring-rose-500';
                        } else {
                          choiceStyle = 'bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-60';
                        }
                      } else if (isEliminated) {
                        choiceStyle = 'bg-slate-100/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 opacity-40 line-through';
                      }

                      return (
                        <div
                          key={choice.id}
                          onClick={() => !isAnswered && handleSelectOption(q.id, choice.id)}
                          className={`p-4 rounded-2xl border transition flex items-start justify-between gap-4 cursor-pointer relative group ${choiceStyle}`}
                        >
                          <div className="flex items-start space-x-3.5 flex-1">
                            <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition ${
                              isAnswered && isCorrectChoice
                                ? 'bg-emerald-600 text-white'
                                : isAnswered && isChosen && !isCorrect
                                ? 'bg-rose-600 text-white'
                                : isChosen
                                ? 'bg-brand-600 text-white'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/40'
                            }`}>
                              {choice.id}
                            </span>
                            <div className="text-xs sm:text-sm pt-0.5 leading-relaxed">
                              <MathRenderer content={choice.text} />
                            </div>
                          </div>

                          {/* Strikethrough Tool (when unanswered) */}
                          {!isAnswered && (
                            <button
                              onClick={(e) => handleToggleEliminate(e, q.id, choice.id)}
                              className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-lg border transition ${
                                isEliminated
                                  ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-300'
                                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border-transparent hover:border-slate-300 dark:hover:border-slate-700'
                              }`}
                              title="Cross out option"
                            >
                              {isEliminated ? 'Restore' : 'Cross out'}
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Expand / Collapse Rationale Button (if not yet answered in drill mode) */}
                  {!isAnswered && mode === 'drill' && (
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => setRevealedRationales(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                        className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1"
                      >
                        <span>{revealedRationales[q.id] ? 'Hide Answer & Analysis' : 'Peek Answer & Analysis'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transform transition ${revealedRationales[q.id] ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  )}

                  {/* Deep Pedagogical Breakdown & Distractor Traps */}
                  {isRationaleOpen && (
                    <div className="mt-6 space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
                      {/* Rule & Pro-Tip Highlight Box */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 space-y-1.5">
                          <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Trap Identified: {q.trapType}</span>
                          </div>
                          <p className="text-xs text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                            {q.ruleLesson}
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-brand-50/80 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800/80 space-y-1.5">
                          <div className="flex items-center space-x-2 text-brand-800 dark:text-brand-300 font-bold text-xs uppercase tracking-wider">
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>1500+ Strategy Pro Tip</span>
                          </div>
                          <p className="text-xs text-brand-950 dark:text-brand-200 leading-relaxed font-medium">
                            {q.proTip}
                          </p>
                        </div>
                      </div>

                      {/* Correct Answer Explanation */}
                      <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-2">
                        <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span>Correct Answer Rationale (Choice {q.answer})</span>
                        </div>
                        <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>

                      {/* Deep Distractor Trap Diagnostic Analysis */}
                      {q.distractorExplanations && Object.keys(q.distractorExplanations).length > 0 && (
                        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                          <div className="font-bold text-xs text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center space-x-2">
                            <Target className="w-3.5 h-3.5 text-rose-500" />
                            <span>Anatomy of Wrong Answer Traps (Why 80% of Test-Takers Miss This)</span>
                          </div>
                          <div className="grid grid-cols-1 gap-2.5">
                            {Object.entries(q.distractorExplanations).map(([optKey, detail]) => (
                              <div key={optKey} className="text-xs p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                                <div className="flex items-center justify-between font-bold">
                                  <span className="text-rose-600 dark:text-rose-400">Choice {optKey} Trap: {detail.coreTrap}</span>
                                  <span className="text-[10px] text-slate-400 font-medium">Distractor Archetype</span>
                                </div>
                                <div className="text-slate-600 dark:text-slate-400">
                                  <strong className="text-slate-700 dark:text-slate-300">Why chosen:</strong> {detail.whyStudentsChoose}
                                </div>
                                <div className="text-slate-700 dark:text-slate-300">
                                  <strong className="text-rose-700 dark:text-rose-300">Why invalid:</strong> {detail.whyIncorrect}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Next Steps / Full Mock Exam CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Ready to Test Under Real DSAT 2026 Timed Conditions?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm max-w-xl">
              Take our two complete 98-question mock exams featuring adaptive module routing, built-in Desmos graphing, and psychometric IRT scoring.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {onStartExam && (
              <>
                <button
                  onClick={() => onStartExam('mock-1')}
                  className="px-6 py-3 rounded-2xl bg-white text-brand-700 font-bold text-xs sm:text-sm shadow-md hover:bg-slate-100 transition flex items-center space-x-2"
                >
                  <span>Mock Exam 1 (98 Qs)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onStartExam('mock-2')}
                  className="px-6 py-3 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm border border-white/30 transition flex items-center space-x-2"
                >
                  <span>Mock Exam 2 (98 Qs)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

      </div>

      {/* SAT 2026 Rulebook & Trap Blueprint Modal */}
      {showRulebookModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-fadeIn">
            {/* Modal Header */}
            <div className="p-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">
                    SAT 2026 High-Yield Rulebook & Trap Blueprint
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    The 10 golden rules for perfect Reading & Writing performance
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowRulebookModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {/* Part 1: Inference Rules */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm font-black text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Part 1: The 5 Laws of Elite DSAT Inference</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white">1. The Experimental Boundary Law</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      Inferences from scientific experiments must never extend beyond the variables tested by the negative and positive controls. Beware of choices introducing untested biological absolutes.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white">2. Scope & Quantification Restraint</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      Avoid extreme quantifiers (<em>always, completely, exclusively, indispensable</em>) unless the passage explicitly asserts 100% exclusivity.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white">3. Premise-Preservation Rule</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      When a theoretical model encounters contrary empirical data, the correct inference resolves the empirical contradiction without dismissing the entire observation methodology.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white">4. Trade-Off & Equilibrium Mechanics</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      In evolutionary and economic passages, an advantage under condition X almost always carries a compensatory cost or evolutionary vulnerability under condition Y.
                    </p>
                  </div>
                </div>
              </div>

              {/* Part 2: Punctuation Rules */}
              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-2 text-sm font-black text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                  <PenTool className="w-4 h-4" />
                  <span>Part 2: The 5 Laws of Elite Boundaries & Punctuation</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white">1. Colon Explanatory Amplification</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      Use a <strong>colon (:)</strong> between two independent clauses when Clause 2 directly defines, specifies, or answers the premise introduced in Clause 1 (e.g., <em>"...startling conclusion: the colliding remnants..."</em>).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white">2. Essential Appositives (Zero Commas)</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      When a job title or occupation immediately precedes a specific proper name (e.g., <em>"Biochemist Jennifer Doudna developed..."</em>), NEVER place a comma before or after the name!
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white">3. Conjunctive Adverb Semicolon Splices</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      Words like <em>however, therefore, moreover, consequently</em> connecting two independent clauses REQUIRE a semicolon before and a comma after: <code>; however,</code>. A comma alone creates a comma splice!
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white">4. Zero Commas in Long Subject Noun Phrases</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      No matter how long or multi-layered a subject noun phrase is, NEVER place a single comma between the end of the subject and its main predicate verb.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowRulebookModal(false)}
                className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-500 transition"
              >
                Back to Drill Questions
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
