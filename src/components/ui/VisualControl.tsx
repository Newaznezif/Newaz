"use client";

import { useState, useEffect } from "react";
import { Settings, X, Sun, Moon, Contrast, Palette, RefreshCcw, ToggleLeft, ToggleRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = [
    { name: "Cyan", color: "#00f2ea" },
    { name: "Green", color: "#22c55e" },
    { name: "Purple", color: "#a855f7" },
    { name: "Red", color: "#ef4444" },
    { name: "Blue", color: "#3b82f6" },
];

export const VisualControl = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [grayscale, setGrayscale] = useState(0);
    const [themeColor, setThemeColor] = useState(THEMES[0].color);
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        // Apply filters to the document root
        const filterString = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%)`;
        document.documentElement.style.filter = filterString;

        // Apply theme color
        document.documentElement.style.setProperty('--color-primary', themeColor);

        // Apply Light/Dark Mode
        if (isLightMode) {
            document.documentElement.style.setProperty('--color-background', '#ffffff');
            document.documentElement.style.setProperty('--color-text-main', '#0f172a');
            document.documentElement.style.setProperty('--color-text-secondary', '#475569');
            document.documentElement.style.setProperty('--color-border', '#e2e8f0');
        } else {
            document.documentElement.style.setProperty('--color-background', '#050505');
            document.documentElement.style.setProperty('--color-text-main', '#F9FAFB');
            document.documentElement.style.setProperty('--color-text-secondary', '#94a3b8');
            document.documentElement.style.setProperty('--color-border', '#1e293b');
        }

    }, [brightness, contrast, grayscale, themeColor, isLightMode]);

    const resetDefaults = () => {
        setBrightness(100);
        setContrast(100);
        setGrayscale(0);
        setThemeColor(THEMES[0].color);
        setIsLightMode(false);
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 hover:text-primary transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
            >
                <Settings size={24} />
            </motion.button>

            {/* Control Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -100, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -100, scale: 0.9 }}
                        className="fixed bottom-20 left-6 z-50 w-72 bg-black/80 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                <Palette size={16} /> Visual Control
                            </h3>
                            <div className="flex gap-2">
                                <button
                                    onClick={resetDefaults}
                                    className="p-1 hover:text-primary text-text-secondary transition-colors"
                                    title="Reset Defaults"
                                >
                                    <RefreshCcw size={16} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:text-red-500 text-text-secondary transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Mode Toggle */}
                        <div className="mb-6 bg-white/5 p-3 rounded-lg flex justify-between items-center">
                            <span className="text-xs text-text-secondary uppercase tracking-widest font-semibold flex items-center gap-2">
                                {isLightMode ? <Sun size={14} /> : <Moon size={14} />}
                                {isLightMode ? "Light Mode" : "Dark Mode"}
                            </span>
                            <button
                                onClick={() => setIsLightMode(!isLightMode)}
                                className={`text-primary transition-all duration-300 ${isLightMode ? 'rotate-0' : 'rotate-180'}`}
                            >
                                {isLightMode ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                            </button>
                        </div>

                        {/* Theme Colors */}
                        <div className="mb-6">
                            <label className="text-xs text-text-secondary uppercase tracking-widest font-semibold mb-3 block">
                                Theme Color
                            </label>
                            <div className="flex gap-2 bg-white/5 p-2 rounded-lg justify-between">
                                {THEMES.map((t) => (
                                    <button
                                        key={t.name}
                                        onClick={() => setThemeColor(t.color)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${themeColor === t.color ? 'border-white scale-110 shadow-[0_0_10px_white]' : 'border-transparent hover:scale-110'}`}
                                        style={{ backgroundColor: t.color }}
                                        title={t.name}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sliders */}
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <label className="text-text-secondary flex items-center gap-2">
                                        <Sun size={12} /> Brightness
                                    </label>
                                    <span className="text-primary font-mono">{brightness}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="20"
                                    max="150"
                                    value={brightness}
                                    onChange={(e) => setBrightness(Number(e.target.value))}
                                    className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <label className="text-text-secondary flex items-center gap-2">
                                        <Contrast size={12} /> Contrast
                                    </label>
                                    <span className="text-primary font-mono">{contrast}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="50"
                                    max="150"
                                    value={contrast}
                                    onChange={(e) => setContrast(Number(e.target.value))}
                                    className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <label className="text-text-secondary flex items-center gap-2">
                                        <Moon size={12} /> Saturation / BW
                                    </label>
                                    <span className="text-primary font-mono">{grayscale}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={grayscale}
                                    onChange={(e) => setGrayscale(Number(e.target.value))}
                                    className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-[10px] text-white/20 mt-1">
                                    <span>Color</span>
                                    <span>B&W</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
