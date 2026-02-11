"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ScanFace, CheckCircle2, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/constants";

export const Hero = () => {
    const [isScanning, setIsScanning] = useState(false);

    return (
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />
            </div>

            <div className="container-mega relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-primary font-mono text-sm sm:text-base tracking-[0.2em] uppercase mb-6">
                                {PERSONAL_INFO.title}
                            </h2>
                        </motion.div>

                        <motion.h1
                            className="mb-8 leading-none"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                        >
                            <span className="text-[var(--color-text-main)] text-5xl sm:text-7xl font-bold tracking-tighter mr-4">NEWAZ</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text-main)] via-[var(--color-text-main)] to-[var(--color-text-main)]/50 text-5xl sm:text-7xl font-bold tracking-tighter">
                                NEZIF
                            </span>
                        </motion.h1>

                        {/* Professional Summary - Visible only when scanning */}
                        <motion.div
                            className="text-text-secondary text-lg sm:text-xl max-w-xl mb-10 leading-relaxed overflow-hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: isScanning ? 1 : 0,
                                height: isScanning ? "auto" : 0
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <p>
                                Identify threats. Secure infrastructure. <br />
                                <span className="text-[var(--color-text-main)]">Engineer the future of digital defense.</span>
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <a href="#projects" className="btn-primary text-center">
                                View Operations
                            </a>
                            <a href="#contact" className="btn-outline text-center">
                                Contact Me
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        className="order-1 lg:order-2 flex flex-col items-center lg:items-end justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                    >
                        <div
                            className="relative group cursor-crosshair"
                            onMouseEnter={() => setIsScanning(true)}
                            onMouseLeave={() => setIsScanning(false)}
                        >
                            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,242,234,0.15)] bg-black transition-all duration-500 ease-out transform-gpu z-20">
                                {/* Base Image */}
                                <img
                                    src="/Pro.png"
                                    alt="Newaz Nezif"
                                    className="w-full h-[108%] object-cover object-top opacity-90 group-hover:opacity-100 group-hover:grayscale group-hover:contrast-125 transition-all duration-500"
                                />

                                {/* Blue Tint Overlay on Hover */}
                                <div className="absolute inset-0 bg-blue-500/30 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Scanning Overlay (Visible constantly but active on hover) */}
                                <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Grid Overlay */}
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-10 pointer-events-none" />

                                {/* Scanning UI Elements (Appear on Hover) */}
                                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* Full Face Targeting Frame */}
                                    <div className="absolute inset-4 border-2 border-red-500/50 rounded-lg">
                                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-red-500" />
                                        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-red-500" />
                                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-red-500" />
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-red-500" />

                                        {/* Scanning Bar */}
                                        <motion.div
                                            className="h-[2px] w-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"
                                            animate={{ y: [0, 400, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>

                                    {/* Data Readout */}
                                    <div className="absolute bottom-6 left-6 font-mono text-xs text-red-400 font-bold space-y-1 bg-black/50 p-2 rounded backdrop-blur-sm border border-red-500/30">
                                        <div className="flex items-center gap-2">
                                            <ScanFace size={14} className="animate-pulse text-red-500" />
                                            <span>BIOMETRICS_MATCH: 100%</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 size={14} className="text-red-500" />
                                            <span>ACCESS_GRANTED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Label (Pop-down animation) */}
                            <div className="absolute -bottom-12 left-0 right-0 z-10 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                                <div className="px-4 py-2 bg-red-500/10 border border-red-500/50 backdrop-blur-md rounded-lg flex items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                                    <ShieldCheck className="w-4 h-4 text-red-500" />
                                    <span className="font-mono text-sm text-red-400 uppercase tracking-[0.1em] font-bold text-shadow-glow">
                                        USER PRIVILEGED
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
                <ArrowDown className="text-white/30 w-6 h-6" />
            </motion.div>
        </section>
    );
};
