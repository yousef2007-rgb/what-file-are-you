"use client";

import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, CornerDownLeft, Sparkles } from "lucide-react";
import { QuizQuestion, QuizOption } from "@/data/quizData";
import { retroAudio } from "@/lib/audio";

interface QuizCardProps {
  question: QuizQuestion;
  currentStep: number;
  totalSteps: number;
  selectedOption: QuizOption | null;
  onSelectOption: (option: QuizOption) => void;
  onPrev: () => void;
  onNext: () => void;
  canGoNext: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentStep,
  totalSteps,
  selectedOption,
  onSelectOption,
  onPrev,
  onNext,
  canGoNext,
}) => {
  // Keyboard shortcut listener: 1, 2, 3, 4 or A, B, C, D or Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if input is focused or modifying keys pressed
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const key = e.key.toUpperCase();

      if (key === "1" || key === "A") {
        e.preventDefault();
        retroAudio.playBlip(550);
        onSelectOption(question.options[0]);
      } else if (key === "2" || key === "B") {
        e.preventDefault();
        retroAudio.playBlip(600);
        onSelectOption(question.options[1]);
      } else if (key === "3" || key === "C") {
        e.preventDefault();
        retroAudio.playBlip(650);
        onSelectOption(question.options[2]);
      } else if (key === "4" || key === "D") {
        e.preventDefault();
        retroAudio.playBlip(700);
        onSelectOption(question.options[3]);
      } else if (e.code === "Enter" && canGoNext) {
        e.preventDefault();
        retroAudio.playLaser();
        onNext();
      } else if (e.code === "ArrowLeft" && currentStep > 1) {
        e.preventDefault();
        retroAudio.playBlip(350);
        onPrev();
      } else if (e.code === "ArrowRight" && canGoNext) {
        e.preventDefault();
        retroAudio.playLaser();
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [question, onSelectOption, onNext, onPrev, canGoNext, currentStep]);

  // Compute progress percentage
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:py-6 flex flex-col items-center">
      {/* Outer Atari Cabinet Bezel */}
      <div className="w-full bg-[#1b1728] border-4 border-black p-3 sm:p-6 shadow-[10px_10px_0px_#000]">
        
        {/* Progress & HUD Bar */}
        <div className="w-full bg-[#0b0914] border-3 border-black p-3 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-[4px_4px_0px_#000]">
          <div className="flex items-center gap-2">
            <span className="bg-[#FFE600] text-black font-arcade text-xs px-2 py-0.5 border border-black font-bold">
              Q_{String(currentStep).padStart(2, "0")}
            </span>
            <span className="font-arcade text-xs text-[#00F0FF]">
              {question.flavor}
            </span>
          </div>

          {/* Retro Pixel Progress Meter */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="font-terminal text-sm text-gray-400">PROGRESS:</span>
            <div className="flex-1 sm:w-48 h-5 bg-[#1a1827] border-2 border-black p-0.5 flex gap-0.5">
              {Array.from({ length: totalSteps }).map((_, idx) => (
                <div
                  key={idx}
                  className={`flex-1 h-full transition-colors ${
                    idx < currentStep
                      ? "bg-[#00FF66]"
                      : "bg-[#28243d]"
                  }`}
                />
              ))}
            </div>
            <span className="font-arcade text-[10px] text-[#00FF66] w-9 text-right">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* Question Title & Scenario Box */}
        <div className="bg-[#FFCC00] border-4 border-black p-4 sm:p-6 shadow-[6px_6px_0px_#000] text-black mb-6">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h2 className="font-arcade text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider">
              {question.title}
            </h2>
            <Sparkles size={18} className="shrink-0" />
          </div>
          <p className="font-terminal text-xl sm:text-2xl font-bold leading-snug mt-1">
            &quot;{question.situation}&quot;
          </p>
        </div>

        {/* 4 Multi-Choice Options */}
        <div className="grid grid-cols-1 gap-3.5 mb-6">
          {question.options.map((opt) => {
            const isSelected = selectedOption?.letter === opt.letter;
            return (
              <button
                key={opt.letter}
                onClick={() => {
                  retroAudio.playBlip(600);
                  onSelectOption(opt);
                }}
                onMouseEnter={() => retroAudio.playBlip(440)}
                className={`w-full text-left atari-btn p-3.5 sm:p-4 cursor-pointer transition-all flex items-start gap-3 sm:gap-4 ${
                  isSelected
                    ? "bg-[#00F0FF] text-black translate-x-1 shadow-[8px_8px_0px_#FF0055] border-black"
                    : "bg-[#26213b] text-white hover:bg-[#342e4e] border-black shadow-[5px_5px_0px_#000]"
                }`}
              >
                {/* Letter Key Badge */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 border-3 border-black flex items-center justify-center font-arcade text-sm sm:text-base font-bold shadow-[2px_2px_0px_#000] ${
                    isSelected
                      ? "bg-[#FF007F] text-white animate-pulse"
                      : "bg-[#FFE600] text-black"
                  }`}
                >
                  {opt.letter}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <span
                      className={`font-arcade text-[9px] sm:text-[10px] uppercase px-1.5 py-0.5 border border-black font-bold ${
                        isSelected
                          ? "bg-black text-[#00F0FF]"
                          : "bg-[#141221] text-gray-300"
                      }`}
                    >
                      {opt.tag}
                    </span>
                    <span className="font-terminal text-xs text-gray-400">
                      KEY [{opt.letter}]
                    </span>
                  </div>

                  <p className="font-terminal text-lg sm:text-xl font-bold leading-snug">
                    {opt.text}
                  </p>
                  <p
                    className={`font-terminal text-sm sm:text-base mt-1 italic ${
                      isSelected ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    &gt; {opt.subtext}
                  </p>
                </div>

                {/* Selection Pointer indicator */}
                <div className="shrink-0 pt-1 font-arcade text-lg">
                  {isSelected ? (
                    <span className="text-black font-bold animate-arcade-blink">
                      ►
                    </span>
                  ) : (
                    <span className="text-transparent">►</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t-3 border-black">
          {/* Previous Question Button */}
          <button
            onClick={() => {
              retroAudio.playBlip(350);
              onPrev();
            }}
            disabled={currentStep === 1}
            className={`atari-btn font-arcade text-xs sm:text-sm py-2.5 px-4 flex items-center gap-2 border-black ${
              currentStep === 1
                ? "opacity-30 cursor-not-allowed bg-gray-700 text-gray-400"
                : "bg-[#4B5563] text-white cursor-pointer shadow-[4px_4px_0px_#000]"
            }`}
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">PREV [◄]</span>
          </button>

          {/* Hint */}
          <span className="hidden md:inline font-terminal text-sm text-gray-400">
            USE NUMBER KEYS [ 1 - 4 ] OR [ A - D ] TO SELECT
          </span>

          {/* Next / Confirm Button */}
          <button
            onClick={() => {
              retroAudio.playLaser();
              onNext();
            }}
            disabled={!canGoNext}
            className={`atari-btn font-arcade text-xs sm:text-sm py-2.5 px-6 flex items-center gap-2 border-black ${
              canGoNext
                ? "bg-[#00FF66] text-black cursor-pointer shadow-[6px_6px_0px_#000]"
                : "opacity-40 cursor-not-allowed bg-gray-600 text-gray-300"
            }`}
          >
            <span>
              {currentStep === totalSteps ? "ANALYZE [ENTER]" : "NEXT [ENTER]"}
            </span>
            {currentStep === totalSteps ? (
              <CornerDownLeft size={16} />
            ) : (
              <ArrowRight size={16} />
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
