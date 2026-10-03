"use client";

import React from "react";
import { Volume2, VolumeX, Monitor, BookOpen } from "lucide-react";
import { retroAudio } from "@/lib/audio";

interface AtariHeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  crtEnabled: boolean;
  onToggleCrt: () => void;
  onOpenCodex: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export const AtariHeader: React.FC<AtariHeaderProps> = ({
  soundEnabled,
  onToggleSound,
  crtEnabled,
  onToggleCrt,
  onOpenCodex,
  currentStep,
  totalSteps,
}) => {
  return (
    <header className="w-full bg-[#000000] border-b-4 border-black text-white select-none">
      {/* Authentic Atari 6-color Rainbow Strip */}
      <div className="atari-rainbow-bar" />

      {/* Main Arcade Top Bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="bg-[#E72F18] text-white px-2.5 py-1 text-xs font-arcade font-bold border-2 border-white shadow-[2px_2px_0px_#fff]">
            ATARI // 2600
          </div>
          <div>
            <h1 className="font-arcade text-xs md:text-sm tracking-wider text-[#FFCC00]">
              SYS::FILE_TYPE_PROFILER
            </h1>
            <p className="font-terminal text-sm md:text-base text-gray-400 leading-none">
              ROM REV 2.40 // 6502 ARCHITECTURE
            </p>
          </div>
        </div>

        {/* Step indicator if in quiz */}
        {currentStep !== undefined && totalSteps !== undefined && (
          <div className="bg-[#1e1b2e] border-2 border-[#00F0FF] px-3 py-1 text-center shadow-[3px_3px_0px_#00F0FF]">
            <span className="font-arcade text-[10px] md:text-xs text-[#00F0FF]">
              STAGE {String(currentStep).padStart(2, "0")}/{String(totalSteps).padStart(2, "0")}
            </span>
          </div>
        )}

        {/* Arcade Control Switches */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              retroAudio.playBlip(520);
            }}
            title={soundEnabled ? "Mute Arcade Sound" : "Enable Arcade Sound"}
            className={`atari-btn px-2.5 py-1 text-xs font-arcade flex items-center gap-1.5 cursor-pointer ${
              soundEnabled
                ? "bg-[#00FF66] text-black border-black"
                : "bg-[#2A2A3A] text-gray-400 border-black"
            }`}
          >
            {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
            <span className="hidden sm:inline">
              {soundEnabled ? "SND:ON" : "SND:OFF"}
            </span>
          </button>

          {/* CRT Overlay Toggle */}
          <button
            onClick={() => {
              onToggleCrt();
              retroAudio.playBlip(480);
            }}
            title="Toggle CRT Scanlines"
            className={`atari-btn px-2.5 py-1 text-xs font-arcade flex items-center gap-1.5 cursor-pointer ${
              crtEnabled
                ? "bg-[#00F0FF] text-black border-black"
                : "bg-[#2A2A3A] text-gray-400 border-black"
            }`}
          >
            <Monitor size={14} />
            <span className="hidden sm:inline">
              {crtEnabled ? "CRT:ON" : "CRT:OFF"}
            </span>
          </button>

          {/* Extension Codex Encyclopedia */}
          <button
            onClick={() => {
              onOpenCodex();
              retroAudio.playCoin();
            }}
            title="Open File Extension Encyclopedia"
            className="atari-btn bg-[#FF007F] text-white px-2.5 py-1 text-xs font-arcade flex items-center gap-1.5 cursor-pointer border-black"
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">CODEX</span>
          </button>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="w-full bg-[#111116] border-t-2 border-b-2 border-black overflow-hidden py-1 px-2 text-[#FFE600] font-terminal text-base tracking-wide flex items-center">
        <span className="bg-[#FF003C] text-white text-xs font-arcade px-1.5 py-0.5 mr-2 shrink-0">
          LOG
        </span>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="animate-marquee inline-block">
            *** SYSTEM NOTICE: .PHP FOUND IN SECTOR 7 RUNNING ON PURE SPAGHETTI *** .XML REFUSES TO EXECUTE UNTIL ALL 47 TAGS ARE CLOSED *** CSS CANNOT CENTER A DIV ON SAFARI *** BASH SCRIPT EXECUTING RM -RF WITH ZERO REGRETS *** RUST COMPILER HAS REJECTED 999 LIFETIMES TODAY *** JSON BROKE DOWN CRYING OVER A TRAILING COMMA *** INSERT COIN TO DISCOVER YOUR TRUE EXTENSION ***
          </div>
        </div>
      </div>
    </header>
  );
};
