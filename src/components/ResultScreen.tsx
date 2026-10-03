"use client";

import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import {
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  Download,
  AlertTriangle,
  Flame,
  Shield,
  Heart,
  Skull,
  Award,
} from "lucide-react";
import { FileTypeProfile, FILE_TYPES } from "@/data/quizData";
import { retroAudio } from "@/lib/audio";

interface ResultScreenProps {
  primaryFile: FileTypeProfile;
  secondaryFile: FileTypeProfile | null;
  scores: Record<string, number>;
  onRestart: () => void;
  onOpenCodex: (fileId?: string) => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  primaryFile,
  secondaryFile,
  scores,
  onRestart,
  onOpenCodex,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"dossier" | "stats" | "relations">("dossier");

  useEffect(() => {
    // Play celebratory arcade fanfare
    retroAudio.playVictory();

    // Trigger Atari pixel confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF003C", "#FF7700", "#FFE600", "#00FF66", "#00F0FF", "#FF007F"],
        shapes: ["square"],
        disableForReducedMotion: true,
      });
    } catch {
      // Ignore
    }
  }, []);

  // Format shareable ASCII text report
  const generateAsciiReport = () => {
    return [
      "========================================",
      "   ATARI 2600 PERSONALITY DIAGNOSTIC   ",
      "========================================",
      `EXT:       ${primaryFile.extension}`,
      `TITLE:     ${primaryFile.title}`,
      `TAGLINE:   ${primaryFile.tagline}`,
      "----------------------------------------",
      `MIME-TYPE: ${primaryFile.mimeType}`,
      `TYPICAL:   ${primaryFile.typicalSize}`,
      `VOLATILE:  ${primaryFile.volatility}`,
      "----------------------------------------",
      "CORE STATS:",
      `  STRUCTURE:   ${primaryFile.stats.structure}%`,
      `  CHAOS:       ${primaryFile.stats.chaos}%`,
      `  AESTHETICS:  ${primaryFile.stats.aesthetics}%`,
      `  DURABILITY:  ${primaryFile.stats.durability}%`,
      `  SOCIABILITY: ${primaryFile.stats.sociability}%`,
      "----------------------------------------",
      `QUOTE: "${primaryFile.quote}"`,
      "----------------------------------------",
      `WARNING: ${primaryFile.warningLabel}`,
      "========================================",
      "Discover your file type at: WHAT FILE TYPE ARE YOU?",
    ].join("\n");
  };

  const handleCopy = () => {
    retroAudio.playCoin();
    const text = generateAsciiReport();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    retroAudio.playCoin();
    const text = generateAsciiReport();
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `my-personality-${primaryFile.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 flex flex-col items-center">
      {/* Outer Atari Cartridge Bezel */}
      <div className="w-full atari-woodgrain p-3 sm:p-5 shadow-[12px_12px_0px_#000]">
        <div className="bg-[#0b0a12] border-4 border-black p-4 sm:p-7 flex flex-col items-center text-center">

          {/* Top Status Header */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="bg-[#00FF66] text-black font-arcade text-[10px] sm:text-xs px-2.5 py-1 font-bold border-2 border-black shadow-[2px_2px_0px_#000]">
              ANALYSIS COMPLETE
            </span>
            <span className="bg-[#FF007F] text-white font-arcade text-[10px] sm:text-xs px-2.5 py-1 font-bold border-2 border-black shadow-[2px_2px_0px_#000]">
              MATCH 99.4%
            </span>
          </div>

          <h2 className="font-arcade text-xs sm:text-sm text-[#00F0FF] uppercase tracking-wider mb-2">
            ATARI DIAGNOSTIC MATRIX HAS DECODED YOUR SOUL:
          </h2>

          {/* Massive Primary Extension Banner */}
          <div
            className="w-full border-6 border-black p-5 sm:p-8 shadow-[10px_10px_0px_#000] mb-6 transition-all"
            style={{
              backgroundColor: primaryFile.atariColor,
              color: primaryFile.atariTextColor,
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* ASCII Pixel Badge */}
              <div className="bg-black text-[#00FF66] p-2.5 font-arcade text-[10px] sm:text-xs border-3 border-black shadow-[3px_3px_0px_#000] hidden sm:block whitespace-pre text-left leading-tight">
                {primaryFile.pixelArt.join("\n")}
              </div>

              {/* Center Title */}
              <div className="flex-1 text-center">
                <span className="font-arcade text-5xl sm:text-7xl md:text-8xl font-black tracking-tight drop-shadow-[5px_5px_0px_rgba(0,0,0,0.6)] block">
                  {primaryFile.extension}
                </span>
                <span className="font-arcade text-sm sm:text-lg md:text-xl font-bold tracking-wider uppercase block mt-1">
                  {primaryFile.title}
                </span>
              </div>

              {/* Danger Rating Icon */}
              <div className="bg-black text-white p-3 border-3 border-black shadow-[3px_3px_0px_#000] flex flex-col items-center">
                <span className="font-arcade text-[9px] text-[#FFE600] mb-1">
                  VOLATILITY
                </span>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < primaryFile.dangerRating
                          ? "text-[#FF003C]"
                          : "text-gray-700"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-4 pt-3 border-t-3 border-black font-terminal text-xl sm:text-2xl font-bold leading-tight">
              &quot;{primaryFile.tagline}&quot;
            </div>
          </div>

          {/* Famous Quote Dialogue Box */}
          <div className="w-full bg-[#1b172a] border-4 border-black p-4 sm:p-5 shadow-[6px_6px_0px_#000] text-left mb-6">
            <div className="flex items-center gap-2 text-[#FFE600] font-arcade text-xs mb-1">
              <Award size={16} />
              <span>FAMOUS CORE LOG QUOTE:</span>
            </div>
            <p className="font-terminal text-xl sm:text-2xl text-white font-bold leading-snug">
              &ldquo;{primaryFile.quote}&rdquo;
            </p>
          </div>

          {/* Navigation Tabs for In-Depth Data */}
          <div className="flex w-full gap-2 mb-4">
            <button
              onClick={() => {
                retroAudio.playBlip(500);
                setActiveTab("dossier");
              }}
              className={`flex-1 atari-btn py-2 px-3 font-arcade text-xs cursor-pointer border-black ${
                activeTab === "dossier"
                  ? "bg-[#FFE600] text-black shadow-[4px_4px_0px_#000]"
                  : "bg-[#25203b] text-gray-300"
              }`}
            >
              1. DOSSIER
            </button>
            <button
              onClick={() => {
                retroAudio.playBlip(550);
                setActiveTab("stats");
              }}
              className={`flex-1 atari-btn py-2 px-3 font-arcade text-xs cursor-pointer border-black ${
                activeTab === "stats"
                  ? "bg-[#00F0FF] text-black shadow-[4px_4px_0px_#000]"
                  : "bg-[#25203b] text-gray-300"
              }`}
            >
              2. STATS & TRAITS
            </button>
            <button
              onClick={() => {
                retroAudio.playBlip(600);
                setActiveTab("relations");
              }}
              className={`flex-1 atari-btn py-2 px-3 font-arcade text-xs cursor-pointer border-black ${
                activeTab === "relations"
                  ? "bg-[#FF007F] text-white shadow-[4px_4px_0px_#000]"
                  : "bg-[#25203b] text-gray-300"
              }`}
            >
              3. ALLIES & RIVALS
            </button>
          </div>

          {/* Tab 1: Dossier */}
          {activeTab === "dossier" && (
            <div className="w-full text-left space-y-4">
              {/* Detailed Breakdown */}
              <div className="bg-[#141221] border-3 border-black p-4 sm:p-5 shadow-[4px_4px_0px_#000]">
                <h3 className="font-arcade text-xs text-[#00FF66] mb-2 uppercase">
                  PSYCHOLOGICAL DIAGNOSIS:
                </h3>
                <p className="font-terminal text-xl sm:text-2xl text-gray-200 leading-relaxed">
                  {primaryFile.description}
                </p>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Strengths */}
                <div className="bg-[#141221] border-3 border-black p-4 shadow-[4px_4px_0px_#000]">
                  <h4 className="font-arcade text-xs text-[#00FF66] mb-2 flex items-center gap-1.5">
                    <Shield size={14} />
                    <span>SYSTEM ADVANTAGES:</span>
                  </h4>
                  <ul className="space-y-2 font-terminal text-lg text-gray-300">
                    {primaryFile.strengths.map((str, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00FF66] font-bold">►</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="bg-[#141221] border-3 border-black p-4 shadow-[4px_4px_0px_#000]">
                  <h4 className="font-arcade text-xs text-[#FF003C] mb-2 flex items-center gap-1.5">
                    <AlertTriangle size={14} />
                    <span>SYSTEM VULNERABILITIES:</span>
                  </h4>
                  <ul className="space-y-2 font-terminal text-lg text-gray-300">
                    {primaryFile.weaknesses.map((w, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#FF003C] font-bold">✖</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Natural Habitat */}
              <div className="bg-[#141221] border-3 border-black p-3.5 shadow-[4px_4px_0px_#000]">
                <span className="font-arcade text-[10px] text-[#FFE600] uppercase block mb-1">
                  NATURAL HABITAT:
                </span>
                <p className="font-terminal text-lg text-gray-300">
                  {primaryFile.naturalHabitat}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Stats & Traits */}
          {activeTab === "stats" && (
            <div className="w-full text-left space-y-4">
              <div className="bg-[#141221] border-3 border-black p-4 sm:p-5 shadow-[4px_4px_0px_#000]">
                <h3 className="font-arcade text-xs text-[#00F0FF] mb-4 uppercase">
                  ATARI TELEMETRY PROFILE:
                </h3>

                <div className="space-y-4">
                  {[
                    { label: "STRUCTURE & STRICTNESS", val: primaryFile.stats.structure, color: "#FFE600" },
                    { label: "CHAOS & SPAGHETTI ENERGY", val: primaryFile.stats.chaos, color: "#FF007F" },
                    { label: "AESTHETICS & DRIP", val: primaryFile.stats.aesthetics, color: "#00F0FF" },
                    { label: "SURVIVAL & DURABILITY", val: primaryFile.stats.durability, color: "#00FF66" },
                    { label: "SOCIABILITY & PROTOCOL", val: primaryFile.stats.sociability, color: "#FF5500" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between font-arcade text-[10px] sm:text-xs mb-1">
                        <span className="text-gray-300">{stat.label}</span>
                        <span style={{ color: stat.color }}>{stat.val}%</span>
                      </div>
                      {/* Chunky 10-block pixel meter */}
                      <div className="w-full h-5 bg-[#0a0912] border-2 border-black p-0.5 flex gap-1">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div
                            key={i}
                            className={`flex-1 h-full ${
                              i < Math.round(stat.val / 10)
                                ? "border-r border-black"
                                : "bg-[#1f1c2d]"
                            }`}
                            style={{
                              backgroundColor:
                                i < Math.round(stat.val / 10) ? stat.color : undefined,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware Specs Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[#141221] border-3 border-black p-3 text-center shadow-[3px_3px_0px_#000]">
                  <span className="font-arcade text-[9px] text-gray-400 block mb-1">
                    MIME TYPE
                  </span>
                  <span className="font-terminal text-base text-[#00FF66] font-bold">
                    {primaryFile.mimeType}
                  </span>
                </div>
                <div className="bg-[#141221] border-3 border-black p-3 text-center shadow-[3px_3px_0px_#000]">
                  <span className="font-arcade text-[9px] text-gray-400 block mb-1">
                    FOOTPRINT
                  </span>
                  <span className="font-terminal text-base text-[#FFE600] font-bold">
                    {primaryFile.typicalSize}
                  </span>
                </div>
                <div className="bg-[#141221] border-3 border-black p-3 text-center shadow-[3px_3px_0px_#000]">
                  <span className="font-arcade text-[9px] text-gray-400 block mb-1">
                    VOLATILITY
                  </span>
                  <span className="font-terminal text-base text-[#FF003C] font-bold">
                    {primaryFile.volatility}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Allies & Rivals */}
          {activeTab === "relations" && (
            <div className="w-full text-left space-y-4">
              {/* Allies */}
              <div className="bg-[#141221] border-3 border-black p-4 shadow-[4px_4px_0px_#000]">
                <h4 className="font-arcade text-xs text-[#00FF66] mb-3 flex items-center gap-1.5">
                  <Heart size={14} className="fill-[#00FF66]" />
                  <span>NATURAL COMPATIBILITIES (BEST FRIENDS):</span>
                </h4>
                <div className="space-y-2">
                  {primaryFile.allies.map((ally) => (
                    <div
                      key={ally.ext}
                      onClick={() => {
                        const target = Object.values(FILE_TYPES).find((f) => f.extension === ally.ext);
                        if (target) onOpenCodex(target.id);
                      }}
                      className="p-2.5 bg-[#1e1b2f] border-2 border-black flex items-center justify-between gap-3 hover:bg-[#2c2642] cursor-pointer"
                    >
                      <span className="font-arcade text-xs text-[#FFE600] font-bold">
                        {ally.ext}
                      </span>
                      <span className="font-terminal text-lg text-gray-300 text-right flex-1">
                        {ally.reason}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rivals */}
              <div className="bg-[#141221] border-3 border-black p-4 shadow-[4px_4px_0px_#000]">
                <h4 className="font-arcade text-xs text-[#FF003C] mb-3 flex items-center gap-1.5">
                  <Skull size={14} className="fill-[#FF003C]" />
                  <span>SYSTEM RIVALS & INCOMPATIBILITIES:</span>
                </h4>
                <div className="space-y-2">
                  {primaryFile.rivals.map((rival) => (
                    <div
                      key={rival.ext}
                      onClick={() => {
                        const target = Object.values(FILE_TYPES).find((f) => f.extension === rival.ext);
                        if (target) onOpenCodex(target.id);
                      }}
                      className="p-2.5 bg-[#1e1b2f] border-2 border-black flex items-center justify-between gap-3 hover:bg-[#2c2642] cursor-pointer"
                    >
                      <span className="font-arcade text-xs text-[#FF003C] font-bold">
                        {rival.ext}
                      </span>
                      <span className="font-terminal text-lg text-gray-300 text-right flex-1">
                        {rival.reason}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Secondary Runner-up match */}
          {secondaryFile && secondaryFile.id !== primaryFile.id && (
            <div className="w-full mt-4 bg-[#11101b] border-2 border-[#00F0FF] p-3 text-left shadow-[3px_3px_0px_#00F0FF] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="font-arcade text-[10px] text-[#00F0FF]">
                  SECONDARY FREQUENCY:
                </span>
                <span className="font-arcade text-xs text-[#FFE600] font-bold">
                  {secondaryFile.extension} ({secondaryFile.title})
                </span>
              </div>
              <button
                onClick={() => onOpenCodex(secondaryFile.id)}
                className="font-terminal text-sm text-[#00FF66] underline cursor-pointer hover:text-white"
              >
                Inspect Secondary Extension &gt;
              </button>
            </div>
          )}

          {/* Warning Banner */}
          <div className="w-full mt-5 bg-[#FF003C] text-white border-3 border-black p-3 font-terminal text-lg font-bold shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2">
            <AlertTriangle size={18} className="shrink-0" />
            <span>{primaryFile.warningLabel}</span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap gap-3 w-full justify-center mt-6 pt-6 border-t-4 border-black">
            {/* Copy Report */}
            <button
              onClick={handleCopy}
              className="atari-btn bg-[#00FF66] text-black font-arcade text-xs sm:text-sm py-3 px-5 flex items-center gap-2 cursor-pointer shadow-[6px_6px_0px_#000]"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? "COPIED REPORT!" : "COPY REPORT"}</span>
            </button>

            {/* Download Ticket */}
            <button
              onClick={handleDownload}
              className="atari-btn bg-[#00F0FF] text-black font-arcade text-xs sm:text-sm py-3 px-5 flex items-center gap-2 cursor-pointer shadow-[6px_6px_0px_#000]"
            >
              <Download size={16} />
              <span>DOWNLOAD RECEIPT</span>
            </button>

            {/* Browse Codex */}
            <button
              onClick={() => onOpenCodex()}
              className="atari-btn bg-[#FF007F] text-white font-arcade text-xs sm:text-sm py-3 px-5 flex items-center gap-2 cursor-pointer shadow-[6px_6px_0px_#000]"
            >
              <BookOpen size={16} />
              <span>ALL 12 FILES</span>
            </button>

            {/* Play Again */}
            <button
              onClick={() => {
                retroAudio.playBuzzer();
                onRestart();
              }}
              className="atari-btn bg-[#4B5563] text-white font-arcade text-xs sm:text-sm py-3 px-5 flex items-center gap-2 cursor-pointer shadow-[6px_6px_0px_#000]"
            >
              <RotateCcw size={16} />
              <span>RESTART QUIZ</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
