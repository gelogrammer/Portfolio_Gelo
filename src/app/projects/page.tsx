"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLinkIcon, GitHubLogoIcon, MagnifyingGlassIcon, LayersIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  demoLink: string;
  githubLink: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Business Permit Management System",
    description: "A centralized platform designed to streamline, digitize, and automate business operations, primarily focused on business permit applications, processing, and compliance monitoring.",
    tech: ["React", "Firebase", "TailwindCSS", "TypeScript"],
    category: "Full Stack",
    image: "/assets/images/projects/BMS_SCREENSHOT.jpg",
    demoLink: "https://quanby-bms.web.app/login",
    githubLink: "#",
    featured: true,
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
  }
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI & Research"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <motion.div
        style={{ opacity, scale }}
        className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-background to-background/50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative space-y-8 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative inline-block"
            >
              <div className="absolute -inset-x-4 -inset-y-2 bg-primary/5 blur-2xl rounded-full -z-10" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
                My Projects
              </h1>
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore my portfolio of projects showcasing my expertise in full-stack development,
              from responsive frontends to scalable backend solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Filters and Search Section */}
      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category === "All" && <LayersIcon className="mr-2 h-4 w-4" />}
                {category}
              </Button>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full md:w-64"
          >
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-primary/20 bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
            />
            <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </motion.div>
        </div>

        {/* Featured Projects Section */}
        {selectedCategory === "All" && searchQuery === "" && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">Featured</span> Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.filter(p => p.featured).map((project) => (
                <FeaturedProjectCard key={project.title} project={project} />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={item}
      className="group"
    >
      <Card className="h-full overflow-hidden border border-primary/10 bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-64 md:h-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col p-6">
            <Badge variant="outline" className="w-fit mb-4">
              {project.category}
            </Badge>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-3">
              <Button asChild variant="default" size="sm" className="flex-1">
                <Link href={project.demoLink}>
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href={project.githubLink}>
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  Source
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={item}
      className="group"
    >
      <Card className="h-full overflow-hidden border border-primary/10 bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Badge 
            variant="outline" 
            className="absolute top-4 right-4 bg-background/95 shadow-sm"
          >
            {project.category}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/10 rounded-md text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button 
            asChild 
            variant="default" 
            size="sm" 
            className="w-full shadow-sm hover:shadow-md transition-shadow"
          >
            <Link href={project.demoLink}>
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="w-full shadow-sm hover:shadow-md transition-shadow"
          >
            <Link href={project.githubLink}>
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
              Source
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 