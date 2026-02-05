"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Bug, Terminal, Zap } from "lucide-react";

export default function TestPage() {
    const tests = [
        { name: "Unit Tests", status: "PASS", coverage: "94%", duration: "1.2s" },
        { name: "Integration Tests", status: "PASS", coverage: "88%", duration: "4.5s" },
        { name: "E2E Tests", status: "PENDING", coverage: "N/A", duration: "N/A" },
        { name: "Security Audit", status: "PASS", coverage: "100%", duration: "12s" },
    ];

    return (
        <div className="container mx-auto max-w-7xl py-12 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="terminal-box p-8"
            >
                <div className="flex items-center gap-4 mb-8 text-primary">
                    <Bug className="w-8 h-8" />
                    <h1 className="text-3xl font-mono font-bold tracking-tighter">QUALITY_ASSURANCE.log</h1>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {tests.map((test, i) => (
                            <motion.div
                                key={test.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-4 border border-primary/20 bg-primary/5 rounded font-mono"
                            >
                                <div className="text-[10px] text-muted-foreground mb-1 uppercase tracking-widest">{test.name}</div>
                                <div className="flex items-baseline justify-between">
                                    <span className={`text-lg font-bold ${test.status === 'PASS' ? 'text-neon-green' : 'text-neon-yellow animate-pulse'}`}>
                                        {test.status}
                                    </span>
                                    <span className="text-xs text-muted-foreground">{test.duration}</span>
                                </div>
                                <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-primary transition-all duration-1000`}
                                        style={{ width: test.coverage === 'N/A' ? '0%' : test.coverage }}
                                    />
                                </div>
                                <div className="mt-1 text-[9px] text-right text-muted-foreground">COV: {test.coverage}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-black/40 rounded p-6 font-mono text-sm space-y-2 border border-primary/10">
                        <div className="flex gap-4 text-neon-green">
                            <span>[12:00:01]</span>
                            <span>RUNNING: jest --coverage</span>
                        </div>
                        <div className="flex gap-4 text-white/50 pl-8">
                            <span>→ Unit tests initialized...</span>
                            <span className="text-neon-green">[DONE]</span>
                        </div>
                        <div className="flex gap-4 text-white/50 pl-8">
                            <span>→ Integration mapping...</span>
                            <span className="text-neon-green">[DONE]</span>
                        </div>
                        <div className="flex gap-4 text-neon-yellow animate-pulse pl-8">
                            <span>→ Generating E2E report...</span>
                            <span>[PROCESSING]</span>
                        </div>
                        <div className="pt-4 border-t border-primary/5 mt-4">
                            <div className="flex items-center gap-2 text-primary">
                                <ShieldCheck className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-widest">Security Scan: CRITICAL_VULNERABILITIES = 0</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 pt-4">
                        <div className="flex items-center gap-2 text-xs">
                            <Zap className="w-3 h-3 text-neon-yellow" />
                            <span className="text-muted-foreground uppercase tracking-widest">Environment: TEST_STAGING_01</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <Terminal className="w-3 h-3 text-primary" />
                            <span className="text-muted-foreground uppercase tracking-widest">Kernel: v5.15.0-generic</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
