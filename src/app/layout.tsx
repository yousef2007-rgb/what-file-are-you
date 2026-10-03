import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-arcade",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
});

export const metadata: Metadata = {
  title: "WHAT FILE TYPE ARE YOU? // ATARI EDITION",
  description: "Discover your true digital file extension in an authentic 8-bit Atari arcade personality quiz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pressStart.variable} ${vt323.variable}`}>
      <body className="min-h-screen bg-[#0f0e17] text-[#fffffe] antialiased selection:bg-[#ff0055] selection:text-white">
        {children}
      </body>
    </html>
  );
}
