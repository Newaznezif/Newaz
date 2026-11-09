"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Volume2 } from "lucide-react";
import { PERSONAL_INFO } from "@/constants";

export const Hero = () => {
    const reduceMotion = useReducedMotion();
    const [isPlayingIntro, setIsPlayingIntro] = useState(false);
    const entrance = reduceMotion
        ? {}
        : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45, ease: "easeOut" as const } };

    const playIntro = () => {
        if (isPlayingIntro) return;
        setIsPlayingIntro(true);

        // A short, locally generated digital glitch sting. No audio file or external request.
        try {
            const AudioContextClass = window.AudioContext;
            if (AudioContextClass) {
                const context = new AudioContextClass();
                const master = context.createGain();
                master.gain.setValueAtTime(0.0001, context.currentTime);
                master.gain.exponentialRampToValueAtTime(0.16, context.currentTime + 0.035);
                master.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1.35);
                master.connect(context.destination);

                [110, 220, 660, 440, 880].forEach((frequency, index) => {
                    const oscillator = context.createOscillator();
                    const gain = context.createGain();
                    const start = context.currentTime + index * 0.105;
                    oscillator.type = index % 2 === 0 ? "sawtooth" : "square";
                    oscillator.frequency.setValueAtTime(frequency * 1.8, start);
                    oscillator.frequency.exponentialRampToValueAtTime(frequency, start + 0.11);
                    gain.gain.setValueAtTime(0.0001, start);
                    gain.gain.exponentialRampToValueAtTime(0.22, start + 0.012);
                    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.16);
                    oscillator.connect(gain);
                    gain.connect(master);
                    oscillator.start(start);
                    oscillator.stop(start + 0.17);
                });

                const noiseBuffer = context.createBuffer(1, context.sampleRate * 0.42, context.sampleRate);
                const noiseData = noiseBuffer.getChannelData(0);
                for (let i = 0; i < noiseData.length; i += 1) {
                    noiseData[i] = (Math.random() * 2 - 1) * (Math.random() > 0.82 ? 1 : 0.22);
                }
                const noise = context.createBufferSource();
                const filter = context.createBiquadFilter();
                const noiseGain = context.createGain();
                noise.buffer = noiseBuffer;
                filter.type = "bandpass";
                filter.frequency.value = 2400;
                filter.Q.value = 0.8;
                noiseGain.gain.setValueAtTime(0.0001, context.currentTime + 0.08);
                noiseGain.gain.exponentialRampToValueAtTime(0.12, context.currentTime + 0.12);
                noiseGain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.48);
                noise.connect(filter);
                filter.connect(noiseGain);
                noiseGain.connect(master);
                noise.start(context.currentTime + 0.08);
                noise.stop(context.currentTime + 0.49);
                window.setTimeout(() => void context.close(), 1800);
            }
        } catch {
            // Speech remains available if Web Audio is blocked by the browser.
        }

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const line = new SpeechSynthesisUtterance("This is Newaz Nezif.");
            line.lang = "en-US";
            line.rate = 0.88;
            line.pitch = 0.72;
            line.volume = 0.9;
            const englishVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith("en"));
            if (englishVoice) line.voice = englishVoice;
            line.onend = () => setIsPlayingIntro(false);
            line.onerror = () => setIsPlayingIntro(false);
            window.speechSynthesis.speak(line);
            window.setTimeout(() => setIsPlayingIntro(false), 4500);
        } else {
            window.setTimeout(() => setIsPlayingIntro(false), 1500);
        }
    };

    return (
        <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-20">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute -top-32 right-0 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-[140px]" />
            </div>

            <div className="container-mega relative z-10">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
                    <motion.div className="order-2 lg:order-1" {...entrance}>
                        <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/[0.06] px-3 py-2 rounded-full mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-primary">Cybersecurity • AI • Engineering</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <p className="font-mono text-sm text-text-secondary tracking-[0.18em] uppercase">Hello, I&apos;m</p>
                            <button
                                type="button"
                                onClick={playIntro}
                                disabled={isPlayingIntro}
                                aria-label="Play Newaz Nezif glitch audio introduction"
                                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.07] px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] uppercase text-primary transition-all hover:border-primary/70 hover:bg-primary/15 disabled:cursor-wait disabled:opacity-60"
                            >
                                <Volume2 size={13} />
                                {isPlayingIntro ? "TRANSMITTING..." : "PLAY INTRO"}
                            </button>
                        </div>
                        <h1 className="text-[clamp(3.2rem,8vw,6.8rem)] leading-[0.94] font-bold tracking-[-0.07em] mb-7">
                            NEWAZ<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-200 to-white">NEZIF.</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-5">
                            Cybersecurity Analyst <span className="text-primary">/</span> AI
                        </h2>
                        <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                            Protecting digital infrastructure, investigating threats, and building intelligent technology for real-world challenges.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                                Explore my work <ArrowUpRight size={16} />
                            </a>
                            <a href="#contact" className="btn-outline inline-flex items-center gap-2">
                                Get in touch
                            </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-secondary">
                            <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-primary" />{PERSONAL_INFO.location}</span>
                            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Linkedin size={15} /> LinkedIn</a>
                            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><Github size={15} /> GitHub</a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}
                    >
                        <div className="relative w-full max-w-[390px]">
                            <div className="absolute -inset-4 border border-primary/20 rounded-2xl translate-x-3 translate-y-3" />
                            <div className="absolute -inset-4 border border-white/5 rounded-2xl -translate-x-3 -translate-y-3" />
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
                                <img src="/Pro.png" alt="Portrait of Newaz Nezif Abagero" className="w-full h-full object-cover object-top" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="font-mono text-xs text-primary tracking-[0.16em] uppercase mb-2">Information Systems</p>
                                    <p className="text-white text-xl font-semibold">Security-minded. Impact-driven.</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-7 -left-5 glass-panel px-4 py-3 rounded-xl hidden sm:block">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">Current focus</p>
                                <p className="text-sm text-white font-semibold mt-1">Security + Applied AI</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <a href="#about" aria-label="Scroll to about section" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/40 hover:text-primary transition-colors">
                <ArrowDown size={20} />
            </a>
        </section>
    );
};
