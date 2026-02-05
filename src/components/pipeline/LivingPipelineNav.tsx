"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap,
    Cpu,
    Activity,
    CheckCircle2,
    Loader2,
    Terminal,
    Package,
    TestTube,
    Rocket,
    Radio,
} from "lucide-react";

interface PipelineStage {
    id: string;
    name: string;
    path: string;
    icon: React.ElementType;
    cliCommand: string[];
    order: number;
}

const stages: PipelineStage[] = [
    {
        id: "init",
        name: "INIT",
        path: "/",
        icon: Terminal,
        cliCommand: [
            "$ git clone repository...",
            "$ checking system requirements...",
            "$ initializing workspace...",
            "✓ environment ready",
        ],
        order: 0,
    },
    {
        id: "build",
        name: "BUILD",
        path: "/projects",
        icon: Package,
        cliCommand: [
            "$ npm install --production",
            "$ docker build -t app:latest .",
            "$ optimizing dependencies...",
            "✓ build successful [2.3s]",
        ],
        order: 1,
    },
    {
        id: "test",
        name: "TEST",
        path: "/test",
        icon: TestTube,
        cliCommand: [
            "$ jest --coverage",
            "$ running integration tests...",
            "$ 127 tests passed",
            "✓ all checks passed",
        ],
        order: 2,
    },
    {
        id: "deploy",
        name: "DEPLOY",
        path: "/deploy",
        icon: Rocket,
        cliCommand: [
            "$ kubectl apply -f deployment.yaml",
            "$ terraform plan -out=tfplan",
            "$ deploying to production...",
            "✓ deployment complete",
        ],
        order: 3,
    },
    {
        id: "monitor",
        name: "MONITOR",
        path: "/monitor",
        icon: Radio,
        cliCommand: [
            "$ prometheus --config.file=prom.yml",
            "$ grafana-server --homepath=/usr/share/grafana",
            "$ monitoring 47 services...",
            "✓ all systems nominal",
        ],
        order: 4,
    },
];

export function LivingPipelineNav() {
    const pathname = usePathname();
    const [hoveredStage, setHoveredStage] = useState<string | null>(null);
    const [cpuLoad, setCpuLoad] = useState(23);
    const [uptime, setUptime] = useState(99.9);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [dataPackets, setDataPackets] = useState<{ id: string; from: number; to: number }[]>([]);

    // Find current and previous stage
    const currentStageIndex = stages.findIndex((s) => s.path === pathname);
    const currentStage = stages[currentStageIndex];

    // Simulate CPU load based on mouse activity
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            const speed = Math.abs(e.movementX) + Math.abs(e.movementY);
            setCpuLoad((prev) => Math.min(95, Math.max(15, prev + speed * 0.5 - 2)));
        };

        window.addEventListener("mousemove", handleMouseMove);

        // CPU decay
        const interval = setInterval(() => {
            setCpuLoad((prev) => Math.max(15, prev - 1));
        }, 100);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearInterval(interval);
        };
    }, []);

    // Uptime fluctuation
    useEffect(() => {
        const interval = setInterval(() => {
            setUptime(99.9 + (Math.random() - 0.5) * 0.1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Create data packet when stage changes
    useEffect(() => {
        if (currentStageIndex >= 0) {
            const newPacket = {
                id: Date.now().toString(),
                from: Math.max(0, currentStageIndex - 1),
                to: currentStageIndex,
            };
            setDataPackets((prev) => [...prev, newPacket]);

            // Remove packet after animation
            setTimeout(() => {
                setDataPackets((prev) => prev.filter((p) => p.id !== newPacket.id));
            }, 2000);
        }
    }, [currentStageIndex]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0E1A]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
            <div className="relative max-w-[1600px] mx-auto px-6 py-4">
                <div className="flex items-center justify-between gap-8">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <motion.div
                            className="relative w-11 h-11 bg-gradient-to-br from-[#00FF41]/20 to-transparent border-2 border-[#00FF41]/30 flex items-center justify-center overflow-hidden"
                            style={{
                                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Rotating ring */}
                            <motion.div
                                className="absolute inset-0 border-2 border-transparent border-t-[#00FF41]"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                style={{
                                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                                }}
                            />
                            <Zap className="w-5 h-5 text-[#00FF41] relative z-10" strokeWidth={2.5} />
                        </motion.div>
                        <div className="hidden lg:flex flex-col">
                            <span className="text-xs font-mono font-black text-white/90 tracking-[0.25em] leading-none">
                                AJ_SYSTEMS
                            </span>
                            <span className="text-[9px] font-mono text-[#00FF41]/70 mt-1 tracking-wider">
                                CORE_v3.0.0
                            </span>
                        </div>
                    </Link>

                    {/* Pipeline Stages */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative flex items-center gap-0">
                            <svg
                                className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 pointer-events-none"
                                style={{ zIndex: 0 }}
                            >
                                {/* Connection lines */}
                                {stages.map((stage, index) => {
                                    if (index === stages.length - 1) return null;
                                    const isCompleted = currentStageIndex > index;
                                    const isActive = currentStageIndex === index;

                                    return (
                                        <g key={`line-${stage.id}`}>
                                            {/* Base line */}
                                            <line
                                                x1={`${(index / (stages.length - 1)) * 100}%`}
                                                y1="50%"
                                                x2={`${((index + 1) / (stages.length - 1)) * 100}%`}
                                                y2="50%"
                                                stroke={isCompleted ? "#00FF41" : "rgba(255,255,255,0.1)"}
                                                strokeWidth="2"
                                                strokeDasharray={isActive ? "5,5" : "none"}
                                            >
                                                {isActive && (
                                                    <animate
                                                        attributeName="stroke-dashoffset"
                                                        from="10"
                                                        to="0"
                                                        dur="0.5s"
                                                        repeatCount="indefinite"
                                                    />
                                                )}
                                            </line>

                                            {/* Glow effect for completed */}
                                            {isCompleted && (
                                                <line
                                                    x1={`${(index / (stages.length - 1)) * 100}%`}
                                                    y1="50%"
                                                    x2={`${((index + 1) / (stages.length - 1)) * 100}%`}
                                                    y2="50%"
                                                    stroke="#00FF41"
                                                    strokeWidth="4"
                                                    opacity="0.3"
                                                    filter="blur(4px)"
                                                />
                                            )}
                                        </g>
                                    );
                                })}

                                {/* Animated data packets */}
                                {dataPackets.map((packet) => (
                                    <motion.circle
                                        key={packet.id}
                                        r="4"
                                        fill="#00FF41"
                                        filter="url(#glow)"
                                        initial={{
                                            cx: `${(packet.from / (stages.length - 1)) * 100}%`,
                                            cy: "50%",
                                        }}
                                        animate={{
                                            cx: `${(packet.to / (stages.length - 1)) * 100}%`,
                                        }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    />
                                ))}

                                {/* Glow filter definition */}
                                <defs>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                            </svg>

                            {/* Stage nodes */}
                            {stages.map((stage, index) => {
                                const Icon = stage.icon;
                                const isActive = pathname === stage.path;
                                const isCompleted = currentStageIndex > index;
                                const isInactive = currentStageIndex < index;

                                return (
                                    <div
                                        key={stage.id}
                                        className="relative flex flex-col items-center min-w-[100px]"
                                        style={{ zIndex: 10 }}
                                    >
                                        <Link href={stage.path}>
                                            <motion.div
                                                className="relative group cursor-pointer"
                                                onMouseEnter={() => setHoveredStage(stage.id)}
                                                onMouseLeave={() => setHoveredStage(null)}
                                                whileHover={{ scale: 1.15, y: -8 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {/* Node container */}
                                                <div
                                                    className={`relative w-14 h-14 flex items-center justify-center transition-all duration-500 ${
                                                        isActive
                                                            ? "bg-[#00FF41]/20 shadow-[0_0_30px_rgba(0,255,65,0.5)]"
                                                            : isCompleted
                                                            ? "bg-[#00FF41]/10 shadow-[0_0_15px_rgba(0,255,65,0.2)]"
                                                            : "bg-white/5 shadow-none"
                                                    }`}
                                                    style={{
                                                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                                                    }}
                                                >
                                                    {/* Border */}
                                                    <div
                                                        className={`absolute inset-0 border-2 transition-colors duration-500 ${
                                                            isActive
                                                                ? "border-[#00FF41]"
                                                                : isCompleted
                                                                ? "border-[#00FF41]/50"
                                                                : "border-white/20"
                                                        }`}
                                                        style={{
                                                            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                                                        }}
                                                    />

                                                    {/* Rotating ring for active */}
                                                    {isActive && (
                                                        <motion.div
                                                            className="absolute inset-0 border-2 border-transparent border-t-[#00FF41] border-r-[#00FF41]"
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                            style={{
                                                                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                                                            }}
                                                        />
                                                    )}

                                                    {/* Icon or checkmark */}
                                                    {isCompleted ? (
                                                        <CheckCircle2 className="w-6 h-6 text-[#00FF41] relative z-10" strokeWidth={2.5} />
                                                    ) : (
                                                        <Icon
                                                            className={`w-6 h-6 relative z-10 transition-colors ${
                                                                isActive ? "text-[#00FF41]" : isInactive ? "text-white/30" : "text-white/60"
                                                            }`}
                                                            strokeWidth={2.5}
                                                        />
                                                    )}

                                                    {/* Pulse effect for active */}
                                                    {isActive && (
                                                        <motion.div
                                                            className="absolute inset-0 bg-[#00FF41]/30"
                                                            animate={{
                                                                scale: [1, 1.5],
                                                                opacity: [0.5, 0],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                ease: "easeOut",
                                                            }}
                                                            style={{
                                                                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                                                            }}
                                                        />
                                                    )}
                                                </div>

                                                {/* Stage label */}
                                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                                    <span
                                                        className={`text-[10px] font-mono font-black tracking-[0.15em] transition-colors ${
                                                            isActive ? "text-[#00FF41]" : isCompleted ? "text-[#00FF41]/70" : "text-white/40"
                                                        }`}
                                                    >
                                                        {stage.name}
                                                    </span>
                                                    {isCompleted && (
                                                        <div className="text-[8px] font-mono text-[#00FF41]/50 text-center mt-0.5">
                                                            STABLE
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Hover tooltip - Log Stream */}
                                                <AnimatePresence>
                                                    {hoveredStage === stage.id && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="absolute top-full mt-12 left-1/2 -translate-x-1/2 w-64 bg-[#0A0E1A] border border-[#00FF41]/30 rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.9)] overflow-hidden"
                                                        >
                                                            {/* Header */}
                                                            <div className="px-3 py-2 bg-[#00FF41]/10 border-b border-[#00FF41]/20 flex items-center gap-2">
                                                                <Terminal className="w-3 h-3 text-[#00FF41]" />
                                                                <span className="text-[9px] font-mono font-bold text-[#00FF41] tracking-wider">
                                                                    LOG_STREAM
                                                                </span>
                                                                <div className="ml-auto flex gap-1">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse" />
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF41]/50" />
                                                                </div>
                                                            </div>

                                                            {/* CLI output */}
                                                            <div className="px-3 py-2 space-y-1 max-h-24 overflow-hidden">
                                                                {stage.cliCommand.map((line, i) => (
                                                                    <motion.div
                                                                        key={i}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: i * 0.1 }}
                                                                        className={`text-[10px] font-mono ${
                                                                            line.startsWith("✓") ? "text-[#00FF41]" : "text-white/60"
                                                                        }`}
                                                                    >
                                                                        {line}
                                                                    </motion.div>
                                                                ))}
                                                            </div>

                                                            {/* Scrolling indicator */}
                                                            <motion.div
                                                                className="absolute bottom-0 left-0 right-0 h-1 bg-[#00FF41]/20"
                                                                initial={{ scaleX: 0 }}
                                                                animate={{ scaleX: 1 }}
                                                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                                            >
                                                                <motion.div
                                                                    className="h-full bg-[#00FF41]"
                                                                    animate={{ x: ["-100%", "200%"] }}
                                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                                />
                                                            </motion.div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* System Health HUD */}
                    <div className="hidden lg:flex items-center gap-4 shrink-0 font-mono">
                        {/* CPU Load */}
                        <div className="flex flex-col items-end px-4 py-2 bg-white/5 border border-white/10 rounded-sm min-w-[100px]">
                            <div className="flex items-center gap-2 mb-1">
                                <Cpu className="w-3 h-3 text-[#00D9FF]" />
                                <span className="text-[9px] text-white/50 tracking-wider">CPU_LOAD</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <motion.span
                                    key={Math.floor(cpuLoad)}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-sm font-bold tabular-nums ${
                                        cpuLoad > 70 ? "text-[#FFB800]" : cpuLoad > 50 ? "text-[#00D9FF]" : "text-[#00FF41]"
                                    }`}
                                >
                                    {Math.floor(cpuLoad)}
                                </motion.span>
                                <span className="text-[9px] text-white/40">%</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                                <motion.div
                                    className={`h-full ${
                                        cpuLoad > 70 ? "bg-[#FFB800]" : cpuLoad > 50 ? "bg-[#00D9FF]" : "bg-[#00FF41]"
                                    }`}
                                    animate={{ width: `${cpuLoad}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </div>

                        {/* Uptime */}
                        <div className="flex flex-col items-end px-4 py-2 bg-white/5 border border-[#00FF41]/20 rounded-sm min-w-[100px]">
                            <div className="flex items-center gap-2 mb-1">
                                <Activity className="w-3 h-3 text-[#00FF41]" />
                                <span className="text-[9px] text-white/50 tracking-wider">UPTIME</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <motion.span
                                    key={uptime.toFixed(2)}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-sm font-bold tabular-nums text-[#00FF41]"
                                >
                                    {uptime.toFixed(2)}
                                </motion.span>
                                <span className="text-[9px] text-white/40">%</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                                <motion.div
                                    className="w-1.5 h-1.5 rounded-full bg-[#00FF41]"
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        opacity: [1, 0.5, 1],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-[8px] text-[#00FF41]/60">NOMINAL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
