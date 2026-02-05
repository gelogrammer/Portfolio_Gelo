"use client";

import { motion } from "framer-motion";
import { Activity, GitBranch, Code, Server } from "lucide-react";

interface MetricCardProps {
    title: string;
    value: string | number;
    unit?: string;
    icon: React.ElementType;
    status: "success" | "warning" | "error" | "info";
    trend?: number;
}

const statusColors = {
    success: "text-neon-green border-neon-green",
    warning: "text-neon-yellow border-neon-yellow",
    error: "text-terminal-red border-terminal-red",
    info: "text-neon-cyan border-neon-cyan",
};

function MetricCard({ title, value, unit, icon: Icon, status, trend }: MetricCardProps) {
    const statusColor = statusColors[status];

    return (
        <motion.div
            className="terminal-box p-4 hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${statusColor}`} />
                    <span className="text-xs font-mono text-muted-foreground uppercase">{title}</span>
                </div>
                <div className={`w-2 h-2 rounded-full ${statusColor.replace('text-', 'bg-')}`} />
            </div>

            <div className="flex items-baseline gap-1">
                <span className={`text-2xl font-mono font-bold ${statusColor}`}>
                    {value}
                </span>
                {unit && (
                    <span className="text-sm font-mono text-muted-foreground">{unit}</span>
                )}
            </div>

            {trend !== undefined && (
                <div className="mt-2 flex items-center gap-1">
                    <span className={`text-xs font-mono ${trend > 0 ? 'text-neon-green' : 'text-terminal-red'}`}>
                        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">vs last month</span>
                </div>
            )}
        </motion.div>
    );
}

interface SkillBarProps {
    name: string;
    level: number;
    category: "frontend" | "backend" | "devops";
}

const categoryColors = {
    frontend: "bg-neon-cyan",
    backend: "bg-neon-magenta",
    devops: "bg-neon-green",
};

function SkillBar({ name, level, category }: SkillBarProps) {
    const barColor = categoryColors[category];

    return (
        <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-foreground">{name}</span>
                <span className="text-muted-foreground">{level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                    className={`h-full ${barColor}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                />
            </div>
        </div>
    );
}

export function MetricsDashboard() {
    const skills = [
        { name: "Angular", level: 95, category: "frontend" as const },
        { name: "TypeScript", level: 92, category: "frontend" as const },
        { name: "Laravel", level: 90, category: "backend" as const },
        { name: "PHP", level: 88, category: "backend" as const },
        { name: "Docker", level: 85, category: "devops" as const },
        { name: "Git", level: 90, category: "devops" as const },
    ];

    return (
        <div className="space-y-6">
            {/* System Metrics */}
            <div>
                <h3 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    SYSTEM METRICS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <MetricCard
                        title="Projects"
                        value="12"
                        icon={Code}
                        status="success"
                        trend={15}
                    />
                    <MetricCard
                        title="Commits"
                        value="1.2K"
                        icon={GitBranch}
                        status="success"
                        trend={8}
                    />
                    <MetricCard
                        title="Uptime"
                        value="99.9"
                        unit="%"
                        icon={Server}
                        status="success"
                    />
                    <MetricCard
                        title="Response"
                        value="45"
                        unit="ms"
                        icon={Activity}
                        status="info"
                        trend={-12}
                    />
                </div>
            </div>

            {/* Skills Proficiency */}
            <div>
                <h3 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    SKILL PROFICIENCY
                </h3>
                <div className="terminal-box p-6 space-y-4">
                    {skills.map((skill) => (
                        <SkillBar key={skill.name} {...skill} />
                    ))}
                </div>
            </div>

            {/* Activity Graph Placeholder */}
            <div>
                <h3 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                    <GitBranch className="w-4 h-4" />
                    COMMIT ACTIVITY
                </h3>
                <div className="terminal-box p-6">
                    <div className="flex items-end justify-between h-32 gap-1">
                        {Array.from({ length: 30 }).map((_, i) => {
                            const height = Math.random() * 100;
                            return (
                                <motion.div
                                    key={i}
                                    className="flex-1 bg-primary/30 hover:bg-primary/50 transition-colors rounded-t"
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ duration: 0.5, delay: i * 0.02 }}
                                />
                            );
                        })}
                    </div>
                    <div className="mt-4 text-xs font-mono text-muted-foreground text-center">
                        Last 30 days
                    </div>
                </div>
            </div>
        </div>
    );
}
