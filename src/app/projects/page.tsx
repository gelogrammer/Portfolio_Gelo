"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, Workflow, Code, Server, Sparkles, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  demoLink: string;
  githubLink: string;
  featured: boolean;
  year: string;
  status: string;
  details?: {
    problem: string;
    solution: string;
    features: string[];
  };
}

const projects: Project[] = [
  {
    title: "My DevOps Playbook",
    description: "A searchable personal reference for DevOps commands, cheat sheets, runbooks, incidents, and gotchas. Command cards include one-click copy and fill-in fields for placeholders, covering Linux, Git, Docker, Kubernetes/OpenShift, cloud CLIs, IaC, CI/CD, monitoring, and security.",
    tech: ["Astro", "Cloudflare Workers", "GitHub API", "Markdown"],
    category: "DevOps",
    image: "/assets/images/projects/devops-playbook.png",
    demoLink: "https://my-devops-playbook.angelojohn0987.workers.dev",
    githubLink: "https://github.com/gelogrammer/My_DevOps_Playbook",
    featured: true,
    year: "2026",
    status: "Production"
  },
  {
    title: "MBA Accreditation Portal - PUP CBA Graduate Studies",
    description: "Accreditation portal for the Master in Business Administration program of PUP's College of Business Administration Graduate Studies, presenting AACCUP Level IV, Phase 2 evidence across five areas with narratives, videos, photo documentation, curriculum, and compliance documents.",
    tech: ["HTML", "CSS", "JavaScript", "Cloudflare Pages"],
    category: "Freelance",
    image: "/assets/images/projects/mba-accreditation.png",
    demoLink: "https://mba-accreditation.pages.dev",
    githubLink: "#",
    featured: true,
    year: "2026",
    status: "Production"
  },
  {
    title: "Business Permit Management System",
    description: "A centralized platform designed to streamline, digitize, and automate business operations, primarily focused on business permit applications, processing, and compliance monitoring.",
    tech: ["Angular 17", "Supabase", "TailwindCSS", "TypeScript"],
    category: "Full Stack",
    image: "/assets/images/projects/BMS_SCREENSHOT.jpg",
    demoLink: "https://quanby-bms.web.app/login",
    githubLink: "#",
    featured: true,
    year: "2024",
    status: "Production"
  },
  {
    title: "Hotel Management System & Booking Website",
    description: "A comprehensive hotel management system with an integrated online booking platform for The Apple Peach House, featuring reservation management, room availability tracking, and a user-friendly booking interface.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    category: "Full Stack",
    image: "/assets/images/projects/Online_BookingPos.jpg",
    demoLink: "https://peachperfect-online-booking.bsitcps.com",
    githubLink: "#",
    featured: true,
    year: "2023",
    status: "Production"
  },
  {
    title: "Hotel POS & Admin Dashboard",
    description: "The administrative backend for The Apple Peach House hotel, providing staff with tools for managing reservations, room assignments, guest services, and generating business reports.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    category: "Backend",
    image: "/assets/images/projects/POS_SCREENSHOT.jpg",
    demoLink: "https://peachperfect.bsitcps.com/login",
    githubLink: "#",
    featured: false,
    year: "2023",
    status: "Production"
  },
  {
    title: "Talk.twah Research Lab",
    description: "A research platform advancing real-time speech analysis using deep reinforcement learning. This project collects voice samples to develop intelligent feedback systems for speech rate and emotion detection, helping train AI to better understand human speech patterns.",
    tech: ["React", "Cloudflare Workers", "TensorFlow.js", "WebRTC", "Web Audio API"],
    category: "AI & Research",
    image: "/assets/images/projects/Talk_Twah.jpg",
    demoLink: "https://voice-gateway.angelo-calleja14.workers.dev/login",
    githubLink: "#",
    featured: true,
    year: "2024",
    status: "Research"
  },
  {
    title: "Docker Image Transfer Automation",
    description: "A secure, unified shell script for transferring Docker images between AWS accounts (MALTA to OHIO) using automatic Assume Role authentication and enhanced security protocols.",
    tech: ["Bash", "AWS CLI", "Docker", "Shell Scripting"],
    category: "DevOps",
    image: "/assets/images/projects/docker-transfer-text.svg",
    demoLink: "#",
    githubLink: "https://github.com/gelogrammer/MaltaScript",
    featured: false,
    year: "2026",
    status: "Production",
    details: {
      problem: "Transferring Docker images between isolated AWS accounts required manual, error-prone steps and multiple scripts.",
      solution: "Created a unified Bash script that automates the entire process using AWS STS for secure role assumption and temporary credentials.",
      features: [
"Automatic Assume Role authentication",
"Secure credential handling and cleanup",
"Comprehensive logging and error tracking",
"Input validation to prevent injection attacks"
      ]
    }
  },
  {
    title: "Excel Column Filter Web Tool",
    description: "A Python-based web application deployed on Linux for filtering and processing Excel files. Features include template management, multi-column selection, and duplicate removal.",
    tech: ["Python", "Flask", "Pandas", "Nginx", "Linux"],
    category: "Backend",
    image: "/assets/images/projects/excel-tool.png",
    demoLink: "#",
    githubLink: "https://github.com/gelogrammer/python",
    featured: false,
    year: "2026",
    status: "Production",
    details: {
      problem: "Manual Excel processing was time-consuming and inconsistent across the team.",
      solution: "Developed a web-based tool allowing users to upload files, apply saved column filters, and remove duplicates automatically.",
      features: [
"Drag-and-drop file upload",
"Template management for recurring tasks",
"Real-time column searching and filtering",
"High-performance Pandas processing backend"
      ]
    }
  },
  {
    title: "Azure DevOps Data Scraper",
    description: "An automated data-gathering solution for extracting Azure DevOps pipeline metrics, environment classifications, and repository details, exporting them to structured Excel reports.",
    tech: ["Python", "Azure DevOps API", "Excel integration"],
    category: "DevOps",
    image: "/assets/images/projects/azure-scraper-text.svg",
    demoLink: "#",
    githubLink: "https://github.com/gelogrammer/AzureDevOpsTracker",
    featured: false,
    year: "2026",
    status: "Production",
    details: {
      problem: "Lack of visibility into pipeline metrics and environment classifications across multiple projects.",
      solution: "Built a Python scraper that interfaces with the Azure DevOps API to collect and aggregate data into actionable Excel reports.",
      features: [
"Secure PAT authentication",
"Detailed pipeline metric extraction",
"Automated Excel report generation",
"Environment classification analysis"
      ]
    }
  },
  {
    title: "Java CI/CD Pipeline Validator",
    description: "A purpose-built Java web application for testing and validating CI/CD pipelines. Includes status APIs, health monitoring endpoints, and customizable error handling for pipeline verification.",
    tech: ["Java", "Maven", "Tomcat", "Jenkins", "Docker"],
    category: "DevOps",
    image: "/assets/images/projects/java-cicd-text.svg",
    demoLink: "#",
    githubLink: "https://github.com/gelogrammer/cicd_challenge2",
    featured: false,
    year: "2026",
    status: "Completed",
    details: {
      problem: "Difficulty in validating CI/CD pipeline stages with a consistent, controllable test artifact.",
      solution: "Developed a lightweight Java application specifically designed to verify deployment, health checks, and API availability in pipelines.",
      features: [
"RESTful status endpoints",
"Customizable health check logic",
"Docker containerization support",
"Jenkins pipeline integration examples"
      ]
    }
  },
  {
    title: "Dynatrace EC2 Automation",
    description: "Infrastructure-as-Code solution automating the deployment of AWS EC2 instances with pre-configured Dynatrace OneAgent monitoring using Terraform and PowerShell scripts.",
    tech: ["Terraform", "PowerShell", "AWS", "Dynatrace"],
    category: "DevOps",
    image: "/assets/images/projects/dynatrace-automation-text.svg",
    demoLink: "#",
    githubLink: "https://github.com/gelogrammer/Dynatrace-part2",
    featured: false,
    year: "2026",
    status: "Production",
    details: {
      problem: "Manual deployment of monitored infrastructure was slow and prone to configuration drift.",
      solution: "Implemented an IaC approach using Terraform and PowerShell to provision EC2 instances with Dynatrace OneAgent automatically installed and configured.",
      features: [
"Automated EC2 provisioning",
"Seamless Dynatrace OneAgent installation",
"Secure parameter handling",
"PowerShell automation for Windows environments"
      ]
    }
  },
  {
    title: "General DevOps Scripts",
    description: "Automation scripts and helper utilities for general DevOps tasks used across environments (dev and prod). The focus is on safety, repeatability, observability and traceability.",
    tech: ["Bash", "Shell Scripting", "Automation", "Linux"],
    category: "DevOps",
    image: "/assets/images/projects/general-scripts.svg",
    demoLink: "#",
    githubLink: "#",
    featured: false,
    year: "2026",
    status: "Active",
    details: {
      problem: "Routine DevOps tasks like license updates and backups were manual, repetitive, and prone to human error.",
      solution: "Developed a suite of standardized shell scripts with built-in error handling, logging, and recovery mechanisms to automate these critical operations.",
      features: [
"gen-update-licenses: Automated license updates across container volumes",
"Built-in backup and error recovery mechanisms",
"Standardized naming convention (<prefix>-<action>-<scope>.sh)",
"Focus on safety, repeatability, and observability"
      ]
    }
  },
  {
    title: "Department of Entrepreneurship",
    description: "Official website for the Department of Entrepreneurship at PUP, featuring program information, faculty directory, and student resources. Built with modern web technologies for a responsive and accessible user experience.",
    tech: ["React", "Vite", "TailwindCSS"],
    category: "Full Stack",
    image: "/assets/images/projects/pupent_connect.svg",
    demoLink: "https://b4c03560.department-of-entrepreneurship.pages.dev",
    githubLink: "https://github.com/gelogrammer/pupent-connect",
    featured: true,
    year: "2025",
    status: "Production"
  },
  {
    title: "LinguaTech - Multilingual Restaurant Ordering",
    description: "A voice-first dining platform for Filipino restaurants that eliminates language barriers. Customers can speak, point, or tap to order authentic Filipino dishes in any of 10 supported languages, with on-demand menu translation and a smart cart powered by real-time speech recognition.",
    tech: ["React", "TypeScript", "Vite", "Web Speech API", "AI Translation", "TailwindCSS"],
    category: "Full Stack",
    image: "/assets/images/projects/linguatech.png",
    demoLink: "https://linguatech-nine.vercel.app/",
    githubLink: "#",
    featured: true,
    year: "2025",
    status: "Production",
    details: {
      problem: "Foreign diners at Filipino restaurants struggle to read and order from menus written in unfamiliar languages, creating friction and miscommunication at the counter.",
      solution: "Built a voice-first ordering interface that translates menus on demand and converts spoken orders into cart items in real time, with no account creation required.",
      features: [
"Voice-first ordering with speech-to-cart conversion",
"On-demand menu translation across 10 languages",
"Smart cart using real-time keyword detection",
"Speak, point, or tap accessibility options"
      ]
    }
  },
  {
    title: "Pixel Pulse Portfolio - Michael Angelo Lasundin",
    description: "A modern, responsive photography portfolio website showcasing professional photography services in Polangui, Albay (Weddings, Portraits, Events). Built with React and Vite for optimal performance.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Lucide React"],
    category: "Freelance",
    image: "/assets/images/projects/pixel_pulse.jpg",
    demoLink: "https://12d6798b.michael-angelo-lasundin-portfolio.pages.dev",
    githubLink: "https://github.com/gelogrammer/pixel-pulse-portfolio-17",
    featured: true,
    year: "2025",
    status: "Production"
  }
];

// DevOps first (that's the role), then the rest; newest first within each group.
const categoryOrder = ["DevOps", "Full Stack", "Freelance", "Backend", "AI & Research"];

const categoryIcons: Record<string, React.ElementType> = {
  DevOps: Workflow,
  "Full Stack": Code,
  Freelance: Briefcase,
  Backend: Server,
  "AI & Research": Sparkles,
};

// Text placeholders and unrelated stock icons get a consistent panel instead.
const isPlaceholderImage = (src: string) =>
  src.endsWith("-text.svg") || src.endsWith("general-scripts.svg") || src.endsWith("excel-tool.png");

// Logos are shown whole (contained), not cropped like screenshots.
const isLogoImage = (src: string) => src.endsWith("pupent_connect.svg");

const sortedProjects = [...projects].sort((a, b) => {
  const byCategory = (a.category === "DevOps" ? 0 : 1) - (b.category === "DevOps" ? 0 : 1);
  return byCategory !== 0 ? byCategory : Number(b.year) - Number(a.year);
});

function ProjectVisual({ project }: { project: Project }) {
  if (isPlaceholderImage(project.image)) {
    const Icon = categoryIcons[project.category] ?? Code;
    return (
      <div className="absolute inset-0 bg-grid bg-secondary/30 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs text-foreground/70">{project.tech.slice(0, 3).join(" · ")}</span>
      </div>
    );
  }
  if (isLogoImage(project.image)) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} logo`}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
        className="object-contain p-8"
      />
    );
  }
  return (
    <Image
      src={project.image}
      alt={`Screenshot of ${project.title}`}
      fill
      sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
    />
  );
}

function DetailsDialog({ project }: { project: Project }) {
  if (!project.details) return null;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="gap-2">
          <FileText className="w-4 h-4" aria-hidden="true" />
          Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{project.title}</DialogTitle>
          <DialogDescription className="text-base leading-relaxed">{project.description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] mt-2 pr-4">
          <div className="space-y-5">
            <div>
              <h4 className="text-sm font-semibold mb-1">Problem</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.details.problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">Solution</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.details.solution}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Key features</h4>
              <ul className="space-y-1.5">
                {project.details.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
              {project.tech.map((tech) => (
                <li key={tech} className="px-2 py-0.5 rounded bg-secondary text-xs font-mono text-secondary-foreground">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    projects.forEach((p) => (c[p.category] = (c[p.category] ?? 0) + 1));
    return c;
  }, []);

  const filters = ["All", ...categoryOrder.filter((c) => counts[c])];
  const visible = selectedCategory === "All" ? sortedProjects : sortedProjects.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        {/* Header: static so it renders immediately */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            DevOps automation and tooling from my day-to-day work, plus web and mobile apps built for clients.
          </p>
        </header>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects by category">
          {filters.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 min-h-[36px] px-3.5 rounded-full border text-sm transition-colors duration-200 ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50"
                }`}
              >
                {category}
                <span className={`text-xs tabular-nums ${active ? "text-primary-foreground/80" : "text-muted-foreground/70"}`}>
                  {counts[category]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => {
            const showStatus = project.status !== "Production";
            return (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: (index % 3) * 0.04 }}
                className="group terminal-box overflow-hidden flex flex-col hover:border-primary/40 transition-colors duration-200"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border bg-secondary/20">
                  <ProjectVisual project={project} />
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1.5">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{project.year}</span>
                    {showStatus && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-foreground">{project.status}</span>
                      </>
                    )}
                  </p>
                  <h2 className="text-lg font-semibold leading-snug mb-2">{project.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 mb-5 mt-auto" aria-label="Tech stack">
                    {project.tech.slice(0, 4).map((tech) => (
                      <li key={tech} className="px-2 py-0.5 rounded bg-secondary text-xs font-mono text-secondary-foreground">
                        {tech}
                      </li>
                    ))}
                    {project.tech.length > 4 && (
                      <li className="px-1 py-0.5 text-xs text-muted-foreground">+{project.tech.length - 4}</li>
                    )}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.demoLink !== "#" && (
                      <Button asChild size="sm" className="gap-2">
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          Live demo
                        </Link>
                      </Button>
                    )}
                    <DetailsDialog project={project} />
                    {project.githubLink !== "#" && (
                      <Button asChild size="sm" variant="outline" className="gap-2">
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" aria-hidden="true" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        {visible.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No projects in this category yet.</p>
        )}

        {/* CTA */}
        <section className="mt-16 pt-12 border-t border-border text-center">
          <h2 className="text-2xl font-bold mb-3">Have a project in mind?</h2>
          <p className="text-muted-foreground mb-6">I&apos;m open to DevOps roles and freelance work.</p>
          <Button size="lg" asChild>
            <Link href="/monitor">Get in touch</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
