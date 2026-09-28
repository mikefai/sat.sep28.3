import React from 'react';
import { X, BookOpen } from 'lucide-react';
import { MathRenderer } from './MathRenderer';

interface ReferenceSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceSheetModal: React.FC<ReferenceSheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-bluebook-header text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-300" />
            <h2 className="font-bold text-base tracking-wide">Digital SAT Math Reference Sheet</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition"
            title="Close Reference Sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200">
          <div className="text-xs text-slate-500 italic border-b border-slate-200 dark:border-slate-800 pb-3">
            Note: These formulas are provided directly within the Digital SAT testing application during all Math modules.
          </div>

          {/* 2D Geometric Formulas */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-4">
              Area and Circumference Formulas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Circle */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 flex flex-col items-center text-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mb-2">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                  <line x1="50" y1="50" x2="90" y2="50" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="3" fill="#2563eb" />
                  <text x="68" y="44" fontSize="12" fill="#475569" fontWeight="600">r</text>
                </svg>
                <div className="font-semibold text-sm">Circle</div>
                <div className="text-xs mt-1 space-y-0.5">
                  <MathRenderer content="$A = \pi r^2$" />
                  <MathRenderer content="$C = 2\pi r$" />
                </div>
              </div>

              {/* Rectangle */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 flex flex-col items-center text-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mb-2">
                  <rect x="15" y="25" width="70" height="50" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                  <text x="48" y="20" fontSize="12" fill="#475569" fontWeight="600">w</text>
                  <text x="90" y="55" fontSize="12" fill="#475569" fontWeight="600">l</text>
                </svg>
                <div className="font-semibold text-sm">Rectangle</div>
                <div className="text-xs mt-1">
                  <MathRenderer content="$A = \ell w$" />
                </div>
              </div>

              {/* Triangle */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 flex flex-col items-center text-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mb-2">
                  <polygon points="15,75 85,75 50,20" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                  <line x1="50" y1="20" x2="50" y2="75" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="54" y="50" fontSize="12" fill="#475569" fontWeight="600">h</text>
                  <text x="48" y="90" fontSize="12" fill="#475569" fontWeight="600">b</text>
                </svg>
                <div className="font-semibold text-sm">Triangle</div>
                <div className="text-xs mt-1">
                  <MathRenderer content="$A = \frac{1}{2} b h$" />
                </div>
              </div>
            </div>
          </div>

          {/* Special Right Triangles & Pythagorean Theorem */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-4">
              Right Triangles & Trigonometry
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Pythagorean */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 flex flex-col items-center text-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mb-2">
                  <polygon points="20,75 80,75 20,25" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                  <rect x="20" y="65" width="10" height="10" fill="none" stroke="#64748b" strokeWidth="1.5" />
                  <text x="8" y="52" fontSize="12" fill="#475569" fontWeight="600">a</text>
                  <text x="48" y="90" fontSize="12" fill="#475569" fontWeight="600">b</text>
                  <text x="55" y="45" fontSize="12" fill="#475569" fontWeight="600">c</text>
                </svg>
                <div className="font-semibold text-sm">Pythagorean Theorem</div>
                <div className="text-xs mt-1">
                  <MathRenderer content="$a^2 + b^2 = c^2$" />
                </div>
              </div>

              {/* Special 30-60-90 */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 flex flex-col items-center text-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mb-2">
                  <polygon points="20,75 85,75 20,20" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                  <text x="25" y="32" fontSize="10" fill="#475569">30°</text>
                  <text x="65" y="70" fontSize="10" fill="#475569">60°</text>
                  <text x="50" y="90" fontSize="11" fill="#2563eb" fontWeight="bold">x√3</text>
                  <text x="5" y="50" fontSize="11" fill="#2563eb" fontWeight="bold">x</text>
                  <text x="55" y="42" fontSize="11" fill="#2563eb" fontWeight="bold">2x</text>
                </svg>
                <div className="font-semibold text-sm">30°–60°–90°</div>
                <div className="text-xs text-slate-500 mt-1">Side ratio $1 : \sqrt{3} : 2$</div>
              </div>

              {/* Special 45-45-90 */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 flex flex-col items-center text-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 mb-2">
                  <polygon points="20,75 75,75 20,20" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                  <text x="25" y="35" fontSize="10" fill="#475569">45°</text>
                  <text x="55" y="70" fontSize="10" fill="#475569">45°</text>
                  <text x="45" y="90" fontSize="11" fill="#2563eb" fontWeight="bold">s</text>
                  <text x="8" y="50" fontSize="11" fill="#2563eb" fontWeight="bold">s</text>
                  <text x="52" y="42" fontSize="11" fill="#2563eb" fontWeight="bold">s√2</text>
                </svg>
                <div className="font-semibold text-sm">45°–45°–90°</div>
                <div className="text-xs text-slate-500 mt-1">Side ratio $1 : 1 : \sqrt{2}$</div>
              </div>
            </div>
          </div>

          {/* 3D Solids Volume */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-4">
              Volume Formulas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="font-semibold mb-1">Prism</div>
                <MathRenderer content="$V = \ell w h$" />
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="font-semibold mb-1">Cylinder</div>
                <MathRenderer content="$V = \pi r^2 h$" />
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="font-semibold mb-1">Sphere</div>
                <MathRenderer content="$V = \frac{4}{3}\pi r^3$" />
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="font-semibold mb-1">Cone</div>
                <MathRenderer content="$V = \frac{1}{3}\pi r^2 h$" />
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="font-semibold mb-1">Pyramid</div>
                <MathRenderer content="$V = \frac{1}{3}\ell w h$" />
              </div>
            </div>
          </div>

          {/* Key Facts */}
          <div className="p-4 bg-brand-50 dark:bg-brand-950/40 rounded-xl border border-brand-200 dark:border-brand-800/60 text-xs space-y-1.5 text-brand-900 dark:text-brand-200">
            <div className="font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">Essential Geometry Facts:</div>
            <div>• The number of degrees of arc in a circle is <strong>360°</strong>.</div>
            <div>• The number of radians of arc in a circle is <strong>2π</strong>.</div>
            <div>• The sum of the interior angle measures of a triangle is <strong>180°</strong>.</div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg transition shadow"
          >
            Close Reference Sheet
          </button>
        </div>
      </div>
    </div>
  );
};
