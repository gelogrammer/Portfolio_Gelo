"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LightBulb } from "@/components/light-bulb/light-bulb";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/gelogrammer",
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: "Email",
    url: "mailto:angelojohn0987@gmail.com",
    icon: <Mail className="w-6 h-6" />,
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax */}
      <motion.div
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
              priority
              className="rounded-full object-cover border-4 border-primary/20 shadow-2xl relative z-10"
            />
          </motion.div>
          <div className="space-y-8 text-left max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-sm font-medium text-primary/80 tracking-wider uppercase"
              >
                Welcome to my portfolio
              </motion.span>
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
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="min-w-[140px] shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                asChild
              >
                <Link href="/projects" className="flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="min-w-[140px] hover:shadow-lg transition-all duration-300" 
                asChild
              >
                <Link href="/about">About Me</Link>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 pt-4"
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
    </main>
  );
} 