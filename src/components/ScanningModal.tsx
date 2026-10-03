"use client";

import React, { useEffect, useState } from "react";
import { retroAudio } from "@/lib/audio";
import { FILE_TYPES } from "@/data/quizData";

interface ScanningModalProps {
  onComplete: () => void;
}

const SCAN_STEPS = [
  "INITIALIZING MEMORY DUMP [0x0000 - 0xFFFF]...",
  "PARSING EMOTIONAL STACK TRACE...",
  "CHECKING FOR UNCLOSED XML TAGS...",
  "MEASURING PHP CHAOS COEFFICIENT...",
  "EVALUATING CSS Z-INDEX SUPREMACY...",
  "SEARCHING FOR ROGUE TRAILING COMMAS...",
  "FINALIZING ATARI CARTRIDGE DECODE...",
];

const EXTENSIONS = Object.values(FILE_TYPES).map((f) => f.extension);

export const ScanningModal: React.FC<ScanningModalProps> = ({ onComplete }) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [currentExt, setCurrentExt] = useState(".???");
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    // Sound blip on scan start
    retroAudio.playLaser();

    // Fast cycling extensions
    const extInterval = setInterval(() => {
      const rand = EXTENSIONS[Math.floor(Math.random() * EXTENSIONS.length)];
      setCurrentExt(rand);
      retroAudio.playScanBeep(400 + Math.random() * 400);
    }, 120);

    // Step text progression
    const stepInterval = setInterval(() => {
      setCurrentStepIdx((prev) => {
        if (prev < SCAN_STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
      setProgress((prev) => Math.min(prev + 16, 100));
    }, 280);

    // Completion timeout
    const completeTimer = setTimeout(() => {
      clearInterval(extInterval);
      clearInterval(stepInterval);
      onComplete();
    }, 2100);

    return () => {
      clearInterval(extInterval);
      clearInterval(stepInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 select-none">
      <div className="w-full max-w-lg bg-[#0f0e17] border-4 border-[#00FF66] p-6 shadow-[10px_10px_0px_#000] text-center">
        {/* Arcade Badge */}
        <div className="inline-block bg-[#00FF66] text-black font-arcade text-xs px-3 py-1 mb-4 font-bold border-2 border-black">
          DIAGNOSTIC IN PROGRESS
        </div>

        {/* Rapidly cycling extension display */}
        <div className="bg-[#000000] border-4 border-black p-4 my-3 shadow-[6px_6px_0px_#00FF66]">
          <span className="font-arcade text-4xl sm:text-5xl text-[#FFE600] tracking-widest animate-pulse">
            {currentExt}
          </span>
        </div>

        {/* Scan step message */}
        <div className="h-12 flex items-center justify-center my-3 px-2">
          <p className="font-terminal text-lg sm:text-xl text-[#00F0FF] leading-snug">
            &gt; {SCAN_STEPS[currentStepIdx]}
          </p>
        </div>

        {/* Chunky Atari Progress Bar */}
        <div className="w-full h-8 bg-[#1f1b2e] border-3 border-black p-1 flex gap-1 my-3">
          {Array.from({ length: 16 }).map((_, i) => {
            const blockThreshold = (i + 1) * (100 / 16);
            return (
              <div
                key={i}
                className={`flex-1 h-full transition-colors ${
                  progress >= blockThreshold
                    ? "bg-[#00FF66]"
                    : "bg-[#2b273d]"
                }`}
              />
            );
          })}
        </div>

        <p className="font-arcade text-[10px] text-gray-400 mt-2">
          PLEASE DO NOT POWER DOWN THE CONSOLE
        </p>
      </div>
    </div>
  );
};
