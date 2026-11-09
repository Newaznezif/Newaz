"use client";

import { PERSONAL_INFO } from "@/constants";
import { Mail, Linkedin, Github, ArrowUpRight, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const Contact = () => {
    const subject = encodeURIComponent("Professional inquiry");
    const body = encodeURIComponent("Hello Newaz,\n\nI would like to connect with you regarding...");
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    return (
        <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
                <Card className="p-8 sm:p-10 h-full">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary mb-5">Start a conversation</p>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-5">Let&apos;s build something useful.</h3>
                    <p className="text-text-secondary leading-relaxed max-w-xl mb-8">
                        I am open to professional opportunities, cybersecurity collaboration, applied AI projects, and conversations about technology with practical impact.
                    </p>
                    <a href={mailto} className="btn-primary inline-flex items-center gap-3">
                        Email me <ArrowUpRight size={17} />
                    </a>
                </Card>
            </div>

            <div className="lg:col-span-2 space-y-4">
                <Card className="p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><Mail size={19} /></div>
                    <div className="min-w-0">
                        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest block mb-1">Email</span>
                        <a href={mailto} className="text-white text-sm font-medium hover:text-primary break-all">{PERSONAL_INFO.email}</a>
                    </div>
                </Card>
                <Card className="p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><MapPin size={19} /></div>
                    <div>
                        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest block mb-1">Location</span>
                        <p className="text-white text-sm font-medium">{PERSONAL_INFO.location}</p>
                    </div>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="border border-white/10 bg-white/[0.03] hover:border-primary/40 p-4 rounded-lg flex items-center justify-center gap-2 text-sm text-white transition-colors">
                        <Linkedin size={17} /> LinkedIn
                    </a>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="border border-white/10 bg-white/[0.03] hover:border-primary/40 p-4 rounded-lg flex items-center justify-center gap-2 text-sm text-white transition-colors">
                        <Github size={17} /> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};