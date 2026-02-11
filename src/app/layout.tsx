import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BackgroundGrid } from "@/components/BackgroundGrid";

import { VisualControl } from "@/components/ui/VisualControl";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading"
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Newaz Nezif Abagero | Cybersecurity & AI Full-Stack Developer",
  description: "Official portfolio of Newaz Nezif Abagero, Cybersecurity Analyst and AI-Focused Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrains.variable} font-sans bg-background text-text selection:bg-primary/30 selection:text-primary overflow-x-hidden`}
      >
        <BackgroundGrid />
        <Navbar />
        {children}
        <VisualControl />
      </body>
    </html>
  );
}
