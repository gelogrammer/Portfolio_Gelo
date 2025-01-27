"use client";

import { ThemeProvider } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { LightBulb } from "@/components/light-bulb/light-bulb";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isOn = theme === "light";

  return (
    <div 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-12 h-12 bg-gradient-to-b from-muted to-muted-foreground/20 rounded-[6px] border-2 border-primary/20 flex justify-center items-center shadow-lg cursor-pointer hover:scale-105 transition-transform ml-6"
    >
      <motion.div
        className="relative w-4 h-6 bg-gradient-to-b from-primary-foreground to-primary/80 rounded cursor-pointer border border-primary/20"
        animate={{ top: isOn ? "10%" : "0%" }}
      >
        <div className="absolute top-0 left-0 w-full h-[85%] bg-gradient-to-b from-primary-foreground to-background/80 rounded-[2px]" />
      </motion.div>
    </div>
  );
}

function Navigation() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          Angelo
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navigation />
      <LightBulb />
      {children}
    </ThemeProvider>
  );
} 