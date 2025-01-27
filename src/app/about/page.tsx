"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  HomeIcon, 
  GitHubLogoIcon, 
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  CodeIcon,
  LayersIcon,
  LockClosedIcon,
  FrameIcon,
  TableIcon,
  GearIcon
} from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
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

const skills = {
  frontend: [
    { name: 'Angular', level: 'Expert', icon: <FrameIcon className="w-8 h-8" /> },
    { name: 'TypeScript', level: 'Expert', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'JavaScript', level: 'Expert', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'HTML', level: 'Expert', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'CSS', level: 'Expert', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'SASS', level: 'Advanced', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'Bootstrap', level: 'Expert', icon: <LayersIcon className="w-8 h-8" /> },
    { name: 'TailwindCSS', level: 'Expert', icon: <LayersIcon className="w-8 h-8" /> }
  ],
  backend: [
    { name: 'PHP', level: 'Expert', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'Laravel', level: 'Expert', icon: <FrameIcon className="w-8 h-8" /> },
    { name: 'Node.js', level: 'Advanced', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'Express', level: 'Advanced', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'Python', level: 'Intermediate', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'MySQL', level: 'Expert', icon: <TableIcon className="w-8 h-8" /> },
    { name: 'PostgreSQL', level: 'Expert', icon: <TableIcon className="w-8 h-8" /> },
    { name: 'Supabase', level: 'Expert', icon: <TableIcon className="w-8 h-8" /> }
  ],
  devops: [
    { name: 'Git', level: 'Expert', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'GitHub', level: 'Expert', icon: <GitHubLogoIcon className="w-8 h-8" /> },
    { name: 'GitLab', level: 'Advanced', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'Docker', level: 'Intermediate', icon: <GearIcon className="w-8 h-8" /> },
    { name: 'VS Code', level: 'Expert', icon: <CodeIcon className="w-8 h-8" /> },
    { name: 'Postman', level: 'Expert', icon: <CodeIcon className="w-8 h-8" /> }
  ]
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/gelogrammer",
    icon: <GitHubLogoIcon className="w-6 h-6" />,
    color: "#181717"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: <LinkedInLogoIcon className="w-6 h-6" />,
    color: "#0A66C2"
  },
  {
    name: "Email",
    url: "mailto:angelojohn0987@gmail.com",
    icon: <EnvelopeClosedIcon className="w-6 h-6" />,
    color: "#EA4335"
  }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main className="min-h-screen" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <motion.div
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative flex flex-col md:flex-row gap-12 items-center justify-center px-4 md:px-8 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-3xl opacity-20 animate-pulse" />
            <Image
              src="/assets/images/profile/me.JPEG"
              alt="Angelo John S. Calleja"
              width={300}
              height={300}
              className="rounded-full object-cover border-4 border-primary/20 shadow-2xl relative z-10"
            />
          </motion.div>
          <div className="space-y-8 text-left max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent tracking-normal leading-normal pb-4 px-1">
                Angelo John S. Calleja
              </h1>
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-2xl font-semibold bg-gradient-to-r from-primary/80 to-primary/50 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                  <div className="flex items-center gap-1.5 text-sm border border-primary/20 px-3 py-1 rounded-full bg-background/95 shadow-sm hover:border-primary/40 transition-colors">
                    <HomeIcon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-muted-foreground">Legazpi City, Philippines</span>
                  </div>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-muted-foreground/90 leading-relaxed max-w-xl"
                >
                  Passionate about creating <span className="text-primary font-medium">scalable</span> and <span className="text-primary font-medium">high-performance</span> web applications. 
                  Specializing in <span className="text-primary font-medium">Angular</span> frontends and <span className="text-primary font-medium">Laravel</span> backend systems.
                </motion.p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-card hover:bg-card/80 border border-primary/20 shadow-lg transition-colors group"
                >
                  <div className="text-primary group-hover:text-primary/80 transition-colors">
                    {link.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="container py-24 space-y-32">
        {/* Skills Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-3xl blur-3xl -z-10" />
          <motion.div
            variants={item}
            className="relative"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
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
              className="relative"
            >
              <div className="absolute -inset-x-4 -inset-y-10 bg-primary/5 blur-2xl rounded-full -z-10" />
              <div className="relative flex flex-col items-center">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-medium text-primary/80 tracking-wider uppercase mb-2"
                >
                  Expertise & Technologies
                </motion.span>
                <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
                  Technical Skills
                </h2>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Frontend */}
          <motion.div 
            variants={item} 
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-primary flex items-center gap-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FrameIcon className="w-6 h-6" />
              </motion.span>
              Frontend Development
            </motion.h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.frontend.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 group hover:shadow-md relative"
                      >
                        <motion.div 
                          className="text-primary group-hover:text-primary/80 transition-colors duration-300 transform"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.2
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        <div className="text-center">
                          <p className="font-medium group-hover:text-primary transition-colors">{skill.name}</p>
                          <Badge variant="outline" className="mt-1 group-hover:bg-primary/10 transition-colors">
                            {skill.level}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Backend */}
          <motion.div 
            variants={item} 
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-primary flex items-center gap-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <TableIcon className="w-6 h-6" />
              </motion.span>
              Backend & Database
            </motion.h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.backend.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 group hover:shadow-md relative"
                      >
                        <motion.div 
                          className="text-primary group-hover:text-primary/80 transition-colors duration-300 transform"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.2
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        <div className="text-center">
                          <p className="font-medium group-hover:text-primary transition-colors">{skill.name}</p>
                          <Badge variant="outline" className="mt-1 group-hover:bg-primary/10 transition-colors">
                            {skill.level}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* DevOps */}
          <motion.div 
            variants={item} 
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-primary flex items-center gap-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <GearIcon className="w-6 h-6" />
              </motion.span>
              DevOps & Tools
            </motion.h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.devops.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 group hover:shadow-md relative"
                      >
                        <motion.div 
                          className="text-primary group-hover:text-primary/80 transition-colors duration-300 transform"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.2
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        <div className="text-center">
                          <p className="font-medium group-hover:text-primary transition-colors">{skill.name}</p>
                          <Badge variant="outline" className="mt-1 group-hover:bg-primary/10 transition-colors">
                            {skill.level}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Professional Focus */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent rounded-3xl blur-3xl -z-10" />
          <motion.div
            variants={item}
            className="relative"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, -1, 1, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative"
            >
              <div className="absolute -inset-x-4 -inset-y-10 bg-primary/5 blur-2xl rounded-full -z-10" />
              <div className="relative flex flex-col items-center">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-medium text-primary/80 tracking-wider uppercase mb-2"
                >
                  Core Competencies
                </motion.span>
                <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
                  Professional Focus
                </h2>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={item}>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <LayersIcon className="w-6 h-6 text-primary" />,
                  title: "Architecture & Design",
                  items: [
                    "Scalable application architectures",
                    "Clean code principles",
                    "Reusable component libraries",
                    "Real-time applications"
                  ]
                },
                {
                  icon: <GearIcon className="w-6 h-6 text-primary" />,
                  title: "Performance",
                  items: [
                    "Angular 17 optimization",
                    "Database optimization",
                    "Caching strategies",
                    "State management"
                  ]
                },
                {
                  icon: <LockClosedIcon className="w-6 h-6 text-primary" />,
                  title: "Security",
                  items: [
                    "Authentication systems",
                    "OWASP guidelines",
                    "Code quality assurance",
                    "Row Level Security"
                  ]
                }
              ].map((focus, index) => (
                <motion.div
                  key={focus.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5 relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 space-y-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                        }}
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                      >
                        {focus.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {focus.title}
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        {focus.items.map((item, itemIndex) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.2) + (itemIndex * 0.1) }}
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-2"
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 rounded-full bg-primary"
                              animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                delay: itemIndex * 0.2
                              }}
                            />
                            <span className="group-hover:text-primary/90 transition-colors">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 