"use client";

import { motion } from "framer-motion";
import { Rocket, Cloud, Globe, Server, Activity, Database, Shield } from "lucide-react";

export default function DeployPage() {
    const deployments = [
        { env: "PRODUCTION", region: "AWS-US-EAST-1", status: "LIVE", version: "v2.0.26", health: 100 },
        { env: "STAGING", region: "Vercel-HKG-1", status: "SYNCING", version: "v2.1.0-RC", health: 98 },
        { env: "DEVELOPMENT", region: "Local-Docker", status: "OPERATIONAL", version: "v2.1.0-alpha", health: 100 },
    ];

    return (
        <div className="container mx-auto max-w-7xl py-12 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="terminal-box p-8"
            >
                <div className="flex items-center gap-4 mb-8 text-neon-cyan">
                    <Rocket className="w-8 h-8" />
                    <h1 className="text-3xl font-mono font-bold tracking-tighter">DEPLOYMENT_MANAGER.sys</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {deployments.map((dep, i) => (
                        <motion.div
                            key={dep.env}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 border border-primary/20 bg-primary/5 rounded relative overflow-hidden group hover:border-neon-cyan/50 transition-all font-mono"
                        >
                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Cloud className="w-12 h-12" />
                            </div>

                            <div className="text-[10px] text-muted-foreground mb-1 tracking-widest font-bold">{dep.env}</div>
                            <div className="text-xl font-bold mb-4 tracking-tight">{dep.version}</div>

                            <div className="space-y-3 text-xs">
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">REGION:</span>
                                    <span className="text-white/80">{dep.region}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">STATUS:</span>
                                    <span className={`font-bold ${dep.status === 'LIVE' ? 'text-neon-green' : 'text-neon-cyan animate-pulse'}`}>
                                        {dep.status}
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px]">
                                        <span className="text-muted-foreground">HEALTH_SCORE</span>
                                        <span className="text-neon-green">{dep.health}%</span>
                                    </div>
                                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-neon-green" style={{ width: `${dep.health}%` }} />
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-6 w-full py-2 bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan text-xs font-bold hover:bg-neon-cyan/30 transition-all rounded"
                            >
                                INVOKE_ROLLBACK
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-primary/10 rounded bg-black/20 font-mono">
                        <h3 className="text-xs font-bold text-primary mb-4 flex items-center gap-2">
                            <Globe className="w-4 h-4" /> TRAFFIC_DISTRIBUTION
                        </h3>
                        <div className="space-y-4">
                            {[
                                { label: "US_EAST", val: 45 },
                                { label: "EU_WEST", val: 30 },
                                { label: "AS_SOUTH", val: 25 },
                            ].map(region => (
                                <div key={region.label} className="space-y-1">
                                    <div className="flex justify-between text-[10px] text-muted-foreground">
                                        <span>{region.label}</span>
                                        <span>{region.val}%</span>
                                    </div>
                                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary" style={{ width: `${region.val}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 border border-primary/10 rounded bg-black/20 font-mono">
                        <h3 className="text-xs font-bold text-primary mb-4 flex items-center gap-2">
                            <Shield className="w-4 h-4" /> INFRA_RESOURCES
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-white/5 rounded">
                                <div className="flex items-center gap-2 text-muted-foreground text-[10px] mb-1">
                                    <Server className="w-3 h-3" /> COMPUTE
                                </div>
                                <div className="text-sm font-bold">128 UNITS</div>
                            </div>
                            <div className="p-3 bg-white/5 rounded">
                                <div className="flex items-center gap-2 text-muted-foreground text-[10px] mb-1">
                                    <Database className="w-3 h-3" /> STORAGE
                                </div>
                                <div className="text-sm font-bold">2.4 TB</div>
                            </div>
                            <div className="p-3 bg-white/5 rounded">
                                <div className="flex items-center gap-2 text-muted-foreground text-[10px] mb-1">
                                    <Activity className="w-3 h-3" /> LOAD_BALANCER
                                </div>
                                <div className="text-sm font-bold text-neon-green">STABLE</div>
                            </div>
                            <div className="p-3 bg-white/5 rounded">
                                <div className="flex items-center gap-2 text-muted-foreground text-[10px] mb-1">
                                    <Shield className="w-3 h-3" /> FIREWALL
                                </div>
                                <div className="text-sm font-bold text-neon-green">ACTIVE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
