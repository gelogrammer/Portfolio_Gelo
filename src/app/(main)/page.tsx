"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Cloud,
  Workflow,
  Code,
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
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Migrating VMs with minimal downtime, tracking containerized services on AWS ECS, and resolving ISD issues to keep uptime high.",
  },
  {
    icon: Code,
    title: "Full-Stack Background",
    description:
      "Two years building web and mobile apps for government and education clients, so I understand the software I ship.",
  },
];

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
        <div className="relative container mx-auto max-w-6xl px-4 md:px-8 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="min-w-0">
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
            </div>
          </div>

          {/* Portrait. Rendered without entrance animation so the hero shows immediately. */}
          <div className="relative min-w-0 w-full max-w-[320px] sm:max-w-[360px] mx-auto lg:mx-0 lg:w-[360px] xl:w-[400px] lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="/assets/images/profile/me.JPEG"
                alt="Portrait of Angelo John S. Calleja"
                fill
                priority
                sizes="(min-width: 1280px) 400px, 360px"
                className="object-cover object-[50%_22%]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        {/* Focus areas */}
        <section className="py-16 md:py-20" aria-labelledby="focus-heading">
          <motion.div {...reveal} className="mb-8">
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
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured projects */}
        <section className="py-16 md:py-20 border-t border-border" aria-labelledby="featured-heading">
          <motion.div {...reveal} className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 id="featured-heading" className="text-2xl md:text-3xl font-bold">Featured projects</h2>
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
          </div>
        </motion.section>
      </div>
    </main>
  );
}
