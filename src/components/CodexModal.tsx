"use client";

import React, { useState, useEffect } from "react";
import { X, Award, Shield, AlertTriangle, Cpu, Terminal } from "lucide-react";
import { FILE_TYPES, FileTypeProfile } from "@/data/quizData";
import { retroAudio } from "@/lib/audio";

interface CodexModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFileId?: string;
}

export const CodexModal: React.FC<CodexModalProps> = ({
  isOpen,
  onClose,
  initialFileId,
}) => {
  const fileList = Object.values(FILE_TYPES);
  const [selectedId, setSelectedId] = useState<string>(initialFileId || "xml");

  useEffect(() => {
    if (initialFileId && FILE_TYPES[initialFileId]) {
      setSelectedId(initialFileId);
    }
  }, [initialFileId]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        retroAudio.playBlip(350);
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentFile: FileTypeProfile = FILE_TYPES[selectedId] || fileList[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-2 sm:p-4 select-none overflow-y-auto">
      <div className="w-full max-w-4xl bg-[#0e0c16] border-4 border-black shadow-[10px_10px_0px_#000] my-8 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#E72F18] border-b-4 border-black p-3 sm:p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Cpu size={20} className="text-[#FFE600]" />
            <h3 className="font-arcade text-xs sm:text-sm font-bold tracking-wider text-[#FFE600] uppercase">
              ATARI EXTENSION CODEX // 12 REGISTERED ARCHETYPES
            </h3>
          </div>
          <button
            onClick={() => {
              retroAudio.playBlip(350);
              onClose();
            }}
            className="atari-btn bg-black text-white px-2.5 py-1 text-xs font-arcade cursor-pointer border-2 border-white hover:bg-white hover:text-black"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 flex flex-col md:flex-row gap-6">
          {/* Left Column: Extension List Badges */}
          <div className="w-full md:w-56 shrink-0 grid grid-cols-2 md:grid-cols-1 gap-2">
            {fileList.map((file) => {
              const isSelected = file.id === currentFile.id;
              return (
                <button
                  key={file.id}
                  onClick={() => {
                    retroAudio.playBlip(550);
                    setSelectedId(file.id);
                  }}
                  className={`atari-btn p-2 sm:p-2.5 text-left cursor-pointer flex items-center justify-between border-2 border-black transition-all ${
                    isSelected
                      ? "bg-[#FFE600] text-black shadow-[4px_4px_0px_#000] font-bold"
                      : "bg-[#1c182c] text-gray-300 hover:bg-[#2c2642]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-arcade text-xs sm:text-sm">
                      {file.extension}
                    </span>
                  </div>
                  <span className="font-arcade text-[9px] uppercase opacity-75 hidden sm:inline">
                    {file.id}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected File Profile Details */}
          <div className="flex-1 bg-[#151224] border-3 border-black p-4 sm:p-5 flex flex-col justify-between">
            <div>
              {/* Header Box */}
              <div
                className="border-3 border-black p-4 mb-4 shadow-[4px_4px_0px_#000]"
                style={{
                  backgroundColor: currentFile.atariColor,
                  color: currentFile.atariTextColor,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-arcade text-3xl sm:text-4xl font-black">
                    {currentFile.extension}
                  </span>
                  <span className="font-arcade text-xs uppercase px-2 py-0.5 bg-black text-[#00FF66] border border-black">
                    {currentFile.volatility}
                  </span>
                </div>
                <h4 className="font-arcade text-xs sm:text-sm font-bold uppercase mt-1">
                  {currentFile.title}
                </h4>
                <p className="font-terminal text-lg font-bold mt-1 leading-tight">
                  &quot;{currentFile.tagline}&quot;
                </p>
              </div>

              {/* Catchphrase */}
              <div className="bg-[#0b0a12] border-2 border-black p-3 mb-4 text-[#FFE600] font-terminal text-lg leading-snug">
                &gt; &ldquo;{currentFile.quote}&rdquo;
              </div>

              {/* Description */}
              <div className="mb-4">
                <span className="font-arcade text-[10px] text-[#00FF66] uppercase block mb-1">
                  PSYCHOLOGICAL DOSSIER:
                </span>
                <p className="font-terminal text-lg text-gray-200 leading-relaxed">
                  {currentFile.description}
                </p>
              </div>

              {/* Telemetry Stats */}
              <div className="bg-[#0b0a12] border-2 border-black p-3 mb-4 space-y-2">
                <span className="font-arcade text-[10px] text-[#00F0FF] uppercase block">
                  CORE SYSTEM STATS:
                </span>
                {[
                  { label: "STRUCTURE", val: currentFile.stats.structure, color: "#FFE600" },
                  { label: "CHAOS", val: currentFile.stats.chaos, color: "#FF007F" },
                  { label: "AESTHETICS", val: currentFile.stats.aesthetics, color: "#00F0FF" },
                  { label: "DURABILITY", val: currentFile.stats.durability, color: "#00FF66" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between text-xs">
                    <span className="font-terminal text-sm text-gray-400">{s.label}:</span>
                    <div className="w-36 h-3 bg-[#1e1a2f] border border-black p-0.5 flex gap-0.5">
                      <div
                        className="h-full"
                        style={{
                          width: `${s.val}%`,
                          backgroundColor: s.color,
                        }}
                      />
                    </div>
                    <span className="font-arcade text-[10px] text-white w-8 text-right">
                      {s.val}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Natural Habitat & Warning */}
              <div className="space-y-2 text-left">
                <div className="bg-[#0b0a12] border-2 border-black p-2.5">
                  <span className="font-arcade text-[9px] text-[#FFE600] uppercase block">
                    NATURAL HABITAT:
                  </span>
                  <p className="font-terminal text-base text-gray-300">
                    {currentFile.naturalHabitat}
                  </p>
                </div>

                <div className="bg-[#FF003C] text-white p-2.5 font-terminal text-base font-bold flex items-center gap-2 border-2 border-black">
                  <AlertTriangle size={16} className="shrink-0" />
                  <span>{currentFile.warningLabel}</span>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className="mt-5 pt-3 border-t-2 border-black flex justify-end">
              <button
                onClick={() => {
                  retroAudio.playBlip(350);
                  onClose();
                }}
                className="atari-btn bg-[#4B5563] text-white font-arcade text-xs py-2 px-4 cursor-pointer border-black"
              >
                CLOSE CODEX [ ESC ]
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
