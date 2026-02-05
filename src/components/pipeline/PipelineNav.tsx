"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Code, Rocket, Activity, Terminal } from "lucide-react";
import { motion } from "framer-motion";

interface PipelineStage {
    name: string;
    label: string;
    path: string;
    icon: React.ElementType;
}

const pipelineStages: PipelineStage[] = [
    { name: "HOME", label: "Home", path: "/", icon: Home },
    { name: "PROJECTS", label: "Projects", path: "/projects", icon: Briefcase },
    { name: "SKILLS", label: "Skills", path: "/test", icon: Code },
    { name: "EXPERIENCE", label: "Experience", path: "/deploy", icon: Rocket },
    { name: "CONTACT", label: "Contact", path: "/monitor", icon: Activity },
];

export function PipelineNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/98 backdrop-blur-xl">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Branding */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div 
                            className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden group-hover:border-primary/40 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Animated background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                            
                            <Terminal className="w-5 h-5 text-primary relative z-10" />
                        </motion.div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-sm font-semibold text-foreground leading-none">Angelo Calleja</span>
                            <span className="text-xs text-muted-foreground mt-0.5">Software Engineer</span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-1">
                        {pipelineStages.map((stage) => {
                            const isActive = pathname === stage.path;
                            const Icon = stage.icon;

                            return (
                                <Link key={stage.name} href={stage.path}>
                                    <motion.div
                                        className={`
                                            relative px-4 py-2 rounded-lg font-medium text-sm
                                            transition-all duration-300 overflow-hidden group
                                            ${isActive
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                            }
                                        `}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Background for active state */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 rounded-lg border border-primary/30"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}

                                        {/* Hover gradient background */}
                                        {!isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        )}

                                        {/* Shine effect on hover */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                                            animate={{
                                                x: isActive ? ['-100%', '100%'] : '-100%',
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: isActive ? Infinity : 0,
                                                repeatDelay: 1,
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="relative flex items-center gap-2">
                                            <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : ''}`} />
                                            <span className="hidden sm:inline">{stage.label}</span>
                                        </div>

                                        {/* Active indicator dot */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: [0, 1.2, 1] }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Status Badge */}
                    <div className="hidden lg:flex items-center gap-3">
                        <motion.div 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-primary"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            />
                            <span className="text-xs font-medium text-primary">Available</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
