import React, { useState } from 'react';
import { Bookmark, Slash, CheckCircle2, Circle, AlertCircle, FileText } from 'lucide-react';
import { Question } from '../../types/exam';
import { MathRenderer } from '../common/MathRenderer';

interface QuestionViewProps {
  question: Question;
  userAnswer: string | undefined;
  isFlagged: boolean;
  eliminatedChoices: string[];
  isEliminationMode: boolean;
  notes: string;
  onSelectAnswer: (answer: string) => void;
  onToggleFlag: () => void;
  onToggleEliminate: (choiceId: string) => void;
  onChangeNotes: (notes: string) => void;
  showNotesDrawer: boolean;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  userAnswer = '',
  isFlagged,
  eliminatedChoices = [],
  isEliminationMode,
  notes,
  onSelectAnswer,
  onToggleFlag,
  onToggleEliminate,
  onChangeNotes,
  showNotesDrawer
}) => {
  const [sprInput, setSprInput] = useState<string>(userAnswer);

  const handleSprChange = (val: string) => {
    // Only allow characters valid for SPR: numbers 0-9, decimal point, slash for fraction, minus sign
    const sanitized = val.replace(/[^0-9./-]/g, '');
    if (sanitized.length <= 6) { // DSAT allows up to 5-6 chars in grid-in box
      setSprInput(sanitized);
      onSelectAnswer(sanitized);
    }
  };

  // Synchronize internal SPR state if question changes
  React.useEffect(() => {
    setSprInput(userAnswer || '');
  }, [question.id, userAnswer]);

  const hasPassage = !!question.passage;

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Top Question Action Bar */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-2 flex items-center justify-between text-xs select-none">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider text-[11px] bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
            {question.domain}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500 dark:text-slate-400 font-medium">
            {question.skill}
          </span>
        </div>

        <button
          onClick={onToggleFlag}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border transition font-medium ${
            isFlagged
              ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300'
              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
          <span>{isFlagged ? 'Marked for Review' : 'Mark for Review'}</span>
        </button>
      </div>

      {/* Main Content Area: Split View for Reading & Writing, Single/Dual for Math */}
      <div className="flex-1 overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row">
        {/* Left Column: Passage or Stimulus */}
        {hasPassage ? (
          <div className="w-full lg:w-1/2 p-6 lg:p-8 overflow-y-auto border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            {question.passageTitle && (
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 font-serif">
                {question.passageTitle}
              </h3>
            )}
            {question.passageSource && (
              <div className="text-xs text-slate-500 dark:text-slate-400 italic mb-4">
                {question.passageSource}
              </div>
            )}

            {/* Quantitative Table in Stimulus */}
            {question.tableData && (
              <div className="my-4 overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                {question.tableData.title && (
                  <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 font-bold text-xs text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 text-center">
                    {question.tableData.title}
                  </div>
                )}
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      {question.tableData.headers.map((h, i) => (
                        <th key={i} className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {question.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-3 py-2 text-slate-700 dark:text-slate-300">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Passage Text */}
            <div className="passage-content text-slate-800 dark:text-slate-200 leading-relaxed font-serif text-[1.03rem]">
              <MathRenderer content={question.passage!} />
            </div>
          </div>
        ) : null}

        {/* Right Column: Question Prompt & Answer Choices */}
        <div className={`w-full ${hasPassage ? 'lg:w-1/2' : 'max-w-4xl mx-auto'} p-6 lg:p-8 overflow-y-auto flex flex-col justify-between bg-slate-50 dark:bg-slate-950`}>
          <div className="space-y-6">
            {/* Table for standalone math questions if any */}
            {!hasPassage && question.tableData && (
              <div className="mb-4 overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm bg-white dark:bg-slate-900">
                {question.tableData.title && (
                  <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 font-bold text-xs text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 text-center">
                    {question.tableData.title}
                  </div>
                )}
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      {question.tableData.headers.map((h, i) => (
                        <th key={i} className="px-3 py-2.5 font-semibold text-slate-700 dark:text-slate-300">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {question.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-3 py-2 text-slate-700 dark:text-slate-300">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Question Prompt */}
            <div className="text-slate-900 dark:text-slate-100 text-base lg:text-[1.05rem] font-medium leading-relaxed">
              <MathRenderer content={question.question} />
            </div>

            {/* Answer Choices (Multiple Choice) */}
            {question.type === 'multiple-choice' && question.choices && (
              <div className="space-y-3 pt-2">
                {question.choices.map((choice) => {
                  const isSelected = userAnswer === choice.id;
                  const isEliminated = eliminatedChoices.includes(choice.id);

                  return (
                    <div
                      key={choice.id}
                      className="relative group flex items-center"
                    >
                      <button
                        onClick={() => {
                          if (isEliminationMode) {
                            onToggleEliminate(choice.id);
                          } else if (!isEliminated) {
                            onSelectAnswer(choice.id);
                          }
                        }}
                        className={`w-full text-left p-4 rounded-xl border-2 flex items-start space-x-3.5 transition-all ${
                          isSelected
                            ? 'border-brand-600 bg-brand-50/70 dark:bg-brand-950/40 shadow-sm ring-1 ring-brand-500'
                            : isEliminated
                            ? 'border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/40 opacity-40'
                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300 dark:hover:border-brand-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        {/* Choice Badge A/B/C/D */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-brand-600 text-white'
                              : isEliminated
                              ? 'bg-slate-300 dark:bg-slate-700 text-slate-500'
                              : 'border-2 border-slate-400 dark:border-slate-600 text-slate-700 dark:text-slate-300 group-hover:border-brand-500'
                          }`}
                        >
                          {choice.id}
                        </div>

                        {/* Choice Text */}
                        <div className={`flex-1 text-sm lg:text-[0.95rem] text-slate-800 dark:text-slate-200 leading-relaxed pt-0.5 ${
                          isEliminated ? 'line-through text-slate-400 dark:text-slate-500' : ''
                        }`}>
                          <MathRenderer content={choice.text} />
                        </div>
                      </button>

                      {/* Small Cross-out Icon Toggle Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleEliminate(choice.id);
                        }}
                        className={`absolute right-3 p-1.5 rounded-md transition text-xs font-semibold ${
                          isEliminated
                            ? 'text-rose-600 bg-rose-50 dark:bg-rose-950/60'
                            : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 dark:hover:bg-slate-700 opacity-0 group-hover:opacity-100'
                        }`}
                        title={isEliminated ? 'Restore Choice' : 'Eliminate Choice'}
                      >
                        <Slash className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Student-Produced Response (SPR) / Grid-in Input for Math */}
            {question.type === 'spr' && (
              <div className="pt-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <AlertCircle className="w-4 h-4 text-brand-600" />
                  <span>Student-Produced Response (Grid-In)</span>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="w-full sm:w-48">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Enter Answer:
                    </label>
                    <input
                      type="text"
                      value={sprInput}
                      onChange={(e) => handleSprChange(e.target.value)}
                      placeholder="e.g. 14, 3/4, 0.75"
                      className="w-full px-4 py-3 font-mono font-bold text-lg text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 rounded-xl focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none"
                    />
                  </div>

                  <div className="flex-1 text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-slate-50 dark:bg-slate-950/70 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="font-semibold text-slate-700 dark:text-slate-300">Formatting Guidelines:</div>
                    <div>• For fractions, use a slash (e.g. <code className="font-mono bg-white dark:bg-slate-900 px-1 py-0.5 rounded border">7/4</code>).</div>
                    <div>• For decimals, enter numbers like <code className="font-mono bg-white dark:bg-slate-900 px-1 py-0.5 rounded border">1.75</code>.</div>
                    <div>• Do not include units, commas, or spaces.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Scratchpad / Notes Drawer */}
          {showNotesDrawer && (
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  <FileText className="w-3.5 h-3.5 text-brand-600" />
                  <span>Question Scratchpad & Notes</span>
                </div>
                <span className="text-[11px] text-slate-400 italic">Saved automatically</span>
              </div>
              <textarea
                value={notes}
                onChange={(e) => onChangeNotes(e.target.value)}
                placeholder="Type temporary scratch notes, equations, or reasoning here..."
                rows={3}
                className="w-full p-3 text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-800 dark:text-slate-200 resize-y"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
