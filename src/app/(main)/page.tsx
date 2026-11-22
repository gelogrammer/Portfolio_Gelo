"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  GitBranch,
  Cloud,
  Workflow,
  Code,
  CheckCircle2,
  CircleDot,
} from "lucide-react";

const RESUME_URL = "https://www.canva.com/design/DAG-x0bdYeI/o7rsbGjAWtIRcf3VlrNmAQ/view";

const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.35, ease: "easeOut" },
} as const;

const focusAreas = [
  {
    icon: Workflow,
    title: "CI/CD & Automation",
    description:
      "Managing deployment pipelines for production enterprise apps and scripting away repetitive work with Python, Bash, and PowerShell.",
    tools: ["Azure DevOps", "GitHub Actions", "Jenkins", "GitLab CI"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Migrating VMs with minimal downtime, tracking containerized services on AWS ECS, and resolving ISD issues to keep uptime high.",
    tools: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"],
  },
  {
    icon: Code,
    title: "Full-Stack Background",
    description:
      "Two years building web and mobile apps for government and education clients, so I understand the software I ship.",
    tools: ["Angular", "TypeScript", "Supabase", "Next.js"],
  },
];

// Career told as a pipeline run: each stage is a real role from the resume.
const pipeline = [
  { stage: "build", title: "BS Computer Science", org: "Bicol University", period: "2022 – 2025", status: "passed" },
  { stage: "test", title: "Part-Time Full-Stack Developer", org: "Quanby Solutions Inc.", period: "Jul 2023 – May 2025", status: "passed" },
  { stage: "release", title: "Freelance Developer", org: "Camp Simeon Ola", period: "Feb – Jun 2025", status: "passed" },
  { stage: "run", title: "DevOps Engineer", org: "Accenture", period: "Jul 2025 – Present", status: "running" },
] as const;

const featured = [
  {
    title: "My DevOps Playbook",
    description: "Searchable reference of 150+ DevOps commands, runbooks, and cheat sheets.",
    tag: "Astro · Cloudflare Workers",
    href: "https://my-devops-playbook.angelojohn0987.workers.dev",
  },
  {
    title: "Docker Image Transfer Automation",
    description: "Unified Bash script moving images across AWS accounts via STS assume-role.",
    tag: "Bash · AWS CLI · Docker",
    href: "https://github.com/gelogrammer/MaltaScript",
  },
  {
    title: "Dynatrace EC2 Automation",
    description: "Terraform + PowerShell provisioning of EC2 with Dynatrace OneAgent preinstalled.",
    tag: "Terraform · AWS · PowerShell",
    href: "https://github.com/gelogrammer/Dynatrace-part2",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
        <div className="relative container mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="min-w-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative shrink-0">
                <Image
                  src="/assets/images/profile/me.JPEG"
                  alt="Portrait of Angelo John S. Calleja"
                  width={112}
                  height={112}
                  priority
                  className="w-20 h-20 md:w-28 md:h-28 rounded-xl object-cover border border-border ring-1 ring-primary/30"
                />
                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary border-[3px] border-background"
                  aria-hidden="true"
                />
              </div>
              <p className="font-mono text-sm text-primary">~/angelo $ whoami</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Angelo John S. Calleja
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              DevOps Engineer at <span className="text-foreground font-medium">Accenture</span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              I keep production pipelines and infrastructure healthy, migrate systems with minimal downtime,
              and automate the repetitive parts so teams can ship with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link href="/projects">
                  View projects
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/monitor">Contact</Link>
              </Button>
            </div>
          </div>

          {/* Terminal card with real facts (no entrance animation: hero content must render immediately) */}
          <div className="terminal-box shadow-xl overflow-hidden min-w-0">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" aria-hidden="true" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">angelo@prod: ~</span>
            </div>
            <div className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed overflow-x-auto">
              <p><span className="text-primary">$</span> kubectl describe engineer angelo</p>
              <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-muted-foreground">
                <dt>Role:</dt><dd className="text-foreground">DevOps Engineer</dd>
                <dt>Company:</dt><dd className="text-foreground">Accenture</dd>
                <dt>Location:</dt><dd className="text-foreground">Taguig City, PH</dd>
                <dt>Cloud:</dt><dd className="text-foreground">AWS, Azure</dd>
                <dt>IaC:</dt><dd className="text-foreground">Terraform</dd>
                <dt>CI/CD:</dt><dd className="text-foreground">Azure DevOps, GitHub Actions, Jenkins</dd>
                <dt>Status:</dt><dd className="text-primary">● Running</dd>
              </dl>
              <p className="mt-4"><span className="text-primary">$</span> <span className="terminal-cursor" aria-hidden="true" /></p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        {/* Focus areas */}
        <section className="py-16 md:py-20" aria-labelledby="focus-heading">
          <motion.div {...reveal} className="mb-10">
            <p className="font-mono text-sm text-primary mb-2">$ cat focus.md</p>
            <h2 id="focus-heading" className="text-2xl md:text-3xl font-bold">What I work on</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.05 }}
                className="terminal-box p-6 flex flex-col hover:border-primary/40 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{area.description}</p>
                <ul className="flex flex-wrap gap-1.5" aria-label={`${area.title} tools`}>
                  {area.tools.map((tool) => (
                    <li key={tool} className="px-2 py-0.5 rounded bg-secondary text-xs font-mono text-secondary-foreground">
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Career pipeline */}
        <section className="py-16 md:py-20 border-t border-border" aria-labelledby="pipeline-heading">
          <motion.div {...reveal} className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-mono text-sm text-primary mb-2 flex items-center gap-2">
                <GitBranch className="w-4 h-4" aria-hidden="true" />
                career / main
              </p>
              <h2 id="pipeline-heading" className="text-2xl md:text-3xl font-bold">Career pipeline</h2>
            </div>
            <Link href="/deploy" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors">
              Full experience <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>

          <ol className="grid gap-4 md:grid-cols-4">
            {pipeline.map((step, index) => {
              const running = step.status === "running";
              return (
                <motion.li
                  key={step.stage}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.05 }}
                  className={`terminal-box p-5 relative ${running ? "border-primary/50" : ""}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {index + 1}. {step.stage}
                    </span>
                    {running ? (
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-primary">
                        <CircleDot className="w-3.5 h-3.5" aria-hidden="true" /> running
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> passed
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold leading-snug">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.org}</p>
                  <p className="mt-2 text-xs font-mono text-muted-foreground">{step.period}</p>
                </motion.li>
              );
            })}
          </ol>
        </section>

        {/* Featured projects */}
        <section className="py-16 md:py-20 border-t border-border" aria-labelledby="featured-heading">
          <motion.div {...reveal} className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-mono text-sm text-primary mb-2">$ ls ~/projects --featured</p>
              <h2 id="featured-heading" className="text-2xl md:text-3xl font-bold">Featured DevOps work</h2>
            </div>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors">
              All projects <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((project, index) => (
              <motion.div key={project.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.05 }}>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-box p-6 h-full flex flex-col group hover:border-primary/40 transition-colors duration-200"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
                  <p className="mt-4 text-xs font-mono text-muted-foreground">{project.tag}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section {...reveal} className="py-16 md:py-20 border-t border-border text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Let&apos;s work together</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Open to DevOps, cloud, and platform engineering opportunities.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/monitor">Get in touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">About me</Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
