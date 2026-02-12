"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
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
    description: "Managing enterprise deployment pipelines and infrastructure",
    color: "text-neon-green",
    bgColor: "bg-neon-green/10"
  },
  {
    icon: Code,
    title: "Full Stack Developer",
    subtitle: "Quanby Solutions Inc.",
    description: "Built government and educational systems with Angular 17 & Supabase",
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan/10"
  },
  {
    icon: Rocket,
    title: "Freelance Developer",
    subtitle: "Various Clients",
    description: "Created enterprise web and mobile applications for government clients",
    color: "text-neon-magenta",
    bgColor: "bg-neon-magenta/10"
  }
];

const values = [
  {
    icon: Target,
    title: "Problem Solver",
    description: "Expert in JavaScript and logic-based troubleshooting, translating complex business requirements into technical solutions."
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Passionate about building scalable, high-performance applications with focus on data integrity and optimization."
  },
  {
    icon: Heart,
    title: "Quality Driven",
    description: "Committed to clean, maintainable code with comprehensive testing and documentation standards."
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Strong emphasis on clear communication and collaborative problem-solving in cross-functional teams."
  }
];

const expertise = [
  { name: "Angular 17", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Supabase", level: 85 },
  { name: "Python", level: 80 },
  { name: "PHP/Laravel", level: 85 },
  { name: "CI/CD", level: 90 },
  { name: "DevOps", level: 85 },
  { name: "UI/UX Design", level: 80 },
];

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
              <Card className="border-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden">
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
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full border border-primary/20 flex items-center gap-2"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(0,255,65,0.3)',
                          '0 0 30px rgba(0,255,65,0.5)',
                          '0 0 20px rgba(0,255,65,0.3)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-white"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <span className="text-xs font-mono font-bold text-background">AVAILABLE</span>
                    </motion.div>
                  </div>

                  {/* Info panel */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">Angelo John S. Calleja</h2>
                      <p className="text-sm text-primary font-mono">Software Engineer</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Taguig, Philippines</span>
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

                    <div className="pt-4 border-t border-primary/10">
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
                  className="text-sm font-mono text-primary/80 tracking-wider uppercase mb-2 inline-block"
                >
                  $ cat ~/about.txt
                </motion.span>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent mb-4">
                  About Me
                </h1>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base md:text-lg">
                  Hello! I'm a <span className="text-primary font-medium">highly analytical Computer Science graduate</span> from Bicol University with professional experience in <span className="text-primary font-medium">DevOps at Accenture</span> and extensive full-stack development expertise.
                </p>
                <p className="text-base md:text-lg">
                  I specialize in <span className="text-primary font-medium">JavaScript</span> and <span className="text-primary font-medium">logic-based troubleshooting</span>, with a proven ability to translate complex business requirements into efficient technical solutions. My work focuses on <span className="text-primary font-medium">data integrity</span> and <span className="text-primary font-medium">scalable tracking architecture</span>.
                </p>
                <p className="text-base md:text-lg">
                  Currently, I'm managing enterprise deployment pipelines at Accenture while continuously expanding my expertise in modern web technologies, cloud infrastructure, and automation.
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
                    <Card className={`border ${highlight.bgColor} border-primary/10 hover:border-primary/30 transition-all duration-300 group h-full`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 ${highlight.bgColor} rounded-lg ${highlight.color} group-hover:scale-110 transition-transform`}>
                            <highlight.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm mb-0.5">{highlight.title}</h3>
                            <p className="text-xs text-primary mb-1">{highlight.subtitle}</p>
                            <p className="text-xs text-muted-foreground line-clamp-2">{highlight.description}</p>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
              What I Value
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card className="border-primary/10 bg-card/50 hover:border-primary/30 transition-all duration-500 group h-full">
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

        {/* Skills Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
              Core Expertise
            </span>
          </h2>

          <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs font-mono text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 1 + index * 0.05, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline / Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-8">
              {[
                {
                  year: "2025",
                  title: "DevOps Engineer @ Accenture",
                  description: "Leading infrastructure and deployment automation for enterprise clients",
                  icon: Rocket,
                  color: "text-neon-green"
                },
                {
                  year: "2025",
                  title: "Freelance Developer",
                  description: "Built mission-critical systems for Camp Simeon Ola including communication and monitoring platforms",
                  icon: Code,
                  color: "text-neon-cyan"
                },
                {
                  year: "2023-2025",
                  title: "Full Stack Developer @ Quanby",
                  description: "Promoted from OJT to part-time developer, built government systems with Angular 17",
                  icon: Briefcase,
                  color: "text-neon-magenta"
                },
                {
                  year: "2022-2025",
                  title: "BS Computer Science",
                  description: "Graduated from Bicol University - College of Science",
                  icon: Award,
                  color: "text-neon-yellow"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className={`relative flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 -ml-[5px] bg-primary rounded-full border-2 border-background z-10">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <Card className="border-primary/10 bg-card/50 hover:border-primary/30 transition-all duration-500 group">
                      <CardContent className="p-5">
                        <div className={`flex items-start gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                          <div className={`p-2 bg-primary/10 rounded-lg ${item.color} group-hover:scale-110 transition-transform`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2 font-mono text-xs">
                              {item.year}
                            </Badge>
                            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Social Links & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-center"
        >
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
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <Button asChild variant="outline" className="gap-2">
                    <Link href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined}>
                      {link.icon === 'github' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
                      {link.icon === 'linkedin' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}
                      {link.icon === 'facebook' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.603-2.797 4.16v1.972h3.618l-1.19 3.667h-2.428v7.896c1 5.643 7.552 2.659 7.552-3.82V4.5A4.5 4.5 0 0 0 17.17 0H4.5A4.5 4.5 0 0 0 0 4.5v15.372c0 5.852 5.021 7.632 9.101 3.819z" /></svg>}
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
                <Link href="https://www.canva.com/design/DAG-x0bdYeI/o7rsbGjAWtIRcf3VlrNmAQ/edit?utm_content=DAG-x0bdYeI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
