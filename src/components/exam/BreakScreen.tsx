import React, { useState, useEffect } from 'react';
import { Coffee, Play, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

interface BreakScreenProps {
  onEndBreak: () => void;
}

export const BreakScreen: React.FC<BreakScreenProps> = ({ onEndBreak }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(600); // 10 minutes = 600s
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const timeFormatted = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

  return (
    <div className="flex-1 flex items-center justify-center bg-slate-900 text-white p-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-md relative z-10 flex flex-col items-center text-center space-y-6 animate-fadeIn">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold uppercase tracking-wider">
          <Coffee className="w-4 h-4 text-brand-400" />
          <span>Section 1 Complete • Official 10-Minute Break</span>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Take a Breath. You're Halfway There.
          </h1>
          <p className="text-sm text-slate-300 mt-2 max-w-lg">
            Reading & Writing is finished. Take this time to stretch, hydrate, and clear your mind before the Math section.
          </p>
        </div>

        {/* Countdown Clock Display */}
        <div className="p-6 bg-slate-950/60 rounded-2xl border border-slate-700/60 flex flex-col items-center justify-center w-full max-w-sm">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Break Time Remaining</span>
          </div>
          <div className="font-mono text-5xl font-black text-white tracking-widest my-1">
            {timeFormatted}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            {secondsRemaining > 0 ? 'Your break timer is running automatically' : 'Break concluded'}
          </div>
        </div>

        {/* Up Next Preview */}
        <div className="w-full bg-slate-900/60 p-5 rounded-2xl border border-slate-700/40 text-left space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Up Next: Section 2 (Math)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Module 1:</strong> 22 Questions (35 minutes)</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Module 2:</strong> 22 Questions (35 minutes)</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Built-in Desmos graphing calculator permitted for all items</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>SPR grid-in decimal & fraction inputs supported</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 w-full flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-semibold transition"
          >
            {isPaused ? 'Resume Timer' : 'Pause Timer'}
          </button>
          <button
            onClick={onEndBreak}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 font-bold text-sm text-white shadow-xl hover:shadow-brand-500/25 transition flex items-center justify-center space-x-2"
          >
            <span>End Break & Start Math Section</span>
            <Play className="w-4 h-4 fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
