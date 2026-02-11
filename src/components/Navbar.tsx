"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-xl border-white/10 py-4"
                    : "bg-transparent py-6 border-transparent"
            )}
        >
            <div className="container-mega flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/50 shadow-[0_0_10px_rgba(0,242,234,0.3)] group-hover:scale-110 transition-transform">
                        <img src="/Pro.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-[var(--color-text-main)] uppercase group-hover:text-glow transition-all">
                        NEWAZN
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-text-secondary hover:text-primary transition-colors uppercase tracking-widest relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="btn-primary py-2 px-6 text-[11px]"
                    >
                        Inquire
                    </Link>
                </div>
            </div>
        </nav>
    );
};
