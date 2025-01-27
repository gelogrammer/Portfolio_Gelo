"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = [
  'Angular', 'TypeScript', 'Supabase',
  'Laravel', 'Python', 'UI/UX Design',
  'Next.js', 'Node.js', 'PostgreSQL'
];

export default function About() {
  return (
    <main className="container py-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          I'm a Full Stack Developer with a passion for building beautiful, functional, 
          and user-friendly applications. I specialize in Angular and Supabase, with 
          experience in various modern web technologies.
        </p>

        <h2 className="text-2xl font-bold mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Badge 
                variant="outline" 
                className="w-full py-4 text-center text-lg hover:bg-primary/10"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
} 