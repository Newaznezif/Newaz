"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/constants";
import { Github, Linkedin, Mail, Phone, Shield } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm pt-12 pb-6">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Shield className="w-8 h-8 text-primary" />
                            <span className="text-xl font-heading font-bold tracking-tighter text-[var(--color-text-main)]">
                                NEWAZN
                            </span>
                        </div>
                        <p className="text-muted/70 text-sm leading-relaxed mb-6">
                            Securing digital infrastructure and building intelligent systems for a safer future.
                        </p>
                        <div className="flex gap-4">
                            <a href={PERSONAL_INFO.github} className="p-2 rounded-lg bg-white/5 border border-border hover:border-primary/50 transition-colors text-muted hover:text-primary">
                                <Github size={18} />
                            </a>
                            <a href={PERSONAL_INFO.linkedin} className="p-2 rounded-lg bg-white/5 border border-border hover:border-primary/50 transition-colors text-muted hover:text-primary">
                                <Linkedin size={18} />
                            </a>
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 rounded-lg bg-white/5 border border-border hover:border-primary/50 transition-colors text-muted hover:text-primary">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2 lg:pl-24">
                        <div>
                            <h4 className="text-[var(--color-text-main)] font-bold mb-6">Explore</h4>
                            <ul className="space-y-3 text-sm text-muted/70">
                                <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
                                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[var(--color-text-main)] font-bold mb-6">Support</h4>
                            <ul className="space-y-3 text-sm text-muted/70">
                                <li><a href="#contact" className="hover:text-primary transition-colors">Get in Touch</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Download CV</a></li>
                                <li className="flex items-center gap-2">
                                    <Phone size={14} className="text-primary" />
                                    {PERSONAL_INFO.phone}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted/50">
                        © {new Date().getFullYear()} Newaz Nezif Abagero. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-muted/50">
                        <span>Built with Next.js & Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
