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
  GearIcon,
  RocketIcon,
  HeartIcon,
  TimerIcon,
  ChatBubbleIcon
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
    { name: 'PostgreSQL', level: 'Expert', icon: <TableIcon className="w-8 h-8" /> }
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

const workValues = [
  {
    icon: <RocketIcon className="w-6 h-6" />,
    title: "Innovation",
    description: "Always exploring cutting-edge technologies and creative solutions to complex, evolving problems and challenges."
  },
  {
    icon: <HeartIcon className="w-6 h-6" />,
    title: "Quality",
    description: "Committed to writing clean, maintainable, scalable code with comprehensive testing and documentation."
  },
  {
    icon: <TimerIcon className="w-6 h-6" />,
    title: "Efficiency",
    description: "Focus on optimizing performance and delivering results that meet or exceed expectations within project timelines."
  },
  {
    icon: <ChatBubbleIcon className="w-6 h-6" />,
    title: "Communication",
    description: "Strong stakeholder management with an emphasis on clear, proactive communication and collaborative problem-solving."
  }
];

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
        className="relative min-h-[80vh] md:h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/50 overflow-hidden pt-20 md:pt-0"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center px-4 md:px-8 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-44 h-44 md:w-64 md:h-64 lg:w-[300px] lg:h-[300px]"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative z-10">
              <Image
                src="/assets/images/profile/me.JPEG"
                alt="Angelo John S. Calleja"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <div className="space-y-6 md:space-y-8 text-center md:text-left max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 md:space-y-6"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent tracking-normal leading-normal pb-2 md:pb-4 px-1">
                About Me
              </h1>
              <div className="space-y-3 md:space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3"
                >
                  <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary/80 to-primary/50 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs md:text-sm border border-primary/20 px-3 py-1 rounded-full bg-background/95 shadow-sm hover:border-primary/40 transition-colors mt-2 md:mt-0 mx-auto md:mx-0 w-fit">
                    <HomeIcon className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                    <span className="text-muted-foreground">Manila, Philippines</span>
                  </div>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-xl text-muted-foreground/90 leading-relaxed"
                >
                  Hello! I'm Angelo, a passionate Full Stack Developer with over 2 years of experience in building modern web applications. I specialize in creating <span className="text-primary font-medium">scalable</span>, <span className="text-primary font-medium">user-friendly</span>, and <span className="text-primary font-medium">high-performance</span> solutions.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-xl text-muted-foreground/90 leading-relaxed"
                >
                  My expertise lies in <span className="text-primary font-medium">Angular</span> for frontend development and <span className="text-primary font-medium">Laravel</span> for backend systems. I'm passionate about creating seamless user experiences and robust architectures that scale.
                </motion.p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 md:p-3 rounded-full bg-card hover:bg-card/80 border border-primary/20 shadow-lg transition-colors group"
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
      <div className="container py-12 md:py-24 space-y-24 md:space-y-32 px-4">
        {/* Work Values Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10 md:space-y-16 relative"
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
                  className="text-xs md:text-sm font-medium text-primary/80 tracking-wider uppercase mb-2"
                >
                  What I Value
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
                  Work Philosophy
                </h2>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {workValues.map((value, index) => (
              <motion.div
                key={value.title}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="p-4 md:p-6 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            className="space-y-4 md:space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-xl md:text-2xl font-semibold text-primary flex items-center gap-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FrameIcon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.span>
              Frontend Development
            </motion.h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-4 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
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
                        className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 group hover:shadow-md relative"
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
                          <div className="w-6 h-6 md:w-8 md:h-8">
                            {skill.icon}
                          </div>
                        </motion.div>
                        <div className="text-center">
                          <p className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">{skill.name}</p>
                          <Badge variant="outline" className="mt-1 text-xs md:text-sm group-hover:bg-primary/10 transition-colors">
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
            className="space-y-4 md:space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-xl md:text-2xl font-semibold text-primary flex items-center gap-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <TableIcon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.span>
              Backend & Database
            </motion.h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-4 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
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
                        className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 group hover:shadow-md relative"
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
                          <div className="w-6 h-6 md:w-8 md:h-8">
                            {skill.icon}
                          </div>
                        </motion.div>
                        <div className="text-center">
                          <p className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">{skill.name}</p>
                          <Badge variant="outline" className="mt-1 text-xs md:text-sm group-hover:bg-primary/10 transition-colors">
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
            className="space-y-4 md:space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-xl md:text-2xl font-semibold text-primary flex items-center gap-2"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <GearIcon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.span>
              DevOps & Tools
            </motion.h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-4 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
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
                        className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 group hover:shadow-md relative"
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
                          <div className="w-6 h-6 md:w-8 md:h-8">
                            {skill.icon}
                          </div>
                        </motion.div>
                        <div className="text-center">
                          <p className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">{skill.name}</p>
                          <Badge variant="outline" className="mt-1 text-xs md:text-sm group-hover:bg-primary/10 transition-colors">
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

        {/* Collaboration Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10 md:space-y-16 relative"
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
                  className="text-xs md:text-sm font-medium text-primary/80 tracking-wider uppercase mb-2"
                >
                  Let's Work Together
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
                  Project Collaboration
                </h2>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
              I'm always excited to collaborate on innovative projects. Whether you need a full-stack application, a responsive frontend, or a robust backend system, I'm here to help turn your vision into reality.
            </p>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-primary">What I Bring to Your Project:</h3>
              <ul className="text-base md:text-lg text-muted-foreground space-y-2">
                <li>✨ Modern and scalable architecture design</li>
                <li>🚀 Performance-optimized implementations</li>
                <li>🎨 Beautiful and intuitive user interfaces</li>
                <li>🔒 Secure and reliable backend systems</li>
                <li>📱 Responsive and cross-platform solutions</li>
              </ul>
            </div>
            <motion.div 
              className="pt-6 md:pt-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button 
                size="lg" 
                className="min-w-[200px] shadow-lg hover:shadow-primary/20 transition-all duration-300" 
                asChild
              >
                <Link href="mailto:angelojohn0987@gmail.com" className="flex items-center gap-2">
                  <EnvelopeClosedIcon className="w-4 h-4" />
                  Start a Project
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 