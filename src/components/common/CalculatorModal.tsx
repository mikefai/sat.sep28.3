import React, { useState, useEffect, useRef } from 'react';
import { X, Calculator, RotateCcw } from 'lucide-react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'scientific' | 'graphing'>('scientific');
  const [display, setDisplay] = useState<string>('0');
  const [history, setHistory] = useState<string>('');
  const [graphFunc, setGraphFunc] = useState<string>('x^2 - 4');
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; posX: number; posY: number }>({ startX: 0, startY: 0, posX: 100, posY: 100 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Position modal centrally on open and listen for Esc key
  useEffect(() => {
    if (isOpen) {
      const initialX = Math.max(20, Math.min(window.innerWidth - 460, window.innerWidth / 2 - 220));
      const initialY = Math.max(50, Math.min(window.innerHeight - 560, window.innerHeight / 2 - 270));
      setPosition({ x: initialX, y: initialY });

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setPosition({
        x: Math.max(10, Math.min(window.innerWidth - 440, dragRef.current.posX + dx)),
        y: Math.max(10, Math.min(window.innerHeight - 500, dragRef.current.posY + dy))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const appendToDisplay = (val: string) => {
    setDisplay(prev => {
      if (prev === '0' || prev === 'Error') return val;
      return prev + val;
    });
  };

  const clearAll = () => {
    setDisplay('0');
    setHistory('');
  };

  const deleteLast = () => {
    setDisplay(prev => {
      if (prev.length <= 1 || prev === 'Error') return '0';
      return prev.slice(0, -1);
    });
  };

  const calculateResult = () => {
    try {
      // Clean display string for mathematical evaluation
      let expr = display
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, 'Math.PI')
        .replace(/e(?![a-zA-Z])/g, 'Math.E')
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/\^/g, '**');

      // Safe mathematical eval using Function constructor
      const res = new Function(`return ${expr}`)();
      if (typeof res === 'number' && !isNaN(res) && isFinite(res)) {
        const rounded = Number(res.toFixed(8)).toString();
        setHistory(`${display} =`);
        setDisplay(rounded);
      } else {
        setDisplay('Error');
      }
    } catch {
      setDisplay('Error');
    }
  };

  // Canvas Graphing Engine
  useEffect(() => {
    if (activeTab !== 'graphing' || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    // Grid coordinates
    const scale = 20; // 20px per unit
    const originX = width / 2;
    const originY = height / 2;

    // Draw grid lines
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;

    for (let x = originX % scale; x < width; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = originY % scale; y < height; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;

    // X axis
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();

    // Y axis
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // Axis labels & tick marks
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'center';

    for (let i = -10; i <= 10; i += 2) {
      if (i === 0) continue;
      const px = originX + i * scale;
      const py = originY - i * scale;
      if (px > 0 && px < width) {
        ctx.fillText(i.toString(), px, originY + 14);
      }
      if (py > 0 && py < height) {
        ctx.fillText(i.toString(), originX - 12, py + 4);
      }
    }

    // Evaluate and plot function
    try {
      let expr = graphFunc
        .replace(/\s+/g, '')
        .replace(/(\d)x/g, '$1*x')
        .replace(/x\^(\d+)/g, 'Math.pow(x, $1)')
        .replace(/\^/g, '**')
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/sqrt/g, 'Math.sqrt')
        .replace(/abs/g, 'Math.abs');

      const fn = new Function('x', `return ${expr};`);

      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      let started = false;
      for (let px = 0; px < width; px += 2) {
        const xVal = (px - originX) / scale;
        try {
          const yVal = fn(xVal);
          if (typeof yVal === 'number' && !isNaN(yVal) && isFinite(yVal)) {
            const py = originY - yVal * scale;
            if (py >= -100 && py <= height + 100) {
              if (!started) {
                ctx.moveTo(px, py);
                started = true;
              } else {
                ctx.lineTo(px, py);
              }
            } else {
              started = false;
            }
          } else {
            started = false;
          }
        } catch {
          started = false;
        }
      }
      ctx.stroke();
    } catch {
      // Ignore syntax errors during typing
    }
  }, [graphFunc, activeTab]);

  if (!isOpen) return null;

  return (
    <div
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className="fixed z-50 w-[420px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col select-none"
    >
      {/* Draggable Header */}
      <div
        onMouseDown={handleMouseDown}
        className="bg-bluebook-header text-white px-4 py-3 flex items-center justify-between cursor-move"
      >
        <div className="flex items-center space-x-2">
          <Calculator className="w-5 h-5 text-blue-300" />
          <span className="font-semibold text-sm tracking-wide">Graphing & Scientific Calculator</span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setActiveTab(activeTab === 'scientific' ? 'graphing' : 'scientific')}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            {activeTab === 'scientific' ? 'Switch to Graphing' : 'Switch to Scientific'}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-lg transition"
            title="Close Calculator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {activeTab === 'scientific' ? (
        <div className="p-4 space-y-3 bg-slate-50 dark:bg-slate-950">
          {/* Display */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-right">
            <div className="text-xs text-slate-400 dark:text-slate-500 h-4 font-mono overflow-hidden">
              {history}
            </div>
            <div className="text-2xl font-mono font-bold text-slate-900 dark:text-white tracking-wide truncate">
              {display}
            </div>
          </div>

          {/* Keypad Grid */}
          <div className="grid grid-cols-5 gap-1.5 text-xs font-medium">
            {/* Row 1 */}
            <button onClick={() => appendToDisplay('sin(')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">sin</button>
            <button onClick={() => appendToDisplay('cos(')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">cos</button>
            <button onClick={() => appendToDisplay('tan(')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">tan</button>
            <button onClick={clearAll} className="p-2.5 bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 font-bold rounded-lg hover:bg-rose-200">AC</button>
            <button onClick={deleteLast} className="p-2.5 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 rounded-lg hover:bg-amber-200">DEL</button>

            {/* Row 2 */}
            <button onClick={() => appendToDisplay('sqrt(')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">√</button>
            <button onClick={() => appendToDisplay('^')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">xʸ</button>
            <button onClick={() => appendToDisplay('(')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">(</button>
            <button onClick={() => appendToDisplay(')')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">)</button>
            <button onClick={() => appendToDisplay('÷')} className="p-2.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold rounded-lg hover:bg-blue-200">÷</button>

            {/* Row 3 */}
            <button onClick={() => appendToDisplay('log(')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">log</button>
            <button onClick={() => appendToDisplay('7')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">7</button>
            <button onClick={() => appendToDisplay('8')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">8</button>
            <button onClick={() => appendToDisplay('9')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">9</button>
            <button onClick={() => appendToDisplay('×')} className="p-2.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold rounded-lg hover:bg-blue-200">×</button>

            {/* Row 4 */}
            <button onClick={() => appendToDisplay('ln(')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">ln</button>
            <button onClick={() => appendToDisplay('4')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">4</button>
            <button onClick={() => appendToDisplay('5')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">5</button>
            <button onClick={() => appendToDisplay('6')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">6</button>
            <button onClick={() => appendToDisplay('-')} className="p-2.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold rounded-lg hover:bg-blue-200">-</button>

            {/* Row 5 */}
            <button onClick={() => appendToDisplay('π')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">π</button>
            <button onClick={() => appendToDisplay('1')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">1</button>
            <button onClick={() => appendToDisplay('2')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">2</button>
            <button onClick={() => appendToDisplay('3')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">3</button>
            <button onClick={() => appendToDisplay('+')} className="p-2.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold rounded-lg hover:bg-blue-200">+</button>

            {/* Row 6 */}
            <button onClick={() => appendToDisplay('e')} className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700">e</button>
            <button onClick={() => appendToDisplay('0')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">0</button>
            <button onClick={() => appendToDisplay('.')} className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-lg hover:bg-slate-100 text-sm">.</button>
            <button onClick={calculateResult} className="col-span-2 p-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg text-sm shadow-md transition">
              =
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 space-y-3 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-mono">y =</span>
            <input
              type="text"
              value={graphFunc}
              onChange={(e) => setGraphFunc(e.target.value)}
              placeholder="e.g. 2x + 1 or x^2 - 4"
              className="flex-1 px-3 py-1.5 text-sm font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="flex justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-inner">
            <canvas
              ref={canvasRef}
              width={380}
              height={260}
              className="w-full h-[260px]"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Examples: <button onClick={() => setGraphFunc('2x - 3')} className="underline text-brand-600">2x - 3</button>, <button onClick={() => setGraphFunc('-(x-3)^2 + 4')} className="underline text-brand-600">-(x-3)^2 + 4</button></span>
            <button onClick={() => setGraphFunc('x^2 - 4')} className="flex items-center space-x-1 hover:text-slate-700">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
