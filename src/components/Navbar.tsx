"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Shield, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            if (window.scrollY > 20) setMenuOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b",
            scrolled || menuOpen
                ? "bg-background/90 backdrop-blur-xl border-white/10 py-4"
                : "bg-transparent py-6 border-transparent"
        )}>
            <div className="container-mega flex justify-between items-center">
                <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/50 shadow-[0_0_10px_rgba(0,242,234,0.3)] group-hover:scale-110 transition-transform">
                        <img src="/Pro.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-[var(--color-text-main)] uppercase group-hover:text-glow transition-all">
                        NEWAZN
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-7 lg:gap-9">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.name} href={link.href} className="text-xs lg:text-sm font-bold text-text-secondary hover:text-primary transition-colors uppercase tracking-widest relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link href="#contact" className="btn-primary py-2 px-5 text-[11px]">Contact</Link>
                </div>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                    className="md:hidden p-2 border border-white/10 rounded-lg text-white hover:text-primary hover:border-primary/40 transition-colors"
                >
                    {menuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 border-b border-white/10 bg-background/95 backdrop-blur-xl px-6 py-5">
                    <div className="container-mega flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="py-3 text-sm font-semibold uppercase tracking-widest text-text-secondary hover:text-primary border-b border-white/5 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};