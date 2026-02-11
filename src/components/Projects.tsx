"use client";

import { PROJECTS } from "@/constants";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const Projects = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
                <Card key={idx} className="flex flex-col h-full">
                    <div className="p-8 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t) => (
                                <span key={t} className="text-[10px] font-bold tracking-wider text-primary uppercase border border-primary/20 px-2 py-1">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-text-secondary text-sm mb-8 flex-1 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                            <a href={project.github} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-primary transition-colors">
                                <Github size={16} /> Source Code
                            </a>
                            <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-primary transition-colors ml-auto">
                                Live Demo <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};
