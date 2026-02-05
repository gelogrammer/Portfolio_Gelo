"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitBranch, Package, CheckCircle, Rocket, Activity, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface PipelineStage {
    name: string;
    path: string;
    icon: React.ElementType;
    status: "success" | "building" | "pending" | "healthy";
}

const pipelineStages: PipelineStage[] = [
    { name: "SOURCE", path: "/", icon: GitBranch, status: "success" },
    { name: "BUILD", path: "/projects", icon: Package, status: "success" },
    { name: "TEST", path: "/test", icon: CheckCircle, status: "success" },
    { name: "DEPLOY", path: "/deploy", icon: Rocket, status: "pending" },
    { name: "MONITOR", path: "/monitor", icon: Activity, status: "healthy" },
];

const statusColors = {
    success: "text-neon-green border-neon-green",
    building: "text-neon-yellow border-neon-yellow animate-pulse",
    pending: "text-muted-foreground border-muted-foreground",
    healthy: "text-neon-cyan border-neon-cyan",
};

const statusDots = {
    success: "bg-neon-green",
    building: "bg-neon-yellow animate-pulse",
    pending: "bg-muted-foreground",
    healthy: "bg-neon-cyan",
};

export function PipelineNav() {
    const pathname = usePathname();

    return (
        <nav className="glass-nav fixed top-0 left-0 right-0 z-40 border-b border-primary/20 bg-background/95 backdrop-blur-md">
            <div className="max-w-[1400px] mx-auto px-6 py-2">
                <div className="flex items-center justify-between gap-8">
                    {/* Branding / Industrial Logo */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="w-9 h-9 rounded-sm border-2 border-primary/50 flex items-center justify-center bg-primary/10 group-hover:neon-border transition-all shadow-[0_0_15px_rgba(0,255,65,0.1)]">
                            <span className="text-primary font-mono font-bold text-sm tracking-tighter">AJ</span>
                        </div>
                        <div className="hidden lg:flex flex-col justify-center">
                            <span className="text-xs font-mono font-black text-foreground tracking-[0.2em] leading-none">AJSC_INFRA</span>
                            <span className="text-[9px] font-mono text-neon-green/80 mt-1 flex items-center gap-1">
                                <Zap className="w-2 h-2" /> SYSTEM_V2.6.0
                            </span>
                        </div>
                    </Link>

                    {/* Pipeline Navigation / Industrial Buttons */}
                    <div className="flex items-center gap-0 overflow-x-auto no-scrollbar py-1">
                        {pipelineStages.map((stage, index) => {
                            const isActive = pathname === stage.path;
                            const Icon = stage.icon;
                            const statusColor = statusColors[stage.status];
                            const dotColor = statusDots[stage.status];

                            return (
                                <div key={stage.name} className="flex items-center">
                                    <Link href={stage.path}>
                                        <motion.div
                                            className={`
                                                relative flex flex-col items-center gap-1.5 px-5 py-2.5 rounded-lg
                                                border-2 transition-all duration-300 min-w-[110px] cursor-pointer
                                                shadow-[0_6px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl
                                                ${isActive
                                                    ? `${statusColor} bg-primary/25 neon-border border-primary ring-2 ring-primary/20`
                                                    : `border-white/10 bg-white/5 hover:border-primary/50 hover:bg-white/10 text-muted-foreground hover:text-foreground shadow-none`
                                                }
                                            `}
                                            whileHover={{ scale: 1.08, y: -4 }}
                                            whileTap={{ scale: 0.96, y: 0 }}
                                        >
                                            {/* Status LED - More pronounced */}
                                            <div className="absolute top-1.5 right-1.5 flex gap-0.5">
                                                <div className={`w-2 h-2 rounded-full ${dotColor} shadow-[0_0_10px_rgba(0,0,0,0.9)] ring-1 ring-white/30`} />
                                            </div>

                                            {/* Tactical Icon */}
                                            <Icon className={`w-5 h-5 drop-shadow-[0_0_8px_rgba(0,0,0,1)] ${isActive ? statusColor : "opacity-40"}`} />

                                            {/* Stage Name - Stronger font */}
                                            <span className={`text-[11px] font-mono font-black tracking-widest leading-none uppercase ${isActive ? "text-white" : "opacity-40"}`}>
                                                {stage.name}
                                            </span>

                                            {/* Tactical Status Label */}
                                            <span className={`text-[8px] font-mono opacity-50 uppercase tracking-tighter ${isActive ? "text-white/80" : "hidden"}`}>
                                                {stage.status}
                                            </span>

                                            {/* Active Marker Block */}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute -bottom-1 left-2 right-2 h-[4px] bg-primary rounded-full shadow-[0_0_15px_var(--neon-green)]"
                                                    layoutId="activeSegment"
                                                />
                                            )}
                                        </motion.div>
                                    </Link>

                                    {/* Pipeline Interface Connector */}
                                    {index < pipelineStages.length - 1 && (
                                        <div className="hidden md:flex relative items-center px-1">
                                            {/* Conduit Line */}
                                            <div className="w-10 h-[3px] bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 rounded-full" />

                                            {/* Data Pulse */}
                                            <motion.div
                                                className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_var(--neon-green)]"
                                                animate={{
                                                    x: [0, 36, 36, 0],
                                                    opacity: [0, 1, 1, 0],
                                                    scale: [0.4, 1.3, 1.3, 0.4],
                                                }}
                                                transition={{
                                                    duration: 1.8,
                                                    repeat: Infinity,
                                                    delay: index * 0.4,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* System Diagnostics / Telemetry */}
                    <div className="hidden sm:flex items-center gap-8 shrink-0 font-mono">
                        <div className="flex flex-col items-end border-r border-primary/20 pr-6">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-muted-foreground tracking-tighter uppercase">Status:</span>
                                <span className="text-[10px] text-neon-green font-bold animate-pulse flex items-center gap-1">
                                    <ShieldCheck className="w-2.5 h-2.5" /> SECURE
                                </span>
                            </div>
                            <div className="text-[9px] text-muted-foreground/40 tabular-nums">
                                NODES: ONLINE [4/4]
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="text-[10px] text-primary font-bold tracking-tighter uppercase whitespace-nowrap">
                                0.0.0.0
                            </div>
                            <div className="text-[9px] text-muted-foreground/40 tabular-nums">
                                PORT: 3000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
