"use client";

import { motion } from "framer-motion";
import { Cloud, GitBranch, Server, Globe, Smartphone, Sparkles } from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.35, ease: "easeOut" },
} as const;

const skillGroups = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    file: "infra.tf",
    skills: ["Azure", "AWS", "Terraform", "Docker", "Kubernetes"],
  },
  {
    icon: GitBranch,
    title: "CI/CD & Version Control",
    file: "pipeline.yml",
    skills: ["Azure DevOps", "GitHub Actions", "GitLab CI", "Jenkins", "Git"],
  },
  {
    icon: Server,
    title: "Systems & Scripting",
    file: "scripts/",
    skills: ["Linux", "Windows Server", "Python", "Bash", "PowerShell", "Networking"],
  },
  {
    icon: Globe,
    title: "Web Development",
    file: "web/",
    skills: ["Angular", "TypeScript", "JavaScript", "React", "Next.js", "Supabase", "MySQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    file: "android/",
    skills: ["Kotlin", "Android", "SMS alerts"],
  },
  {
    icon: Sparkles,
    title: "AI & Collaboration",
    file: "tools.md",
    skills: ["Generative AI (Claude & other LLMs)", "Jira"],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2">$ ls ~/toolbox</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Skills &amp; Tools</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The tools I use day to day as a DevOps engineer, plus the full-stack background I build on.
          </p>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.section
              key={group.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.04 }}
              className="terminal-box overflow-hidden hover:border-primary/40 transition-colors duration-200"
              aria-labelledby={`skill-${index}`}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/40">
                <div className="flex items-center gap-2">
                  <group.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  <h2 id={`skill-${index}`} className="font-semibold text-sm">{group.title}</h2>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{group.file}</span>
              </div>
              <ul className="p-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-secondary text-sm font-mono text-secondary-foreground border border-border"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>

        <motion.div {...reveal} className="mt-12 terminal-box p-6 md:p-8">
          <h2 className="text-lg font-semibold mb-2">Currently learning</h2>
          <p className="text-muted-foreground leading-relaxed">
            Currently exploring <span className="text-foreground font-medium">AI/ML integrations</span>,{" "}
            <span className="text-foreground font-medium">microservices</span>, and{" "}
            <span className="text-foreground font-medium">cloud-native</span> architectures.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
