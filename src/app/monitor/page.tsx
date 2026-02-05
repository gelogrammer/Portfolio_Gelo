"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, HardDrive, Network, Zap, Shield, Server } from "lucide-react";

export default function MonitorPage() {
    const metrics = [
        { label: "CPU_LOAD", value: "24%", color: "text-neon-green" },
        { label: "MEM_USAGE", value: "1.2GB / 4GB", color: "text-neon-cyan" },
        { label: "DISK_IO", value: "140 MB/s", color: "text-neon-magenta" },
        { label: "NET_TRAFFIC", value: "850 Mbps", color: "text-neon-yellow" },
    ];

    return (
        <div className="container mx-auto max-w-7xl py-12 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="terminal-box p-8"
            >
                <div className="flex items-center gap-4 mb-8 text-neon-magenta">
                    <Activity className="w-8 h-8" />
                    <h1 className="text-3xl font-mono font-bold tracking-tighter">RESOURCE_TELEMETRY.sys</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 border border-primary/20 bg-primary/5 rounded font-mono"
                        >
                            <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">{metric.label}</div>
                            <div className={`text-xl font-bold ${metric.color}`}>{metric.value}</div>
                            <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full bg-current ${metric.color}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: "65%" }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-black/40 border border-primary/10 rounded-lg overflow-hidden font-mono">
                    <div className="p-4 border-b border-primary/10 bg-primary/5 flex items-center justify-between">
                        <span className="text-xs font-bold text-primary flex items-center gap-2">
                            <Server className="w-4 h-4" /> NODE_INVENTORY
                        </span>
                        <span className="text-[10px] text-neon-green animate-pulse">LIVE_FEED</span>
                    </div>
                    <table className="w-full text-left text-xs">
                        <thead className="text-muted-foreground border-b border-primary/5">
                            <tr>
                                <th className="p-4">NODE_ID</th>
                                <th className="p-4">ROLE</th>
                                <th className="p-4">IP_ADDR</th>
                                <th className="p-4">STATUS</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/5">
                            {[
                                { id: "node-01", role: "MASTER", ip: "10.0.0.1", status: "HEALTHY" },
                                { id: "node-02", role: "WORKER", ip: "10.0.0.2", status: "HEALTHY" },
                                { id: "node-03", role: "WORKER", ip: "10.0.0.3", status: "REBOOTING" },
                                { id: "node-04", role: "DATABASE", ip: "10.0.0.4", status: "HEALTHY" },
                            ].map((node) => (
                                <tr key={node.id} className="hover:bg-primary/5 transition-colors">
                                    <td className="p-4">{node.id}</td>
                                    <td className="p-4">{node.role}</td>
                                    <td className="p-4 text-muted-foreground">{node.ip}</td>
                                    <td className="p-4">
                                        <span className={node.status === 'HEALTHY' ? 'text-neon-green' : 'text-neon-yellow animate-pulse'}>
                                            [{node.status}]
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
