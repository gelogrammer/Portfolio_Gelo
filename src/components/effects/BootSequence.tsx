"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootMessages = [
    { text: "POST: Memory Test...", delay: 0, status: "OK" },
    { text: "POST: CPU Check...", delay: 300, status: "OK" },
    { text: "POST: GPU Check...", delay: 600, status: "OK" },
    { text: "POST: Storage Check...", delay: 900, status: "OK" },
    { text: "Loading Portfolio OS...", delay: 1200, status: "LOADING" },
    { text: "Initializing Frontend...", delay: 1500, status: "OK" },
    { text: "Initializing Backend...", delay: 1800, status: "OK" },
    { text: "Initializing DevOps...", delay: 2100, status: "OK" },
    { text: "System Ready!", delay: 2400, status: "SUCCESS" },
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < bootMessages.length) {
            const timer = setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
            }, bootMessages[currentIndex].delay + 200);

            return () => clearTimeout(timer);
        } else {
            const completeTimer = setTimeout(() => {
                setIsComplete(true);
                setTimeout(onComplete, 500);
            }, 500);

            return () => clearTimeout(completeTimer);
        }
    }, [currentIndex, onComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 z-50 bg-background flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full max-w-2xl px-8">
                        {/* BIOS Header */}
                        <div className="mb-8 border border-primary/30 p-4">
                            <div className="text-primary font-mono text-sm">
                                <div className="flex justify-between mb-2">
                                    <span>Portfolio BIOS v2.0.26</span>
                                    <span>Build: {new Date().toISOString().split('T')[0]}</span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Copyright (C) 2026 Angelo Calleja
                                </div>
                            </div>
                        </div>

                        {/* Boot Messages */}
                        <div className="space-y-2 font-mono text-sm">
                            {bootMessages.slice(0, currentIndex).map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center justify-between"
                                >
                                    <span className="text-foreground">{message.text}</span>
                                    <span
                                        className={`
                      ${message.status === "OK" ? "text-neon-green" : ""}
                      ${message.status === "LOADING" ? "text-neon-yellow animate-pulse" : ""}
                      ${message.status === "SUCCESS" ? "text-neon-cyan" : ""}
                    `}
                                    >
                                        [{message.status}]
                                    </span>
                                </motion.div>
                            ))}

                            {/* Blinking Cursor */}
                            {currentIndex < bootMessages.length && (
                                <motion.div
                                    className="inline-block w-2 h-4 bg-primary ml-1"
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                />
                            )}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-8 border border-primary/30 p-2">
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${(currentIndex / bootMessages.length) * 100}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <div className="text-xs text-center mt-2 text-muted-foreground font-mono">
                                {Math.round((currentIndex / bootMessages.length) * 100)}% Complete
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
