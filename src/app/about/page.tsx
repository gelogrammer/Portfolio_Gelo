"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, MotionConfig } from "framer-motion";
import {
  Cloud,
  GitBranch,
  CheckCircle2,
  CircleDot,
  Server,
  Globe,
  Sparkles,
  Mail,
  MapPin,
  Briefcase,
  Code,
  Rocket,
  Heart,
  Zap,
  Target,
  Users,
  Award,
  Download
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    icon: Briefcase,
    title: "DevOps Engineer",
    subtitle: "Accenture",
    description: "Managing CI/CD pipelines and infrastructure for production enterprise apps",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Code,
    title: "Full Stack Developer",
    subtitle: "Quanby Solutions Inc.",
    description: "Built government and educational systems with Angular 17 & Supabase",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Rocket,
    title: "Freelance Developer",
    subtitle: "Camp Simeon Ola & Others",
    description: "Built web and mobile apps for government clients and an MBA accreditation portal for PUP",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const values = [
  {
    icon: Target,
    title: "Problem Solver",
    description: "I dig into production and infrastructure issues until I find the root cause, then fix it so it stays fixed."
  },
  {
    icon: Zap,
    title: "Automation First",
    description: "If a task repeats, I script it. Python, Bash, and PowerShell save the team hours of manual work."
  },
  {
    icon: Heart,
    title: "Reliability Minded",
    description: "I keep uptime high and changes low-risk, from VM migrations with minimal downtime to well-tracked deployments."
  },
  {
    icon: Users,
    title: "Team Player",
    description: "I work closely with cross-functional teams to keep deployments and data moving smoothly between environments."
  }
];

const skillGroups = [
  { icon: Cloud, title: "Cloud & Infrastructure", items: ["Azure", "AWS", "Terraform", "Docker", "Kubernetes"] },
  { icon: GitBranch, title: "CI/CD & Version Control", items: ["Azure DevOps", "GitHub Actions", "GitLab CI", "Jenkins", "Git"] },
  { icon: Server, title: "Systems & Scripting", items: ["Linux", "Windows Server", "Python", "Bash", "PowerShell", "Networking"] },
  { icon: Globe, title: "Web Development", items: ["Angular", "TypeScript", "JavaScript", "React", "Next.js", "Supabase", "MySQL"] },
  { icon: Sparkles, title: "AI & Collaboration", items: ["Generative AI (Claude & other LLMs)", "Jira"] },
];

// Career stages, oldest first (pipelines read left to right). Dates from the resume.
const journey = [
  {
    stage: "Education",
    title: "BS Computer Science",
    org: "Bicol University",
    period: "2022 – 2025",
    duration: "3y",
    description: "Computer Science degree, College of Science.",
  },
  {
    stage: "Full-Stack",
    title: "Part-Time Full-Stack Developer",
    org: "Quanby Solutions Inc.",
    period: "Jul 2023 – May 2025",
    duration: "1y 11m",
    description: "Started as an OJT trainee, promoted to intern, then hired part-time. Built a Business Permit Management System.",
  },
  {
    stage: "Freelance",
    title: "Freelance Developer",
    org: "Camp Simeon Ola",
    period: "Feb – Jun 2025",
    duration: "5mo",
    description: "Fidelity bond monitoring, SMS alerts, and a role-based communication system.",
  },
  {
    stage: "DevOps",
    title: "DevOps Engineer",
    org: "Accenture",
    period: "Jul 2025 – Present",
    duration: "Present",
    description: "CI/CD pipelines and infrastructure, VM migrations, AWS ECS inventory, and ISD tracking.",
  },
];

// Below-the-fold sections animate when scrolled into view instead of on a timer.
const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/gelogrammer",
    icon: "github",
    username: "@gelogrammer"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/angelo-john-calleja-81312a319/",
    icon: "linkedin",
    username: "Angelo John Calleja"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/0987kill/",
    icon: "facebook",
    username: "Angelo John Calleja"
  },
  {
    name: "Email",
    url: "mailto:angelojohn0987@gmail.com",
    icon: "mail",
    username: "angelojohn0987@gmail.com"
  }
];

export default function AboutPage() {

  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Hero Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="border-border bg-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/assets/images/profile/me.JPEG"
                      alt="Angelo John S. Calleja"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                    {/* Status badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 rounded-full border border-primary/40 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                      <span className="text-xs font-mono font-medium text-foreground">available</span>
                    </div>
                  </div>

                  {/* Info panel */}
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-2xl font-bold mb-1">Angelo John S. Calleja</p>
                      <p className="text-sm text-primary font-mono">DevOps Engineer</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Taguig City, Metro Manila</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span>DevOps @ Accenture</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="w-4 h-4 text-primary" />
                        <span>BS Computer Science</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button asChild className="w-full gap-2">
                        <Link href="/monitor">
                          <Mail className="w-4 h-4" />
                          Get in Touch
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm font-mono text-primary mb-2 inline-block"
                >
                  $ cat ~/about.txt
                </motion.span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  About Me
                </h1>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
                <p className="text-base md:text-lg">
                  Hi! I'm a <span className="text-foreground font-medium">DevOps Engineer at Accenture</span> and a Computer Science graduate of Bicol University, based in Taguig City, Metro Manila.
                </p>
                <p className="text-base md:text-lg">
                  Day to day, I manage <span className="text-foreground font-medium">CI/CD pipelines</span> and <span className="text-foreground font-medium">infrastructure</span> for production enterprise applications, resolve production and ISD issues, and <span className="text-foreground font-medium">automate repetitive work</span> with Python, Bash, and PowerShell. I've migrated development and client VMs with minimal downtime and built internal tools like an <span className="text-foreground font-medium">AWS ECS services inventory</span> and an <span className="text-foreground font-medium">ISD tracker</span>.
                </p>
                <p className="text-base md:text-lg">
                  Before DevOps, I spent nearly two years building <span className="text-foreground font-medium">full-stack systems</span> with Angular and Supabase, from a Business Permit Management System at Quanby Solutions to fidelity bond monitoring and communication systems for Camp Simeon Ola. That background helps me understand the applications I deploy, not just the pipelines that ship them.
                </p>
              </div>

              {/* Current Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Card className={`border ${highlight.bgColor} border-border hover:border-primary/30 transition-all duration-300 group h-full`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 ${highlight.bgColor} rounded-lg ${highlight.color} group-hover:scale-110 transition-transform`}>
                            <highlight.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm mb-0.5">{highlight.title}</h3>
                            <p className="text-xs text-primary mb-1">{highlight.subtitle}</p>
                            <p className="text-sm text-muted-foreground leading-snug">{highlight.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* What I Value */}
        <motion.div {...reveal} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-foreground">
              What I Value
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="border-border bg-card hover:border-primary/30 transition-all duration-500 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                        <value.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills & Tools */}
        <motion.div {...reveal} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            <span className="text-foreground">
              Skills &amp; Tools
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 font-mono text-sm">
            $ ls ~/toolbox
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="border-border bg-card hover:border-primary/30 transition-colors duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <group.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold">{group.title}</h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="px-2.5 py-1 bg-primary/10 text-primary rounded-md text-sm font-mono border border-primary/20"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey, drawn like a CI/CD pipeline graph: stages flow left to right in time order */}
        <motion.section {...reveal} className="mb-16" aria-labelledby="journey-heading">
          <h2 id="journey-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center">
            My Journey
          </h2>

          <div className="terminal-box overflow-hidden">
            {/* Workflow header */}
            <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-border bg-secondary/40">
              <div className="flex items-center gap-2 font-mono text-sm">
                <GitBranch className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-foreground">career</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">main</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{journey.length} stages</span>
            </div>

            {/* Pipeline graph */}
            <ol className="p-5 md:p-6 flex flex-col lg:flex-row lg:items-stretch">
              {journey.map((stage, index) => {
                const current = index === journey.length - 1;
                return (
                  <li key={stage.title} className="flex flex-col lg:flex-row lg:flex-1 min-w-0">
                    <div
                      className={`flex-1 min-w-0 rounded-lg border bg-background/40 p-4 transition-colors duration-200 ${
                        current ? "border-primary/60" : "border-border hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {current ? (
                            <CircleDot className="w-4 h-4 text-primary" aria-hidden="true" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" />
                          )}
                          {stage.stage}
                        </span>
                        <span
                          className={`shrink-0 px-2 py-0.5 rounded font-mono text-[11px] ${
                            current ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {stage.duration}
                        </span>
                      </div>
                      <h3 className="font-semibold leading-snug">{stage.title}</h3>
                      <p className="text-sm text-muted-foreground">{stage.org}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{stage.period}</p>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                    </div>

                    {/* Connector to the next stage: vertical on mobile, horizontal on desktop */}
                    {!current && (
                      <div className="flex items-center justify-start lg:justify-center pl-6 lg:pl-0 h-6 lg:h-auto lg:w-8 shrink-0" aria-hidden="true">
                        <span className="block w-px h-full lg:w-full lg:h-px bg-border" />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </motion.section>

        {/* Social Links & CTA */}
        <motion.div {...reveal} className="text-center">
          <div className="terminal-box p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in new opportunities and collaborations
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Button asChild variant="outline" className="gap-2 min-h-[44px]">
                    <Link
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.icon === 'github' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
                      {link.icon === 'linkedin' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}
                      {link.icon === 'facebook' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.603-2.797 4.16v1.972h3.618l-1.19 3.667h-2.428v7.896c1 5.643 7.552 2.659 7.552-3.82V4.5A4.5 4.5 0 0 0 17.17 0H4.5A4.5 4.5 0 0 0 0 4.5v15.372c0 5.852 5.021 7.632 9.101 3.819z" /></svg>}
                      {link.icon === 'mail' && <Mail className="w-4 h-4" />}
                      <span>{link.name}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/monitor" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://www.canva.com/design/DAG-x0bdYeI/o7rsbGjAWtIRcf3VlrNmAQ/view" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
    </MotionConfig>
  );
}
