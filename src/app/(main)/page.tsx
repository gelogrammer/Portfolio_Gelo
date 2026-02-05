"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, Code, Server, Database, Cloud, GitBranch } from "lucide-react";
import { MetricsDashboard } from "@/components/metrics/MetricsDashboard";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section - Terminal Style */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="terminal-box p-8 md:p-12">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 text-primary">
              <Terminal className="w-5 h-5" />
              <span className="text-sm font-mono">guest@angelo-portfolio:~$</span>
              <span className="terminal-cursor"></span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div>
                <motion.h1
                  className="text-4xl md:text-6xl font-bold font-mono mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-neon-green crt-glow">$</span>{" "}
                  <span className="text-foreground">whoami</span>
                </motion.h1>
                <motion.div
                  className="text-xl md:text-2xl font-mono text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-neon-cyan">Angelo John S. Calleja</span>
                </motion.div>
              </div>

              <motion.div
                className="space-y-2 font-mono text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex gap-2">
                  <span className="text-terminal-green">●</span>
                  <span className="text-foreground">Role: Full Stack Developer & DevOps Engineer</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-neon-cyan">●</span>
                  <span className="text-foreground">Stack: Angular | Laravel | Docker | AWS</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-neon-magenta">●</span>
                  <span className="text-foreground">Status: Available for opportunities</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link href="/projects">
                  <Button className="neon-border bg-primary/10 hover:bg-primary/20 text-primary font-mono">
                    <Code className="w-4 h-4 mr-2" />
                    ./view-projects.sh
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-mono">
                    <Server className="w-4 h-4 mr-2" />
                    cat about.txt
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-muted-foreground hover:border-primary font-mono">
                    <Terminal className="w-4 h-4 mr-2" />
                    ssh contact
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* System Architecture Diagram */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-mono text-primary mb-6 flex items-center gap-2">
            <Server className="w-6 h-6" />
            SYSTEM ARCHITECTURE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend Layer */}
            <motion.div
              className="terminal-box p-6 hover:border-neon-cyan/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-neon-cyan" />
                <h3 className="font-mono text-lg text-neon-cyan">Frontend Layer</h3>
              </div>
              <div className="space-y-2 text-sm font-mono text-muted-foreground">
                <div>→ Angular Framework</div>
                <div>→ TypeScript</div>
                <div>→ Responsive UI/UX</div>
                <div>→ State Management</div>
              </div>
              <div className="mt-4 text-xs font-mono text-terminal-green">
                [STATUS: OPERATIONAL]
              </div>
            </motion.div>

            {/* Backend Layer */}
            <motion.div
              className="terminal-box p-6 hover:border-neon-magenta/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-neon-magenta" />
                <h3 className="font-mono text-lg text-neon-magenta">Backend Layer</h3>
              </div>
              <div className="space-y-2 text-sm font-mono text-muted-foreground">
                <div>→ Laravel Framework</div>
                <div>→ RESTful APIs</div>
                <div>→ MySQL Database</div>
                <div>→ Authentication</div>
              </div>
              <div className="mt-4 text-xs font-mono text-terminal-green">
                [STATUS: OPERATIONAL]
              </div>
            </motion.div>

            {/* DevOps Layer */}
            <motion.div
              className="terminal-box p-6 hover:border-neon-green/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Cloud className="w-5 h-5 text-neon-green" />
                <h3 className="font-mono text-lg text-neon-green">DevOps Layer</h3>
              </div>
              <div className="space-y-2 text-sm font-mono text-muted-foreground">
                <div>→ Docker Containers</div>
                <div>→ CI/CD Pipelines</div>
                <div>→ Git Version Control</div>
                <div>→ Cloud Deployment</div>
              </div>
              <div className="mt-4 text-xs font-mono text-terminal-green">
                [STATUS: OPERATIONAL]
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Metrics Dashboard */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <MetricsDashboard />
        </motion.section>

        {/* Quick Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12"
        >
          <div className="terminal-box p-6">
            <h3 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              QUICK ACCESS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono">
              <Link href="/projects" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors">
                → Projects
              </Link>
              <Link href="/about" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors">
                → About
              </Link>
              <Link href="/contact" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors">
                → Contact
              </Link>
              <button
                onClick={() => {
                  const event = new KeyboardEvent('keydown', {
                    key: '`',
                    ctrlKey: true,
                    bubbles: true
                  });
                  window.dispatchEvent(event);
                }}
                className="text-neon-green hover:text-neon-green/80 transition-colors text-left"
              >
                → Terminal
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}