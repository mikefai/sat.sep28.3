import React, { useState, useEffect, useRef } from 'react';
import { ExamSession, ExamResult } from '../types/exam';
import { getModuleQuestions } from '../data';
import { computeExamResult } from '../utils/scoring';
import { ExamHeader } from '../components/exam/ExamHeader';
import { QuestionView } from '../components/exam/QuestionView';
import { ExamFooter } from '../components/exam/ExamFooter';
import { QuestionPalette } from '../components/exam/QuestionPalette';
import { ModuleReviewScreen } from '../components/exam/ModuleReviewScreen';
import { BreakScreen } from '../components/exam/BreakScreen';
import { CalculatorModal } from '../components/common/CalculatorModal';
import { ReferenceSheetModal } from '../components/common/ReferenceSheetModal';
import { DirectionsModal } from '../components/common/DirectionsModal';

interface ExamInterfacePageProps {
  session: ExamSession;
  onUpdateSession: (session: ExamSession) => void;
  onFinishExam: (result: ExamResult) => void;
  onExitExam: () => void;
}

export const ExamInterfacePage: React.FC<ExamInterfacePageProps> = ({
  session,
  onUpdateSession,
  onFinishExam,
  onExitExam
}) => {
  // Modal states
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isEliminationMode, setIsEliminationMode] = useState(false);
  const [showNotesDrawer, setShowNotesDrawer] = useState(false);

  // Active module questions
  const currentQuestions = getModuleQuestions(
    session.examId,
    session.currentSection,
    session.currentModule
  );
  const currentQuestion = currentQuestions[session.currentQuestionIndex] || currentQuestions[0];

  // Timer reference
  const timerRef = useRef<number | null>(null);

  // Per-question timing counter
  useEffect(() => {
    if (session.status !== 'in-progress' || session.mode === 'untimed') return;

    timerRef.current = window.setInterval(() => {
      onUpdateSession({
        ...session,
        timeRemaining: Math.max(0, session.timeRemaining - 1),
        timeSpentPerQuestion: {
          ...session.timeSpentPerQuestion,
          [currentQuestion.id]: (session.timeSpentPerQuestion[currentQuestion.id] || 0) + 1
        }
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [session, currentQuestion.id]);

  // Handle timer expiry -> automatically open module review
  useEffect(() => {
    if (session.mode === 'timed' && session.timeRemaining === 0 && session.status === 'in-progress') {
      onUpdateSession({
        ...session,
        status: 'module-review'
      });
    }
  }, [session.timeRemaining, session.status, session.mode]);

  // Answer handler
  const handleSelectAnswer = (answer: string) => {
    onUpdateSession({
      ...session,
      answers: {
        ...session.answers,
        [currentQuestion.id]: answer
      }
    });
  };

  // Flag handler
  const handleToggleFlag = () => {
    onUpdateSession({
      ...session,
      flagged: {
        ...session.flagged,
        [currentQuestion.id]: !session.flagged[currentQuestion.id]
      }
    });
  };

  // Strikethrough / Elimination handler
  const handleToggleEliminate = (choiceId: string) => {
    const current = session.eliminations[currentQuestion.id] || [];
    const updated = current.includes(choiceId)
      ? current.filter(id => id !== choiceId)
      : [...current, choiceId];

    onUpdateSession({
      ...session,
      eliminations: {
        ...session.eliminations,
        [currentQuestion.id]: updated
      }
    });
  };

  // Notes handler
  const handleChangeNotes = (newNotes: string) => {
    onUpdateSession({
      ...session,
      notes: {
        ...session.notes,
        [currentQuestion.id]: newNotes
      }
    });
  };

  // Navigation handlers
  const handlePrev = () => {
    if (session.currentQuestionIndex > 0) {
      onUpdateSession({
        ...session,
        currentQuestionIndex: session.currentQuestionIndex - 1
      });
    }
  };

  const handleNext = () => {
    if (session.currentQuestionIndex < currentQuestions.length - 1) {
      onUpdateSession({
        ...session,
        currentQuestionIndex: session.currentQuestionIndex + 1
      });
    } else {
      // Last question of module -> go to review screen
      onUpdateSession({
        ...session,
        status: 'module-review'
      });
    }
  };

  const handleSelectQuestion = (index: number) => {
    onUpdateSession({
      ...session,
      currentQuestionIndex: index,
      status: 'in-progress'
    });
  };

  // Module Progression Engine:
  // RW M1 -> RW M2 -> Break -> Math M1 -> Math M2 -> Final Result
  const handleSubmitModule = () => {
    if (session.currentSection === 'reading-writing') {
      if (session.currentModule === 1) {
        // Move to RW Module 2 (32 minutes)
        onUpdateSession({
          ...session,
          currentSection: 'reading-writing',
          currentModule: 2,
          currentQuestionIndex: 0,
          timeRemaining: 32 * 60,
          status: 'in-progress'
        });
      } else {
        // RW Module 2 Complete -> Transition to Scheduled 10-Minute Break
        onUpdateSession({
          ...session,
          status: 'break'
        });
      }
    } else {
      // Math Section
      if (session.currentModule === 1) {
        // Move to Math Module 2 (35 minutes)
        onUpdateSession({
          ...session,
          currentSection: 'math',
          currentModule: 2,
          currentQuestionIndex: 0,
          timeRemaining: 35 * 60,
          status: 'in-progress'
        });
      } else {
        // Math Module 2 Complete -> Compute Exam Results & Final Submit!
        const result = computeExamResult(
          session.examId,
          session.answers,
          session.timeSpentPerQuestion,
          session.flagged
        );
        onFinishExam(result);
      }
    }
  };

  // End break handler -> Start Math Section Module 1 (35 minutes)
  const handleEndBreak = () => {
    onUpdateSession({
      ...session,
      currentSection: 'math',
      currentModule: 1,
      currentQuestionIndex: 0,
      timeRemaining: 35 * 60,
      status: 'in-progress'
    });
  };

  // Render Break Screen
  if (session.status === 'break') {
    return <BreakScreen onEndBreak={handleEndBreak} />;
  }

  // Render Module Review Screen
  if (session.status === 'module-review') {
    return (
      <ModuleReviewScreen
        section={session.currentSection}
        module={session.currentModule}
        questions={currentQuestions}
        answers={session.answers}
        flagged={session.flagged}
        onSelectQuestion={handleSelectQuestion}
        onSubmitModule={handleSubmitModule}
        onReturnToExam={() => onUpdateSession({ ...session, status: 'in-progress' })}
      />
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans">
      {/* Bluebook Header */}
      <ExamHeader
        section={session.currentSection}
        module={session.currentModule}
        questionNumber={session.currentQuestionIndex + 1}
        totalQuestions={currentQuestions.length}
        timeRemaining={session.timeRemaining}
        isTimed={session.mode === 'timed'}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenReference={() => setIsReferenceOpen(true)}
        onOpenDirections={() => setIsDirectionsOpen(true)}
        onToggleEliminationMode={() => setIsEliminationMode(!isEliminationMode)}
        isEliminationMode={isEliminationMode}
        onToggleNotes={() => setShowNotesDrawer(!showNotesDrawer)}
        hasNotes={!!(session.notes[currentQuestion.id] && session.notes[currentQuestion.id].trim() !== '')}
        onPauseExam={onExitExam}
      />

      {/* Main Question View */}
      <QuestionView
        question={currentQuestion}
        userAnswer={session.answers[currentQuestion.id]}
        isFlagged={!!session.flagged[currentQuestion.id]}
        eliminatedChoices={session.eliminations[currentQuestion.id] || []}
        isEliminationMode={isEliminationMode}
        notes={session.notes[currentQuestion.id] || ''}
        onSelectAnswer={handleSelectAnswer}
        onToggleFlag={handleToggleFlag}
        onToggleEliminate={handleToggleEliminate}
        onChangeNotes={handleChangeNotes}
        showNotesDrawer={showNotesDrawer}
      />

      {/* Bottom Navigation Footer */}
      <ExamFooter
        currentIndex={session.currentQuestionIndex}
        totalQuestions={currentQuestions.length}
        isFirstQuestion={session.currentQuestionIndex === 0}
        isLastQuestion={session.currentQuestionIndex === currentQuestions.length - 1}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenPalette={() => setIsPaletteOpen(true)}
        onReviewModule={() => onUpdateSession({ ...session, status: 'module-review' })}
      />

      {/* Modals */}
      <QuestionPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        questions={currentQuestions}
        currentQuestionIndex={session.currentQuestionIndex}
        answers={session.answers}
        flagged={session.flagged}
        onSelectQuestion={handleSelectQuestion}
      />

      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <ReferenceSheetModal
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />

      <DirectionsModal
        isOpen={isDirectionsOpen}
        onClose={() => setIsDirectionsOpen(false)}
        section={session.currentSection}
      />
    </div>
  );
};
