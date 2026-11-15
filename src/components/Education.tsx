"use client";

import { GraduationCap, Award, HeartHandshake } from "lucide-react";
import { EDUCATION, AWARDS, VOLUNTEERING } from "@/constants";
import { Card } from "@/components/ui/Card";

export const EducationAndAwards = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-5">
                <h3 className="text-lg font-bold flex items-center gap-3 text-white">
                    <GraduationCap className="text-primary" /> Education
                </h3>
                {EDUCATION.map((edu, idx) => (
                    <Card key={idx} className="cyber-3d-card p-5">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                                <p className="text-primary font-medium text-sm">{edu.school}</p>
                            </div>
                            <span className="text-xs font-mono text-text-secondary">{edu.period}</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/5">
                            <p className="text-sm text-text-secondary leading-relaxed font-medium">
                                {edu.details}
                            </p>
                        </div>
                    </Card>
                ))}

                <h3 className="text-lg font-bold flex items-center gap-3 text-white pt-2">
                    <Award className="text-primary" /> Awards & Recognitions
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                    {AWARDS.map((award, idx) => (
                        <Card key={idx} className="cyber-3d-card p-4">
                            <h5 className="font-bold text-white text-sm mb-1">{award.title}</h5>
                            <div className="flex flex-wrap justify-between items-center gap-1 text-[10px] mb-2">
                                <span className="text-primary uppercase tracking-wider font-bold">{award.organization}</span>
                                <span className="text-text-secondary font-mono">{award.year}</span>
                            </div>
                            <p className="text-xs text-text-secondary leading-relaxed">{award.description}</p>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="space-y-5">
                <h3 className="text-lg font-bold flex items-center gap-3 text-white">
                    <HeartHandshake className="text-primary" /> Volunteering
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                    {VOLUNTEERING.map((vol, idx) => (
                        <Card key={idx} className="cyber-3d-card p-4 flex items-start gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                            <div>
                                <h5 className="font-bold text-white text-sm mb-1">{vol.role}</h5>
                                <p className="text-xs text-primary mb-1">{vol.event}</p>
                                <span className="text-[10px] font-mono text-text-secondary">{vol.year}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};