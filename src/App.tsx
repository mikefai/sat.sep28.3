import React, { useState, useEffect } from 'react';
import { ExamId, ExamSession, ExamResult } from './types/exam';
import { Navbar } from './components/common/Navbar';
import { HomePage } from './pages/HomePage';
import { ExamSelectionPage } from './pages/ExamSelectionPage';
import { ExamInterfacePage } from './pages/ExamInterfacePage';
import { ResultsPage } from './pages/ResultsPage';
import { QuestionBankPage } from './pages/QuestionBankPage';
import { ResultsHistoryPage } from './pages/ResultsHistoryPage';
import { HardestQuestionsPage } from './pages/HardestQuestionsPage';

const SESSION_STORAGE_KEY = 'apex_dsat_session_v1';
const HISTORY_STORAGE_KEY = 'apex_dsat_history_v1';
const THEME_STORAGE_KEY = 'apex_dsat_theme_v1';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activeSession, setActiveSession] = useState<ExamSession | null>(null);
  const [activeResult, setActiveResult] = useState<ExamResult | null>(null);
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [isDark, setIsDark] = useState<boolean>(false);

  // Initialize theme, session, and history from LocalStorage
  useEffect(() => {
    // Theme
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Active Session
    const savedSession = localStorage.getItem(SESSION_STORAGE_KEY);
    if (savedSession) {
      try {
        const parsed = JSON.parse(savedSession);
        setActiveSession(parsed);
      } catch {
        localStorage.removeItem(SESSION_STORAGE_KEY);
      }
    }

    // History
    const savedHistory = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        if (Array.isArray(parsedHistory)) {
          setHistory(parsedHistory);
        }
      } catch {
        localStorage.removeItem(HISTORY_STORAGE_KEY);
      }
    }
  }, []);

  // Sync dark mode class with state
  const handleToggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_STORAGE_KEY, 'light');
    }
  };

  // Start new exam session
  const handleStartExam = (examId: ExamId, mode: 'timed' | 'untimed' = 'timed') => {
    const newSession: ExamSession = {
      examId,
      mode,
      currentSection: 'reading-writing',
      currentModule: 1,
      currentQuestionIndex: 0,
      answers: {},
      flagged: {},
      eliminations: {},
      timeRemaining: 32 * 60, // 32 minutes for RW M1
      timeSpentPerQuestion: {},
      notes: {},
      highlights: {},
      status: 'in-progress',
      startedAt: Date.now()
    };

    setActiveSession(newSession);
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newSession));
    setCurrentPage('exam-interface');
  };

  // Update session during exam
  const handleUpdateSession = (updated: ExamSession) => {
    setActiveSession(updated);
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(updated));
  };

  // Finish exam
  const handleFinishExam = (result: ExamResult) => {
    setActiveResult(result);
    const updatedHistory = [result, ...history];
    setHistory(updatedHistory);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updatedHistory));
    
    // Clear active session
    setActiveSession(null);
    localStorage.removeItem(SESSION_STORAGE_KEY);

    setCurrentPage('results');
  };

  // Resume active session
  const handleResumeSession = () => {
    if (activeSession) {
      setCurrentPage('exam-interface');
    }
  };

  // Clear history
  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your exam attempt history?')) {
      setHistory([]);
      localStorage.removeItem(HISTORY_STORAGE_KEY);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Navbar only shown outside the full-screen Bluebook exam testing interface */}
      {currentPage !== 'exam-interface' && (
        <Navbar
          currentPage={currentPage}
          onNavigate={(page) => setCurrentPage(page)}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
          onStartExam={(id) => handleStartExam(id, 'timed')}
        />
      )}

      {/* Page Routing */}
      {currentPage === 'home' && (
        <HomePage
          onStartExam={(id) => handleStartExam(id, 'timed')}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}

      {currentPage === 'exams' && (
        <ExamSelectionPage
          onStartExam={handleStartExam}
          activeSession={activeSession}
          onResumeSession={handleResumeSession}
        />
      )}

      {currentPage === 'exam-interface' && activeSession && (
        <ExamInterfacePage
          session={activeSession}
          onUpdateSession={handleUpdateSession}
          onFinishExam={handleFinishExam}
          onExitExam={() => setCurrentPage('exams')}
        />
      )}

      {currentPage === 'results' && activeResult && (
        <ResultsPage
          result={activeResult}
          onRetakeExam={() => handleStartExam(activeResult.examId, 'timed')}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}

      {currentPage === 'hardest-drills' && (
        <HardestQuestionsPage
          onNavigateHome={() => setCurrentPage('home')}
          onStartExam={(id) => handleStartExam(id, 'timed')}
        />
      )}

      {currentPage === 'question-bank' && (
        <QuestionBankPage />
      )}

      {currentPage === 'results-history' && (
        <ResultsHistoryPage
          history={history}
          onSelectResult={(res) => {
            setActiveResult(res);
            setCurrentPage('results');
          }}
          onClearHistory={handleClearHistory}
          onStartExam={(id) => handleStartExam(id, 'timed')}
          onNavigate={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}

export default App;
