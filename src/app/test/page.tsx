"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  CodeIcon,
  LayersIcon,
  TableIcon,
  GearIcon,
  FrameIcon
} from "@radix-ui/react-icons";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FrameIcon className="w-6 h-6" />,
    color: "text-neon-cyan",
    skills: [
      { name: 'Angular 17', level: 'Expert' },
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'HTML/CSS', level: 'Expert' },
      { name: 'UI/UX Design', level: 'Advanced' },
      { name: 'Responsive Design', level: 'Expert' }
    ]
  },
  {
    title: "Backend & Database",
    icon: <TableIcon className="w-6 h-6" />,
    color: "text-neon-magenta",
    skills: [
      { name: 'PHP/Laravel', level: 'Expert' },
      { name: 'Python', level: 'Advanced' },
      { name: 'Supabase', level: 'Expert' },
      { name: 'MySQL', level: 'Expert' },
      { name: 'Firebase', level: 'Advanced' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'Real-time Systems', level: 'Advanced' }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <GearIcon className="w-6 h-6" />,
    color: "text-neon-green",
    skills: [
      { name: 'Git', level: 'Expert' },
      { name: 'CI/CD', level: 'Expert' },
      { name: 'Debugging', level: 'Expert' },
      { name: 'Networking', level: 'Advanced' },
      { name: 'Amplitude', level: 'Certified' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'System Infrastructure', level: 'Advanced' },
      { name: 'Automation', level: 'Expert' }
    ]
  },
  {
    title: "Mobile Development",
    icon: <LayersIcon className="w-6 h-6" />,
    color: "text-neon-yellow",
    skills: [
      { name: 'Kotlin', level: 'Advanced' },
      { name: 'Android Development', level: 'Advanced' },
      { name: 'SMS Integration', level: 'Advanced' },
      { name: 'Mobile UI/UX', level: 'Advanced' }
    ]
  }
];

export default function SkillsPage() {
  const containerRef = useRef(null);

  return (
    <main className="min-h-screen py-20" ref={containerRef}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
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
            My Expertise
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of technologies and tools I work with daily
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={item}
              className="space-y-6"
            >
              <motion.h2 
                className={`text-2xl font-semibold flex items-center gap-3 ${category.color}`}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  {category.icon}
                </motion.span>
                {category.title}
              </motion.h2>

              <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.05 }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 group hover:shadow-md"
                      >
                        <motion.div 
                          className="text-primary group-hover:text-primary/80 transition-colors duration-300"
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.2
                          }}
                        >
                          <CodeIcon className="w-8 h-8" />
                        </motion.div>
                        <div className="text-center">
                          <p className="font-medium group-hover:text-primary transition-colors text-sm">
                            {skill.name}
                          </p>
                          <Badge variant="outline" className="mt-2 group-hover:bg-primary/10 transition-colors text-xs">
                            {skill.level}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="terminal-box p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-primary">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring <span className="text-primary font-medium">AI/ML integrations</span>, 
              <span className="text-primary font-medium"> Microservices</span>, and 
              <span className="text-primary font-medium"> Cloud Native</span> architectures.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
