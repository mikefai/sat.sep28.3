import React, { useState } from 'react';
import { 
  Award, 
  Play, 
  CheckCircle2, 
  BarChart2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Calculator, 
  ArrowRight,
  TrendingUp,
  Brain,
  Flame,
  Compass,
  PenTool
} from 'lucide-react';
import { rawToScaledRW, rawToScaledMath, calculatePercentile, generateScoreRange } from '../utils/scoring';

interface HomePageProps {
  onStartExam: (examId: 'mock-1' | 'mock-2') => void;
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStartExam, onNavigate }) => {
  // Interactive Score Estimator Widget State
  const [estRwCorrect, setEstRwCorrect] = useState(46);
  const [estMathCorrect, setEstMathCorrect] = useState(38);

  const predictedRw = rawToScaledRW(estRwCorrect, 54);
  const predictedMath = rawToScaledMath(estMathCorrect, 44);
  const predictedTotal = predictedRw + predictedMath;
  const predictedPercentile = calculatePercentile(predictedTotal);
  const predictedRange = generateScoreRange(predictedTotal);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/15 dark:bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Digital SAT (DSAT) 2026 Ready • Exact Bluebook Experience</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Two Complete Full-Length <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Digital SAT 2026 Mock Exams
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Replicate official College Board testing conditions with 100% authentic Bluebook UI, built-in Desmos graphing calculator, formula reference sheets, psychometric IRT score prediction, and in-depth distractor trap explanations for every question.
          </p>

          {/* Hero CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onStartExam('mock-1')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-base shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition flex items-center justify-center space-x-3"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Start Mock Exam 1</span>
              <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded-md">98 Qs</span>
            </button>

            <button
              onClick={() => onStartExam('mock-2')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-base shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition flex items-center justify-center space-x-3"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Start Mock Exam 2</span>
              <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded-md">98 Qs</span>
            </button>

            <button
              onClick={() => onNavigate('question-bank')}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-200 dark:border-slate-800 transition flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-4 h-4 text-brand-600" />
              <span>Explore Question Bank</span>
            </button>
          </div>

          {/* Highlights Checklist */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>196 Original DSAT Items</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Item Response Theory (IRT) Equating</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Distractor Rationales</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Full Desmos & SPR Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Cards Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Choose Your Mock Examination
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Each exam delivers exactly 98 questions divided across two Reading & Writing modules and two Math modules with full timing and Bluebook navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mock Exam 1 Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 transition-all shadow-lg hover:shadow-xl relative flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                    Mock Exam 1
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-3 group-hover:text-brand-600 transition">
                    Standard Benchmark Simulation
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Calibrated to reflect standard Digital SAT difficulty curves and domain coverage.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 flex items-center justify-center font-black text-xl shrink-0">
                  01
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Questions</div>
                  <div className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">98 Total</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Duration</div>
                  <div className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">134 Mins</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Difficulty</div>
                  <div className="text-base font-extrabold text-brand-600 mt-0.5">Adaptive</div>
                </div>
              </div>

              {/* Module Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold">Reading & Writing: Module 1</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">27 Qs • 32 Mins</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold">Reading & Writing: Module 2</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">27 Qs • 32 Mins</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800 text-amber-600 dark:text-amber-400 font-medium">
                  <span>Scheduled Section Break</span>
                  <span>10 Mins (Optional)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold">Math: Module 1</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">22 Qs • 35 Mins</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="font-semibold">Math: Module 2</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">22 Qs • 35 Mins</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={() => onStartExam('mock-1')}
                className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2"
              >
                <span>Launch Mock Exam 1</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mock Exam 2 Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all shadow-lg hover:shadow-xl relative flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    Mock Exam 2
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-3 group-hover:text-purple-600 transition">
                    1500+ Calibrated High-Yield Exam
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Features challenging reading synthesis, complex inferences, and high-difficulty nonlinear math.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center font-black text-xl shrink-0">
                  02
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Questions</div>
                  <div className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">98 Total</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Duration</div>
                  <div className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">134 Mins</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Difficulty</div>
                  <div className="text-base font-extrabold text-purple-600 mt-0.5">Elite 1500+</div>
                </div>
              </div>

              {/* Module Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold">Reading & Writing: Module 1</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">27 Qs • 32 Mins</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold">Reading & Writing: Module 2</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">27 Qs • 32 Mins</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800 text-amber-600 dark:text-amber-400 font-medium">
                  <span>Scheduled Section Break</span>
                  <span>10 Mins (Optional)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-semibold">Math: Module 1</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">22 Qs • 35 Mins</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="font-semibold">Math: Module 2</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">22 Qs • 35 Mins</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={() => onStartExam('mock-2')}
                className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2"
              >
                <span>Launch Mock Exam 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Elite 1500+ Hardest Inference & Punctuation Masterclass Spotlight */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-slate-900 via-brand-950 to-indigo-950 text-white p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              <span>SAT 2026 Elite Module • Top 1% Challenge</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              The 20 Hardest Inference & Punctuation Questions
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Target the subtlest Reading & Writing traps: experimental control boundaries, theoretical cosmological models, colon explanatory amplification, conjunctive adverb splices, and restrictive appositive traps. Complete with instant distractor trap rationales.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300 pt-1">
              <div className="flex items-center space-x-1.5">
                <Compass className="w-4 h-4 text-sky-400" />
                <span>10 Deep Scientific & Literary Inferences</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <PenTool className="w-4 h-4 text-purple-400" />
                <span>10 Tricky Boundary & Punctuation Traps</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto text-center">
            <button
              onClick={() => onNavigate('hardest-drills')}
              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 hover:scale-105 transition flex items-center justify-center space-x-2"
            >
              <Flame className="w-4 h-4 fill-slate-950" />
              <span>Launch 1500+ Masterclass</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-[11px] text-slate-400 mt-2 font-medium">
              Diagnostic Mode + Instant Explanations
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Score Estimator Widget */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Psychometric Equating Engine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Interactive DSAT Score Predictor
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Slide the sliders to test how raw accuracy maps to scaled section and composite scores under Digital SAT equating curves.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders */}
              <div className="lg:col-span-7 space-y-6">
                {/* RW Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-700 dark:text-slate-300">Reading & Writing Correct:</span>
                    <span className="font-mono font-bold text-brand-600 dark:text-brand-400 text-sm">
                      {estRwCorrect} / 54 ({Math.round((estRwCorrect / 54) * 100)}%)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="54"
                    value={estRwCorrect}
                    onChange={(e) => setEstRwCorrect(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>0 Correct (200)</span>
                    <span>27 Correct (500)</span>
                    <span>54 Correct (800)</span>
                  </div>
                </div>

                {/* Math Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-700 dark:text-slate-300">Math Correct:</span>
                    <span className="font-mono font-bold text-purple-600 dark:text-purple-400 text-sm">
                      {estMathCorrect} / 44 ({Math.round((estMathCorrect / 44) * 100)}%)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="44"
                    value={estMathCorrect}
                    onChange={(e) => setEstMathCorrect(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>0 Correct (200)</span>
                    <span>22 Correct (500)</span>
                    <span>44 Correct (800)</span>
                  </div>
                </div>
              </div>

              {/* Output Display */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-brand-950 text-white p-6 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center shadow-inner">
                <div className="text-xs uppercase font-bold tracking-wider text-blue-300 mb-1">
                  Predicted Composite Score
                </div>
                <div className="font-mono text-5xl font-extrabold text-white tracking-tight my-1">
                  {predictedTotal}
                </div>
                <div className="text-xs text-blue-200 font-medium">
                  SEM Range: {predictedRange}
                </div>

                <div className="w-full grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10 text-xs">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <div className="text-[10px] text-blue-300 uppercase">RW Section</div>
                    <div className="font-mono font-bold text-lg">{predictedRw}</div>
                  </div>
                  <div className="bg-white/10 p-2 rounded-lg">
                    <div className="text-[10px] text-blue-300 uppercase">Math Section</div>
                    <div className="font-mono font-bold text-lg">{predictedMath}</div>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-emerald-300 font-semibold flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>National Percentile: {predictedPercentile}th Percentile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineered by Psychometricians & Testing Specialists
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Every component of our testing engine was built to adhere strictly to Digital SAT test specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              100% Original High-Stakes Items
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              All 196 questions are strictly original and modeled after authentic Digital SAT domain distributions: Craft & Structure, Information & Ideas, Standard English, Algebra, and Advanced Math.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Deep Distractor Analysis
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Don't just learn why the correct answer is right. Our explanations explicitly dissect why students pick incorrect options and reveal the underlying psychological trap behind each distractor.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Full Bluebook Tool Suite
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Practice with the exact tools you will encounter on test day: interactive Desmos function graphing, official formula reference sheet, strikeout option eliminator, and SPR grid-in input.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 select-none">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-700 dark:text-slate-300">
            ApexDSAT 2026 • Professional Digital SAT Preparation & Assessment Platform
          </p>
          <p className="text-[11px] text-slate-400">
            SAT® is a registered trademark of the College Board, which was not involved in the production of, and does not endorse, this product.
          </p>
        </div>
      </footer>
    </div>
  );
};
