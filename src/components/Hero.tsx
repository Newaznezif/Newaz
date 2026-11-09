"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/constants";

export const Hero = () => {
    const reduceMotion = useReducedMotion();
    const entrance = reduceMotion
        ? {}
        : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45, ease: "easeOut" as const } };

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
                        <p className="font-mono text-sm text-text-secondary tracking-[0.18em] uppercase mb-4">Hello, I&apos;m</p>
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
