"use client";

import { PERSONAL_INFO } from "@/constants";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const Contact = () => {
    return (
        <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-8">
                <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white">Let&apos;s Secure the Future</h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                        Open for opportunities in SOC Operations, Threat Intelligence, and Secure AI Development.
                    </p>
                </div>

                <div className="space-y-4">
                    <Card className="p-4 flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Mail size={20} />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider block mb-1">Email</span>
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-primary transition-colors font-medium">
                                {PERSONAL_INFO.email}
                            </a>
                        </div>
                    </Card>

                    <Card className="p-4 flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Phone size={20} />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider block mb-1">Phone</span>
                            <span className="text-white font-medium">
                                {PERSONAL_INFO.phone}
                            </span>
                        </div>
                    </Card>

                    <div className="flex gap-4 pt-4">
                        <a href={PERSONAL_INFO.linkedin} className="px-6 py-3 bg-white/5 border border-white/10 rounded flex items-center gap-2 text-white hover:bg-primary hover:text-black transition-all font-bold uppercase text-xs tracking-widest">
                            <Linkedin size={16} /> LinkedIn
                        </a>
                        <a href={PERSONAL_INFO.github} className="px-6 py-3 bg-white/5 border border-white/10 rounded flex items-center gap-2 text-white hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-widest">
                            <Github size={16} /> GitHub
                        </a>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-3">
                <Card className="p-8">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 focus:border-primary/50 outline-none transition-colors text-white font-medium placeholder:text-white/20"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 focus:border-primary/50 outline-none transition-colors text-white font-medium placeholder:text-white/20"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Message</label>
                            <textarea
                                rows={5}
                                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 focus:border-primary/50 outline-none transition-colors text-white font-medium placeholder:text-white/20 resize-none"
                                placeholder="Tell me about your project or security needs..."
                            />
                        </div>
                        <button className="btn-primary w-full flex items-center justify-center gap-2 group">
                            Send Transmission <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </Card>
            </div>
        </div>
    );
};
