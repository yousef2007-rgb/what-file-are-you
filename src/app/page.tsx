"use client";

import React, { useState, useEffect } from "react";
import { AtariHeader } from "@/components/AtariHeader";
import { IntroScreen } from "@/components/IntroScreen";
import { QuizCard } from "@/components/QuizCard";
import { ScanningModal } from "@/components/ScanningModal";
import { ResultScreen } from "@/components/ResultScreen";
import { CodexModal } from "@/components/CodexModal";
import { QUIZ_QUESTIONS, FILE_TYPES, QuizOption, FileTypeProfile } from "@/data/quizData";
import { retroAudio } from "@/lib/audio";

export default function Home() {
  const [gameState, setGameState] = useState<"intro" | "quiz" | "scanning" | "result">("intro");
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, QuizOption>>({});
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [crtEnabled, setCrtEnabled] = useState<boolean>(true);
  const [codexOpen, setCodexOpen] = useState<boolean>(false);
  const [codexInitialId, setCodexInitialId] = useState<string | undefined>(undefined);

  const [primaryResult, setPrimaryResult] = useState<FileTypeProfile>(FILE_TYPES.xml);
  const [secondaryResult, setSecondaryResult] = useState<FileTypeProfile | null>(FILE_TYPES.css);
  const [finalScores, setFinalScores] = useState<Record<string, number>>({});

  // Sync sound & CRT settings from localStorage on client mount
  useEffect(() => {
    setSoundEnabled(retroAudio.isEnabled());
    const savedCrt = localStorage.getItem("atari_crt_enabled");
    if (savedCrt !== null) {
      setCrtEnabled(savedCrt === "true");
    }
  }, []);

  const handleToggleSound = () => {
    const nextState = retroAudio.toggle();
    setSoundEnabled(nextState);
  };

  const handleToggleCrt = () => {
    const nextVal = !crtEnabled;
    setCrtEnabled(nextVal);
    localStorage.setItem("atari_crt_enabled", String(nextVal));
  };

  const handleStartQuiz = () => {
    setAnswers({});
    setCurrentQIndex(0);
    setGameState("quiz");
  };

  const handleSelectOption = (option: QuizOption) => {
    const q = QUIZ_QUESTIONS[currentQIndex];
    setAnswers((prev) => ({
      ...prev,
      [q.id]: option,
    }));
  };

  const handlePrevQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      // Finished all questions! Trigger scanning state
      calculateResults();
      setGameState("scanning");
    }
  };

  const calculateResults = () => {
    const scores: Record<string, number> = {};
    Object.keys(FILE_TYPES).forEach((k) => {
      scores[k] = 0;
    });

    Object.values(answers).forEach((opt) => {
      Object.entries(opt.scores).forEach(([fileId, pts]) => {
        scores[fileId] = (scores[fileId] || 0) + pts;
      });
    });

    // Sort by points descending
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topId = sorted[0] ? sorted[0][0] : "xml";
    const secondId = sorted[1] ? sorted[1][0] : "php";

    setFinalScores(scores);
    setPrimaryResult(FILE_TYPES[topId] || FILE_TYPES.xml);
    setSecondaryResult(FILE_TYPES[secondId] || FILE_TYPES.css);
  };

  const handleScanComplete = () => {
    setGameState("result");
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentQIndex(0);
    setGameState("intro");
  };

  const handleOpenCodex = (fileId?: string) => {
    setCodexInitialId(fileId);
    setCodexOpen(true);
  };

  const currentQuestion = QUIZ_QUESTIONS[currentQIndex];
  const currentSelection = answers[currentQuestion?.id] || null;

  return (
    <main className="min-h-screen bg-atari-grid flex flex-col justify-between relative overflow-x-hidden">
      {/* CRT Scanline and Vignette Effects */}
      {crtEnabled && (
        <>
          <div className="crt-overlay" />
          <div className="crt-vignette" />
        </>
      )}

      {/* Top Header HUD */}
      <AtariHeader
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        crtEnabled={crtEnabled}
        onToggleCrt={handleToggleCrt}
        onOpenCodex={() => handleOpenCodex()}
        currentStep={gameState === "quiz" ? currentQIndex + 1 : undefined}
        totalSteps={gameState === "quiz" ? QUIZ_QUESTIONS.length : undefined}
      />

      {/* Dynamic View State */}
      <div className="flex-1 flex items-center justify-center py-4 sm:py-8">
        {gameState === "intro" && (
          <IntroScreen
            onStart={handleStartQuiz}
            onOpenCodex={() => handleOpenCodex()}
          />
        )}

        {gameState === "quiz" && (
          <QuizCard
            question={currentQuestion}
            currentStep={currentQIndex + 1}
            totalSteps={QUIZ_QUESTIONS.length}
            selectedOption={currentSelection}
            onSelectOption={handleSelectOption}
            onPrev={handlePrevQuestion}
            onNext={handleNextQuestion}
            canGoNext={Boolean(currentSelection)}
          />
        )}

        {gameState === "result" && (
          <ResultScreen
            primaryFile={primaryResult}
            secondaryFile={secondaryResult}
            scores={finalScores}
            onRestart={handleRestart}
            onOpenCodex={handleOpenCodex}
          />
        )}
      </div>

      {/* Scanning Transition Modal */}
      {gameState === "scanning" && (
        <ScanningModal onComplete={handleScanComplete} />
      )}

      {/* Encyclopedia Codex Modal */}
      <CodexModal
        isOpen={codexOpen}
        onClose={() => setCodexOpen(false)}
        initialFileId={codexInitialId}
      />

      {/* Retro Arcade Footer Bar */}
      <footer className="w-full bg-[#000000] border-t-4 border-black py-3 px-4 text-center select-none text-xs font-arcade text-gray-400">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#00FF66] inline-block animate-pulse" />
            <span className="text-gray-300">
              ATARI ARCHITECTURE 1977-2026 // EMULATED IN NEXT.JS &amp; TAILWIND
            </span>
          </div>
          <div className="text-gray-500 font-terminal text-base">
            STRICT BOXY RIGIDITY • SOLID ATARI PALETTES • 8-BIT STEREO
          </div>
        </div>
      </footer>
    </main>
  );
}
