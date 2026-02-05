"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { PipelineNav } from "@/components/pipeline/PipelineNav";
import { MatrixRain } from "@/components/effects/MatrixRain";
import { BootSequence } from "@/components/effects/BootSequence";

const Terminal = dynamic(
    () => import("@/components/terminal/Terminal").then((mod) => mod.Terminal),
    { ssr: false }
);

export function DevOpsLayout({ children }: { children: React.ReactNode }) {
    const [terminalOpen, setTerminalOpen] = useState(false);
    const [showBoot, setShowBoot] = useState(true);
    const [bootComplete, setBootComplete] = useState(false);

    // Check if boot sequence has been shown before
    useEffect(() => {
        const hasBooted = sessionStorage.getItem("portfolio-booted");
        if (hasBooted) {
            setShowBoot(false);
            setBootComplete(true);
        }
    }, []);

    const handleBootComplete = () => {
        setBootComplete(true);
        sessionStorage.setItem("portfolio-booted", "true");
    };

    // Keyboard shortcut for terminal (Ctrl+`)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === "`") {
                e.preventDefault();
                setTerminalOpen(!terminalOpen);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [terminalOpen]);

    return (
        <>
            {/* Boot Sequence */}
            {showBoot && !bootComplete && (
                <BootSequence onComplete={handleBootComplete} />
            )}

            {/* Matrix Rain Background */}
            {bootComplete && <MatrixRain />}

            {/* Scan Lines Effect */}
            {bootComplete && <div className="scanlines fixed inset-0 pointer-events-none z-40" />}

            {/* Pipeline Navigation */}
            {bootComplete && <PipelineNav />}

            {/* Main Content */}
            {bootComplete && (
                <main className="relative z-10 pt-20">
                    {children}
                </main>
            )}

            {/* Terminal Overlay */}
            {bootComplete && (
                <Terminal isOpen={terminalOpen} onToggle={() => setTerminalOpen(!terminalOpen)} />
            )}

            {/* Terminal Hint */}
            {bootComplete && !terminalOpen && (
                <div className="fixed bottom-4 left-4 z-40 text-xs font-mono text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-2 rounded border border-primary/20">
                    Press <kbd className="px-1 py-0.5 bg-primary/20 rounded">Ctrl</kbd> +{" "}
                    <kbd className="px-1 py-0.5 bg-primary/20 rounded">`</kbd> to open terminal
                </div>
            )}
        </>
    );
}
