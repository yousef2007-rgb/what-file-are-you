"use client";

import React, { useEffect } from "react";
import { Play, Sparkles, BookOpen, Terminal, Flame, ShieldAlert, Cpu } from "lucide-react";
import { retroAudio } from "@/lib/audio";
import { FILE_TYPES } from "@/data/quizData";

interface IntroScreenProps {
  onStart: () => void;
  onOpenCodex: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart, onOpenCodex }) => {
  // Listen for Enter or Space to start
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        retroAudio.playCoin();
        onStart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onStart]);

  const featured = [
    {
      ext: FILE_TYPES.xml.extension,
      name: FILE_TYPES.xml.title,
      color: FILE_TYPES.xml.atariColor,
      textColor: FILE_TYPES.xml.atariTextColor,
      desc: "Ultra-strict, 47-page manuals, hates spontaneity, demands closing tags.",
      icon: Terminal,
    },
    {
      ext: FILE_TYPES.css.extension,
      name: FILE_TYPES.css.title,
      color: FILE_TYPES.css.atariColor,
      textColor: FILE_TYPES.css.atariTextColor,
      desc: "Artsy, vibes-first, emotional breakdown when centering a div.",
      icon: Sparkles,
    },
    {
      ext: FILE_TYPES.php.extension,
      name: FILE_TYPES.php.title,
      color: FILE_TYPES.php.atariColor,
      textColor: FILE_TYPES.php.atariTextColor,
      desc: "Immortal trash fire, spaghetti survivor, somehow runs the whole world.",
      icon: Flame,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
      {/* Atari Console Cartridge Frame */}
      <div className="w-full atari-woodgrain p-3 sm:p-5 shadow-[12px_12px_0px_#000]">
        <div className="bg-[#0b0a10] border-4 border-black p-5 sm:p-8 flex flex-col items-center text-center">
          
          {/* Top Cartridge Header Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFE600] text-black px-3 py-1 font-arcade text-[10px] sm:text-xs font-bold border-2 border-black shadow-[3px_3px_0px_#000] mb-5">
            <Cpu size={14} className="shrink-0" />
            <span>CARTRIDGE 042 // ATARI SYSTEM DIAGNOSTICS</span>
          </div>

          {/* Main Title Banner */}
          <div className="bg-[#E72F18] border-4 border-black p-4 sm:p-6 w-full shadow-[8px_8px_0px_#000] mb-6">
            <h1 className="font-arcade text-2xl sm:text-4xl md:text-5xl text-[#FFE600] tracking-tight leading-tight uppercase drop-shadow-[4px_4px_0px_#000]">
              WHAT FILE TYPE
              <br />
              ARE YOU?
            </h1>
            <p className="font-terminal text-xl sm:text-2xl text-white mt-2 tracking-widest uppercase">
              // 8-BIT PERSONALITY PROFILER & MEMORY DUMP //
            </p>
          </div>

          {/* Blinking Arcade Call to Action */}
          <div className="my-2 py-1 px-4 bg-[#1b1828] border-2 border-[#00F0FF] text-[#00F0FF] font-arcade text-xs sm:text-sm animate-arcade-blink shadow-[4px_4px_0px_#00F0FF]">
            ► INSERT COIN / PRESS START TO INITIALIZE ◄
          </div>

          <p className="font-terminal text-lg sm:text-xl text-gray-300 max-w-2xl my-4 leading-relaxed">
            Are you a rigid bureaucrat like <span className="text-[#FFE600] font-bold">.XML</span>? 
            An unhinged aesthetic drama queen like <span className="text-[#00F0FF] font-bold">.CSS</span>? 
            Or an unkillable spaghetti survivor like <span className="text-[#FF007F] font-bold">.PHP</span>? 
            Answer 10 psychological queries to extract your true system extension.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-3 mb-8">
            <button
              onClick={() => {
                retroAudio.playCoin();
                onStart();
              }}
              onMouseEnter={() => retroAudio.playBlip(600)}
              className="atari-btn bg-[#00FF66] text-black font-arcade text-sm sm:text-base py-4 px-8 flex items-center justify-center gap-3 cursor-pointer shadow-[8px_8px_0px_#000]"
            >
              <Play size={20} className="fill-black" />
              <span>START TEST [ SPACE ]</span>
            </button>

            <button
              onClick={() => {
                retroAudio.playCoin();
                onOpenCodex();
              }}
              onMouseEnter={() => retroAudio.playBlip(500)}
              className="atari-btn bg-[#FF007F] text-white font-arcade text-xs sm:text-sm py-4 px-6 flex items-center justify-center gap-2 cursor-pointer shadow-[8px_8px_0px_#000]"
            >
              <BookOpen size={18} />
              <span>BROWSE ALL 12 FILES</span>
            </button>
          </div>

          {/* 3 Featured File Types Banner */}
          <div className="w-full border-t-4 border-black pt-6">
            <div className="text-left font-arcade text-xs text-[#FFE600] mb-3 flex items-center gap-2">
              <ShieldAlert size={14} />
              <span>KNOWN ARCHETYPE SAMPLES:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {featured.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.ext}
                    className="border-3 border-black p-3.5 shadow-[4px_4px_0px_#000] flex flex-col justify-between"
                    style={{ backgroundColor: item.color, color: item.textColor }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-arcade text-lg font-bold">
                          {item.ext}
                        </span>
                        <Icon size={18} />
                      </div>
                      <div className="font-arcade text-[10px] font-bold tracking-wider mb-2 uppercase opacity-90">
                        {item.name}
                      </div>
                      <p className="font-terminal text-sm leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Specs */}
          <div className="mt-6 pt-4 border-t-2 border-gray-800 w-full flex flex-wrap items-center justify-between text-gray-500 font-terminal text-sm">
            <span>KEYBOARD SUPPORT: [ 1-4 ] / [ A-D ] / [ ENTER ]</span>
            <span>NO COOKIES • ZERO TRACKING • PURE RETRO NOSTALGIA</span>
          </div>

        </div>
      </div>
    </div>
  );
};
