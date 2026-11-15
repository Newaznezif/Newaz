"use client";

import { PROJECTS } from "@/constants";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const Projects = () => {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {PROJECTS.map((project, idx) => (
                <Card key={project.title} className="cyber-3d-card flex flex-col h-full">
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between gap-3 mb-4">
                            <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-primary">{project.category}</span>
                            <span className="font-mono text-xs text-white/30">0{idx + 1}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-text-secondary text-sm mb-5 flex-1 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.tech.map((t) => (
                                <span key={t} className="text-[10px] font-semibold tracking-wide text-white/70 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-5 pt-4 border-t border-white/10">
                            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-primary transition-colors">
                                <Github size={15} /> Source
                            </a>
                            <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-primary transition-colors ml-auto">
                                {project.link.includes("github.com") ? "Project details" : "Live project"} <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};