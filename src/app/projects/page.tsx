"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1. Add a detailed description of what the project does and what technologies were used to build it.",
    tech: ["Angular", "Supabase", "TailwindCSS"],
    image: "/assets/images/projects/project1.png",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Project 2",
    description: "Description of project 2. Add a detailed description of what the project does and what technologies were used to build it.",
    tech: ["Next.js", "TypeScript", "Shadcn UI"],
    image: "/assets/images/projects/project2.png",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Project 3",
    description: "Description of project 3. Add a detailed description of what the project does and what technologies were used to build it.",
    tech: ["Laravel", "PostgreSQL", "Bootstrap"],
    image: "/assets/images/projects/project3.png",
    demoLink: "#",
    githubLink: "#",
  }
];

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
  return (
    <main className="container py-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Here are some of the projects I've worked on. Each project demonstrates
          different aspects of my skills and expertise.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="group"
          >
            <Card className="h-full overflow-hidden border border-primary/10 bg-card/50 hover:bg-card/80 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
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
                <Button asChild variant="default" size="sm" className="w-full">
                  <Link href={project.demoLink}>
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={project.githubLink}>
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    Source
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
} 