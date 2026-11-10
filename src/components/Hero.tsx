"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Volume2 } from "lucide-react";
import { PERSONAL_INFO } from "@/constants";

export const Hero = () => {
    const reduceMotion = useReducedMotion();
    const [isPlayingIntro, setIsPlayingIntro] = useState(false);
    const [maskActive, setMaskActive] = useState(false);
    const entrance = reduceMotion
        ? {}
        : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45, ease: "easeOut" as const } };

    const introScript = `System online. Identity confirmed. I am Newaz Nezif — cybersecurity analyst, AI enthusiast, and professionally curious human. Welcome to my digital domain.`;

    const stopIntro = () => {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        setIsPlayingIntro(false);
    };

    const playIntro = () => {
        if (isPlayingIntro || !("speechSynthesis" in window)) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(introScript);
        utterance.lang = "en-US";
        utterance.rate = 0.88;
        utterance.pitch = 0.68;
        utterance.volume = 1;
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find((voice) => /david|mark|guy|google us english|daniel/i.test(voice.name) && voice.lang.toLowerCase().startsWith("en"))
            || voices.find((voice) => voice.lang.toLowerCase().startsWith("en"));
        if (preferredVoice) utterance.voice = preferredVoice;
        utterance.onend = () => setIsPlayingIntro(false);
        utterance.onerror = () => setIsPlayingIntro(false);
        setIsPlayingIntro(true);
        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        return () => {
            if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        };
    }, []);

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
                            <button
                                type="button"
                                aria-label={maskActive ? "Show normal profile portrait" : "Activate hacker mask portrait"}
                                aria-pressed={maskActive}
                                onMouseEnter={() => { setMaskActive(true); playIntro(); }}
                                onMouseLeave={() => { setMaskActive(false); stopIntro(); }}
                                onFocus={() => { setMaskActive(true); playIntro(); }}
                                onBlur={() => { setMaskActive(false); stopIntro(); }}
                                onClick={() => { setMaskActive((active) => { const next = !active; if (next) playIntro(); else stopIntro(); return next; }); }}
                                className="group relative block w-full aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left shadow-[0_25px_90px_rgba(0,0,0,0.45)] outline-none transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-[0_0_45px_rgba(0,242,234,0.18)] focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <img src="/Pro.png" alt="Portrait of Newaz Nezif Abagero" className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
                                <svg viewBox="0 0 360 420" aria-hidden="true" className={"pointer-events-none absolute left-1/2 top-[9%] w-[88%] -translate-x-1/2 transition-all duration-300 " + (maskActive ? "scale-100 opacity-100" : "scale-90 opacity-0")}>
                                    <defs>
                                        <linearGradient id="hacker-mask-metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f5ffff" /><stop offset="30%" stopColor="#9eb9bd" /><stop offset="65%" stopColor="#526a70" /><stop offset="100%" stopColor="#182b31" /></linearGradient>
                                        <linearGradient id="hacker-mask-dark" x1="0" y1="0" x2="0.9" y2="1"><stop offset="0%" stopColor="#162b31" /><stop offset="100%" stopColor="#02080b" /></linearGradient>
                                        <filter id="hacker-mask-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                    </defs>
                                    {/* Full-face armored shell */}
                                    <path d="M180 8 C105 8 48 45 38 112 L48 250 C54 326 106 387 180 408 C254 387 306 326 312 250 L322 112 C312 45 255 8 180 8Z" fill="url(#hacker-mask-metal)" stroke="#00f2ea" strokeWidth="4" filter="url(#hacker-mask-glow)" />
                                    {/* Temple armor and cheek plates */}
                                    <path d="M42 116 L12 94 L20 222 L56 270 L67 174Z M318 116 L348 94 L340 222 L304 270 L293 174Z" fill="url(#hacker-mask-dark)" stroke="#00f2ea" strokeWidth="3" />
                                    <path d="M54 238 L112 265 L94 330 L67 288Z M306 238 L248 265 L266 330 L293 288Z" fill="#263b40" stroke="#718d92" strokeWidth="2" />
                                    {/* Forehead segmented armor */}
                                    <path d="M72 76 L180 30 L288 76 L265 112 L180 91 L95 112Z" fill="#263d43" stroke="#829da1" strokeWidth="2" />
                                    <path d="M180 34 L180 88 M105 81 L142 96 M255 81 L218 96" stroke="#00f2ea" strokeOpacity=".75" strokeWidth="3" />
                                    {/* Single continuous optical visor */}
                                    <path d="M62 137 L128 116 L169 129 L180 145 L191 129 L232 116 L298 137 L282 203 L225 222 L180 203 L135 222 L78 203Z" fill="#02090d" stroke="#6c858a" strokeWidth="4" />
                                    <path d="M77 151 L133 134 L164 145 L151 185 L100 194Z M283 151 L227 134 L196 145 L209 185 L260 194Z" fill="#061b20" stroke="#00f2ea" strokeWidth="2.5" />
                                    <path d="M89 163 L139 149 L127 176 L101 183Z M271 163 L221 149 L233 176 L259 183Z" fill="#00eaff" fillOpacity=".16" />
                                    <path d="M90 162 L145 148 M270 162 L215 148" stroke="#bafaff" strokeWidth="3" strokeLinecap="round" />
                                    {/* Reinforced nose bridge */}
                                    <path d="M166 133 L180 118 L194 133 L202 238 L180 263 L158 238Z" fill="url(#hacker-mask-dark)" stroke="#9ab2b6" strokeWidth="3" />
                                    <path d="M180 145 L180 236 M165 224 L180 242 L195 224" stroke="#00f2ea" strokeOpacity=".8" strokeWidth="3" fill="none" />
                                    {/* Full lower-face respirator / jaw guard */}
                                    <g className={isPlayingIntro ? "mask-jaw-talking" : "mask-jaw-idle"}>
                                        <path d="M91 224 L145 241 L180 263 L215 241 L269 224 L257 314 C239 352 211 370 180 379 C149 370 121 352 103 314Z" fill="url(#hacker-mask-dark)" stroke="#8ba5aa" strokeWidth="4" />
                                        <path d="M113 269 L247 269 L236 322 L180 350 L124 322Z" fill="#0b2025" stroke="#00f2ea" strokeWidth="2.5" />
                                        <path d="M132 282 L228 282 M126 296 L234 296 M132 310 L228 310 M146 324 L214 324" stroke="#8da8ad" strokeWidth="5" strokeLinecap="round" />
                                        <path d="M154 342 L180 354 L206 342" stroke="#00f2ea" strokeWidth="3" fill="none" />
                                    </g>
                                    {/* Mechanical fasteners and cyan status lights */}
                                    <circle cx="63" cy="225" r="6" fill="#00f2ea" /><circle cx="297" cy="225" r="6" fill="#00f2ea" />
                                    <circle cx="91" cy="104" r="4" fill="#d8ffff" /><circle cx="269" cy="104" r="4" fill="#d8ffff" />
                                </svg>
                                <span className={"pointer-events-none absolute right-4 top-4 rounded border border-primary/50 bg-black/70 px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-primary transition-opacity " + (maskActive ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>{isPlayingIntro ? "VOICE_LINK // ACTIVE" : "MASK_PROTOCOL // ACTIVE"}</span>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="font-mono text-xs text-primary tracking-[0.16em] uppercase mb-2">Information Systems</p>
                                    <p className="text-white text-xl font-semibold">Security-minded. Impact-driven.</p>
                                    <p className={"mt-2 font-mono text-[9px] tracking-widest text-primary transition-opacity " + (maskActive ? "opacity-100" : "opacity-0")}>[ HOVER TO UNMASK / CLICK TO TOGGLE ]</p>
                                </div>
                            </button>
                            <div className="absolute -bottom-7 -left-5 glass-panel px-4 py-3 rounded-xl hidden sm:block" aria-hidden="true" />
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
