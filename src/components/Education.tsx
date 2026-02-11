"use client";

import { GraduationCap, Award, HeartHandshake } from "lucide-react";
import { EDUCATION, AWARDS, VOLUNTEERING } from "@/constants";
import { Card } from "@/components/ui/Card";

export const EducationAndAwards = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                    <GraduationCap className="text-primary" /> Education
                </h3>
                {EDUCATION.map((edu, idx) => (
                    <Card key={idx} className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                                <p className="text-primary font-medium">{edu.school}</p>
                            </div>
                            <span className="text-sm font-mono text-text-secondary">{edu.period}</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5">
                            <p className="text-sm text-text-secondary leading-relaxed font-medium">
                                {edu.details}
                            </p>
                        </div>
                    </Card>
                ))}

                <h3 className="text-xl font-bold flex items-center gap-3 text-white pt-4">
                    <Award className="text-primary" /> Awards & Recognitions
                </h3>
                <div className="grid gap-4">
                    {AWARDS.map((award, idx) => (
                        <Card key={idx} className="p-6">
                            <h5 className="font-bold text-white mb-1">{award.title}</h5>
                            <div className="flex justify-between items-center text-xs mb-2">
                                <span className="text-primary uppercase tracking-wider font-bold">{award.organization}</span>
                                <span className="text-text-secondary font-mono">{award.year}</span>
                            </div>
                            <p className="text-sm text-text-secondary">{award.description}</p>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                    <HeartHandshake className="text-primary" /> Volunteering
                </h3>
                <div className="grid gap-4">
                    {VOLUNTEERING.map((vol, idx) => (
                        <Card key={idx} className="p-6 flex items-start gap-4">
                            <div className="mt-1 w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <div>
                                <h5 className="font-bold text-white mb-1">{vol.role}</h5>
                                <p className="text-sm text-primary mb-1">{vol.event}</p>
                                <span className="text-xs font-mono text-text-secondary">{vol.year}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
