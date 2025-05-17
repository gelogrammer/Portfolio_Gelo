"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LightBulb } from "@/components/light-bulb/light-bulb";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 md:p-24">
      <LightBulb />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-6 md:gap-16 max-w-5xl mx-auto"
      >
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 md:w-80 md:h-80 mb-4 md:mb-0"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/70 to-primary/50 blur-2xl opacity-30 animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/10 transition-all duration-300 hover:scale-105">
            <Image
              src="/assets/images/profile/me.JPEG"
              alt="Angelo John S. Calleja"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6 text-center md:text-left flex-1 max-w-2xl"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xs md:text-sm font-medium text-primary/80 tracking-[0.2em] uppercase mb-2 md:mb-3">
                Welcome to my portfolio
              </h2>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-tight">
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
              className="text-sm md:text-lg text-muted-foreground/90 leading-relaxed"
            >
              Full Stack Developer specializing in Angular & Supabase, crafting elegant solutions for modern web applications.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[140px] shadow-lg hover:shadow-primary/20 transition-all duration-300" 
              asChild
            >
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto min-w-[140px] hover:shadow-lg transition-all duration-300" 
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