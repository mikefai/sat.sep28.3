import React from 'react';
import { X, HelpCircle, CheckCircle } from 'lucide-react';
import { SectionId } from '../../types/exam';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: SectionId;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose, section }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-bluebook-header text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-blue-300" />
            <h2 className="font-bold text-base tracking-wide">
              {section === 'reading-writing' ? 'Reading and Writing Directions' : 'Math Directions'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition"
            title="Close Directions"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {section === 'reading-writing' ? (
            <>
              <p className="font-medium text-slate-900 dark:text-white">
                The questions in this section address a number of important reading and writing skills. Each question includes one or more passages, which may include a table or graph.
              </p>
              <ul className="space-y-2.5 pl-4 list-disc text-slate-600 dark:text-slate-300">
                <li>Read each passage and question carefully, and then choose the best answer to the question based on the passage(s).</li>
                <li>All questions in this section are multiple-choice with four answer choices. Each question has a single best answer.</li>
                <li>You may use the <strong>Annotation & Highlighter</strong> tool to mark up text and make notes.</li>
                <li>Use the <strong>Strikethrough (Option Eliminator)</strong> tool to cross out choices you have ruled out.</li>
                <li>You may move freely back and forth between questions within the active module until the timer expires.</li>
              </ul>
            </>
          ) : (
            <>
              <p className="font-medium text-slate-900 dark:text-white">
                The questions in this section address a number of important math skills. You may use a calculator for all questions.
              </p>
              <div className="space-y-3 text-slate-600 dark:text-slate-300">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Multiple-Choice Questions:</h4>
                  <p>Choose the best answer from the four choices provided.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Student-Produced Response (SPR) Questions:</h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>If there are multiple correct answers, enter only one answer.</li>
                    <li>For questions with decimal answers, enter exact decimals or round to the appropriate number of places.</li>
                    <li>Fraction answers like <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">3/4</code> or <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">0.75</code> are equally acceptable.</li>
                    <li>Do not enter symbols like dollar signs, commas, or percent signs in SPR answer boxes.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Reference & Calculator:</h4>
                  <p>You can access the official <strong>Reference Sheet</strong> formulas and the interactive <strong>Graphing Calculator</strong> at any time during this section.</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg transition shadow"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
