import React, { useState } from 'react';
import { 
  Clock, 
  Eye, 
  EyeOff, 
  Calculator, 
  BookOpen, 
  HelpCircle, 
  FileEdit, 
  Scissors, 
  PauseCircle,
  AlertTriangle
} from 'lucide-react';
import { SectionId, ModuleNumber } from '../../types/exam';

interface ExamHeaderProps {
  section: SectionId;
  module: ModuleNumber;
  questionNumber: number;
  totalQuestions: number;
  timeRemaining: number; // in seconds
  isTimed: boolean;
  onOpenCalculator: () => void;
  onOpenReference: () => void;
  onOpenDirections: () => void;
  onToggleEliminationMode: () => void;
  isEliminationMode: boolean;
  onToggleNotes: () => void;
  hasNotes: boolean;
  onPauseExam: () => void;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  section,
  module,
  questionNumber,
  totalQuestions,
  timeRemaining,
  isTimed,
  onOpenCalculator,
  onOpenReference,
  onOpenDirections,
  onToggleEliminationMode,
  isEliminationMode,
  onToggleNotes,
  hasNotes,
  onPauseExam
}) => {
  const [isTimerHidden, setIsTimerHidden] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const isWarningTime = isTimed && timeRemaining <= 300; // under 5 mins
  const isUrgentTime = isTimed && timeRemaining <= 60; // under 1 min

  return (
    <header className="bg-bluebook-header text-white px-4 py-2.5 shadow-md flex items-center justify-between select-none relative z-30">
      {/* Left: Section & Module title */}
      <div className="flex items-center space-x-3">
        <div>
          <div className="text-xs uppercase font-bold tracking-wider text-blue-300">
            {section === 'reading-writing' ? 'Section 1: Reading and Writing' : 'Section 2: Math'}
          </div>
          <div className="text-sm font-semibold flex items-center space-x-2">
            <span>Module {module}</span>
            <span className="text-blue-300 text-xs">|</span>
            <span className="text-blue-200 text-xs font-normal">
              Question {questionNumber} of {totalQuestions}
            </span>
          </div>
        </div>

        <button
          onClick={onOpenDirections}
          className="hidden sm:flex items-center space-x-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 transition text-blue-100"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Directions</span>
        </button>
      </div>

      {/* Center: Timer */}
      {isTimed && (
        <div className="flex items-center space-x-2 bg-black/25 px-3 py-1.5 rounded-xl border border-white/10">
          <Clock className={`w-4 h-4 ${isUrgentTime ? 'text-red-400 animate-pulse' : isWarningTime ? 'text-amber-400' : 'text-blue-200'}`} />
          
          <div className="font-mono text-sm font-bold tracking-wider">
            {isTimerHidden ? (
              <span className="text-slate-400 text-xs tracking-normal font-sans italic">Timer Hidden</span>
            ) : (
              <span className={isUrgentTime ? 'text-red-400 font-extrabold' : isWarningTime ? 'text-amber-300' : 'text-white'}>
                {formatTime(timeRemaining)}
              </span>
            )}
          </div>

          <button
            onClick={() => setIsTimerHidden(!isTimerHidden)}
            className="text-[11px] px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition text-blue-200"
            title={isTimerHidden ? 'Show Timer' : 'Hide Timer'}
          >
            {isTimerHidden ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
          </button>
        </div>
      )}

      {/* Right: Tools & Utilities */}
      <div className="flex items-center space-x-1.5 sm:space-x-2">
        {/* Strikethrough / Elimination Mode */}
        <button
          onClick={onToggleEliminationMode}
          className={`flex items-center space-x-1 px-2.5 py-1.5 text-xs font-medium rounded-lg transition ${
            isEliminationMode 
              ? 'bg-amber-500 text-slate-900 font-bold shadow' 
              : 'bg-white/10 hover:bg-white/20 text-blue-100'
          }`}
          title="Option Eliminator (Cross out answer choices)"
        >
          <Scissors className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Cross-out</span>
        </button>

        {/* Annotate / Notes */}
        <button
          onClick={onToggleNotes}
          className={`flex items-center space-x-1 px-2.5 py-1.5 text-xs font-medium rounded-lg transition ${
            hasNotes 
              ? 'bg-blue-500 text-white font-semibold' 
              : 'bg-white/10 hover:bg-white/20 text-blue-100'
          }`}
          title="Question Scratchpad & Notes"
        >
          <FileEdit className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Notes</span>
        </button>

        {/* Math tools (Calculator & Reference) */}
        {section === 'math' && (
          <>
            <button
              onClick={onOpenCalculator}
              className="flex items-center space-x-1 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition shadow-sm"
              title="Open Graphing & Scientific Calculator"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Calculator</span>
            </button>

            <button
              onClick={onOpenReference}
              className="flex items-center space-x-1 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 text-blue-100 transition"
              title="Open Math Formula Reference Sheet"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reference</span>
            </button>
          </>
        )}

        {/* Pause/Save button */}
        <button
          onClick={onPauseExam}
          className="p-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 text-blue-200 transition"
          title="Pause & Save Progress"
        >
          <PauseCircle className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
