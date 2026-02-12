"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLinkIcon, Download } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Accenture",
    location: "Philippines",
    period: "July 2025 - Present",
    type: "Full-Time",
    description: "Managing deployment pipelines and system infrastructure, ensuring high availability for enterprise applications with focus on automation and optimization.",
    achievements: [
      "Proactively identify and resolve Infrastructure Service Delivery (ISD) issues",
      "Manage deployment pipelines ensuring high system uptime",
      "Automate repetitive workflows using scripting and advanced debugging",
      "Collaborate with cross-functional teams for seamless data flow across environments",
      "Optimize system performance through logical problem-solving"
    ],
    technologies: ["CI/CD", "Python", "Git", "Debugging", "Networking", "System Infrastructure"]
  },
  {
    title: "Freelance Developer",
    company: "Camp Simeon Ola",
    location: "Legazpi, Albay",
    period: "Feb 2025 - June 2025",
    type: "Freelance",
    description: "Developed multiple enterprise web and mobile applications for government and military clients, focusing on real-time tracking, communication systems, and SMS alerts.",
    achievements: [
      "Built Fidelity Bond Monitoring System with real-time updates and user management",
      "Developed SMS Alert System using Kotlin for mobile notifications",
      "Created CMAS – RFU-5 Communication System with role-based messaging and audit tracking",
      "Implemented Supabase backend for all projects ensuring data integrity"
    ],
    technologies: ["Angular 17", "Supabase", "Kotlin", "Real-time Systems", "Mobile Development"]
  },
  {
    title: "Part-Time Fullstack Developer",
    company: "Quanby Solutions Inc.",
    location: "Philippines",
    period: "July 2023 - May 2025",
    type: "Part-Time",
    description: "Started as OJT trainee, promoted to intern, and hired part-time based on performance. Specialized in UI/UX design and full-stack development for government and educational systems.",
    achievements: [
      "Designed UI/UX for GSIS Learning Management System (LMS) focusing on user-friendly interfaces",
      "Developed VSU Queuing System with intuitive navigation",
      "Built Business Permit Management System using Angular 17 and Supabase",
      "Streamlined permit applications, processing, and compliance tracking",
      "Improved operational efficiency through digitization, reducing manual paperwork"
    ],
    technologies: ["Angular 17", "Supabase", "UI/UX Design", "TypeScript", "Business Process Automation"]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Bicol University - College of Science",
    location: "Legazpi City, Philippines",
    period: "June 2022 - June 2025",
    description: "Focused on Software Engineering, DevOps, Full-Stack Development, and Logic-Based Problem Solving"
  }
];

const certifications = [
  {
    title: "Amplitude Foundations Badge",
    issuer: "Amplitude Academy",
    date: "2025",
    description: "Product analytics and data tracking certification"
  }
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-medium text-primary/80 tracking-wider uppercase mb-2 inline-block"
          >
            My Journey
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and growing as a developer
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Professional Experience
          </h2>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div className="space-y-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-primary">Key Achievements:</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Education
          </h2>

          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="border-primary/10 hover:border-primary/30 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-base">{edu.school}</CardDescription>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground pt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Certifications
          </h2>

          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="border-primary/10 hover:border-primary/30 transition-all duration-500 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-primary/80 mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {cert.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="terminal-box p-8">
            <h3 className="text-xl font-semibold mb-4">Download Resume</h3>
            <p className="text-muted-foreground mb-6">
              Get a detailed overview of my experience and qualifications
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://www.canva.com/design/DAG-x0bdYeI/o7rsbGjAWtIRcf3VlrNmAQ/view" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" />
                  Download CV
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects" className="gap-2">
                  <ExternalLinkIcon className="w-4 h-4" />
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
