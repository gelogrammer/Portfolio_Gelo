"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { PipelineNav } from "@/components/pipeline/PipelineNav";

const Terminal = dynamic(
    () => import("@/components/terminal/Terminal").then((mod) => mod.Terminal),
    { ssr: false }
);

export function DevOpsLayout({ children }: { children: React.ReactNode }) {
    const [terminalOpen, setTerminalOpen] = useState(false);

    // Keyboard shortcut for terminal (Ctrl+`)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === "`") {
                e.preventDefault();
                setTerminalOpen((open) => !open);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground"
            >
                Skip to content
            </a>

            <PipelineNav />

            <div id="main-content" className="relative pt-16">
                {children}
            </div>

            <footer className="border-t border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Angelo John S. Calleja</p>
                    <nav aria-label="Footer" className="flex items-center gap-5">
                        <Link href="https://github.com/gelogrammer" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/angelo-john-calleja-81312a319/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                            LinkedIn
                        </Link>
                        <Link href="mailto:angelojohn0987@gmail.com" className="hover:text-foreground transition-colors">
                            Email
                        </Link>
                    </nav>
                </div>
            </footer>

            <Terminal isOpen={terminalOpen} onToggle={() => setTerminalOpen((open) => !open)} />

            {!terminalOpen && (
                <button
                    type="button"
                    onClick={() => setTerminalOpen(true)}
                    className="hidden md:flex fixed bottom-4 right-4 z-40 items-center gap-2 text-xs font-mono text-muted-foreground bg-card/90 backdrop-blur-sm px-3 py-2 rounded-md border border-border hover:text-foreground hover:border-primary/40 transition-colors"
                >
                    <span className="text-primary">&gt;_</span>
                    terminal
                    <kbd className="px-1.5 py-0.5 bg-secondary rounded text-[11px]">Ctrl</kbd>
                    <kbd className="px-1.5 py-0.5 bg-secondary rounded text-[11px]">`</kbd>
                </button>
            )}
        </>
    );
}
