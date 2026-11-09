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

    const introScript = `Hello, internet! Is the Wi-Fi working? Good. Because you're about to enter my world.
I AM NEWAZ NEZIF.
Cybersecurity analyst by profession, developer by curiosity, AI enthusiast by obsession, and professional debugger of problems I sometimes create myself.
I spend my days analyzing cyber threats, exploring artificial intelligence, writing code, building applications, and occasionally asking myself why something worked perfectly yesterday but decided to retire today.
I speak Python, Java, SQL, and occasionally fluent ERROR 404.
Firewalls? I study them. Networks? I investigate them. Bugs? Unfortunately, they know me personally.
I believe every problem has a solution, every system has something worth understanding, and every developer deserves at least one coffee before debugging production.
My mission? Explore technology, strengthen cybersecurity, build intelligent solutions, and turn crazy ideas into real-world projects.
I'm not saying I can hack the planet... but I can definitely spend six hours figuring out why a semicolon broke everything.
So, take a look around. Explore my projects, discover my work, and get to know the person behind the keyboard.
Just one warning: curiosity is contagious.
I AM NEWAZ NEZIF.
LESS TALK. MORE CODE. FEWER BUGS... WELL, WE'RE WORKING ON THAT.`;

    const playIntro = () => {
        if (isPlayingIntro) return;
        setIsPlayingIntro(true);

        let audioContext: AudioContext | null = null;
        let ambienceNodes: OscillatorNode[] = [];
        let ambienceGain: GainNode | null = null;

        const stopAmbience = () => {
            if (!audioContext || !ambienceGain) return;
            try {
                const now = audioContext.currentTime;
                ambienceGain.gain.cancelScheduledValues(now);
                ambienceGain.gain.setTargetAtTime(0.0001, now, 0.12);
                ambienceNodes.forEach((node) => {
                    try { node.stop(now + 0.45); } catch { /* already stopped */ }
                });
                setTimeout(() => {
                    if (audioContext && audioContext.state !== "closed") void audioContext.close();
                }, 600);
            } catch {
                if (audioContext && audioContext.state !== "closed") void audioContext.close();
            }
        };

        // Quiet synthesized cyber ambience runs underneath the spoken intro.
        try {
            audioContext = new AudioContext();
            const filter = audioContext.createBiquadFilter();
            ambienceGain = audioContext.createGain();
            filter.type = "lowpass";
            filter.frequency.value = 260;
            ambienceGain.gain.setValueAtTime(0.0001, audioContext.currentTime);
            ambienceGain.gain.linearRampToValueAtTime(0.025, audioContext.currentTime + 0.35);
            filter.connect(ambienceGain);
            ambienceGain.connect(audioContext.destination);

            [48, 96, 144].forEach((frequency, index) => {
                const oscillator = audioContext!.createOscillator();
                const voiceGain = audioContext!.createGain();
                oscillator.type = index === 1 ? "square" : "sawtooth";
                oscillator.frequency.value = frequency;
                voiceGain.gain.value = index === 0 ? 0.18 : 0.055;
                oscillator.connect(voiceGain);
                voiceGain.connect(filter);
                oscillator.start();
                ambienceNodes.push(oscillator);
            });

            // A brief digital glitch accent at the beginning of the transmission.
            const glitchOscillator = audioContext.createOscillator();
            const glitchGain = audioContext.createGain();
            glitchOscillator.type = "square";
            glitchOscillator.frequency.setValueAtTime(980, audioContext.currentTime);
            glitchOscillator.frequency.exponentialRampToValueAtTime(170, audioContext.currentTime + 0.22);
            glitchGain.gain.setValueAtTime(0.0001, audioContext.currentTime);
            glitchGain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.025);
            glitchGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.28);
            glitchOscillator.connect(glitchGain);
            glitchGain.connect(audioContext.destination);
            glitchOscillator.start();
            glitchOscillator.stop(audioContext.currentTime + 0.3);
        } catch {
            audioContext = null;
        }

        const finishIntro = () => {
            stopAmbience();
            setIsPlayingIntro(false);
        };

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const line = new SpeechSynthesisUtterance(introScript);
            line.lang = "en-US";
            line.rate = 0.92;
            line.pitch = 0.82;
            line.volume = 1;
            const englishVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith("en"));
            if (englishVoice) line.voice = englishVoice;
            line.onend = finishIntro;
            line.onerror = finishIntro;
            window.speechSynthesis.speak(line);
        } else {
            setTimeout(finishIntro, 2000);
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
                        {isPlayingIntro && (
                            <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.985 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className="mb-7 max-w-2xl overflow-hidden rounded-xl border border-primary/30 bg-[#02090d]/95 shadow-[0_0_35px_rgba(0,220,255,0.09)]"
                                role="status"
                                aria-live="polite"
                            >
                                <div className="flex items-center justify-between gap-3 border-b border-primary/20 bg-primary/[0.07] px-4 py-2.5">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-red-400" />
                                        <span className="h-2 w-2 rounded-full bg-yellow-400" />
                                        <span className="h-2 w-2 rounded-full bg-green-400" />
                                        <span className="ml-2 font-mono text-[10px] tracking-[0.14em] text-primary">NEWAZ@ROOT:~ / INTRO_SEQUENCE</span>
                                    </div>
                                    <span className="font-mono text-[9px] tracking-widest text-cyan-300 animate-pulse">LIVE</span>
                                </div>
                                <div className="max-h-48 overflow-y-auto px-4 py-3 font-mono text-[11px] leading-relaxed text-cyan-100/80 whitespace-pre-line">
                                    <span className="text-primary">{">"} transmission.init()</span>{"\n"}
                                    {introScript}
                                    <span className="ml-1 inline-block h-3 w-1 animate-pulse bg-primary align-middle" />
                                </div>
                            </motion.div>
                        )}
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
