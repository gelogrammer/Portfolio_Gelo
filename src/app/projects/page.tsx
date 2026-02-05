"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search, Layers, Terminal, Calendar, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
}

const projects: Project[] = [
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
  }
];

const categories = ["All", "Full Stack", "Backend", "AI & Research"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: "Total Projects", value: projects.length, icon: Layers },
    { label: "Technologies", value: new Set(projects.flatMap(p => p.tech)).size, icon: Terminal },
    { label: "In Production", value: projects.filter(p => p.status === "Production").length, icon: Star },
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-mono text-primary/80 tracking-wider uppercase mb-2 inline-block"
          >
            $ ls -la ~/projects/
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent mb-4">
            Featured Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of projects showcasing my expertise in full-stack development, DevOps, and modern web technologies
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="terminal-box p-4"
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-primary/20 bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="font-mono text-xs transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="h-full overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-black/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Status Badge */}
                    <Badge 
                      variant="outline" 
                      className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm border-primary/20"
                    >
                      {project.status}
                    </Badge>

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-2 py-1 bg-background/95 backdrop-blur-sm rounded-md border border-primary/20">
                      <Calendar className="w-3 h-3 text-primary" />
                      <span className="text-xs font-mono text-primary">{project.year}</span>
                    </div>

                    {/* Hover Actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredProject === project.title ? 1 : 0,
                        y: hoveredProject === project.title ? 0 : 20
                      }}
                      className="absolute bottom-4 left-4 right-4 flex gap-2"
                    >
                      <Button asChild size="sm" className="flex-1">
                        <Link href={project.demoLink} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="backdrop-blur-sm bg-background/50">
                        <Link href={project.githubLink}>
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-6">
                    {/* Category */}
                    <Badge variant="outline" className="mb-3 text-xs font-mono">
                      {project.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                        <Terminal className="w-3 h-3" />
                        <span>Tech Stack:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-mono border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="terminal-box p-8 max-w-md mx-auto">
              <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground font-mono text-sm">
                $ echo "No projects found matching your criteria"
              </p>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="terminal-box p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Want to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in working on exciting new projects. Let's build something amazing together!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link href="/monitor">
                  Get in Touch
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/deploy">
                  View Experience
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
