"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    tech: ["Angular", "Supabase", "TailwindCSS"],
    link: "#"
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    tech: ["Next.js", "TypeScript", "Shadcn UI"],
    link: "#"
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    tech: ["Laravel", "PostgreSQL", "Bootstrap"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <main className="container py-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Here are some of the projects I've worked on. Each project demonstrates
          different aspects of my skills and expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 rounded-md text-sm"
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
      </motion.div>
    </main>
  );
} 