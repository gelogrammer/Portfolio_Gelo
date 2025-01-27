"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-5xl mx-auto"
      >
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 md:w-72 md:h-72"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-3xl opacity-20 animate-pulse" />
          <Image
            src="/assets/images/profile/me.JPEG"
            alt="Angelo John S. Calleja"
            width={288}
            height={288}
            priority
            className="rounded-full object-cover border-4 border-primary/20 shadow-2xl"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8 text-center md:text-left flex-1 max-w-2xl"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-sm font-medium text-primary/80 tracking-[0.2em] uppercase mb-3">
                Welcome to my portfolio
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-tight">
                Angelo John{" "}
                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  S. Calleja
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground/90 leading-relaxed"
            >
              Full Stack Developer specializing in Angular & Supabase, crafting elegant solutions for modern web applications.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
          >
            <Button 
              size="lg" 
              className="min-w-[140px] shadow-lg hover:shadow-primary/20 transition-all duration-300" 
              asChild
            >
              <Link href="/projects">View Projects</Link>
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
        </motion.div>
      </motion.div>
    </main>
  );
} 