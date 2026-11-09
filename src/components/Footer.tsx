import { PERSONAL_INFO } from "@/constants";
import { Github, Linkedin, Mail, Shield } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t border-border/50 bg-background/70 pt-10 pb-6">
            <div className="container-mega">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
                    <div className="max-w-md">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-7 h-7 text-primary" />
                            <span className="text-lg font-heading font-bold tracking-tight text-white">NEWAZ NEZIF</span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Cybersecurity analyst exploring the intersection of digital defense, software engineering, and applied AI.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <a aria-label="GitHub" href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 text-text-secondary hover:text-primary transition-colors"><Github size={18} /></a>
                        <a aria-label="LinkedIn" href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 text-text-secondary hover:text-primary transition-colors"><Linkedin size={18} /></a>
                        <a aria-label="Email" href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 text-text-secondary hover:text-primary transition-colors"><Mail size={18} /></a>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-text-secondary/60">© {new Date().getFullYear()} Newaz Nezif Abagero. All rights reserved.</p>
                    <a href="#top" className="text-xs text-text-secondary hover:text-primary transition-colors">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
};