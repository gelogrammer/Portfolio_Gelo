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
    <div className="flex items-center">
      <div className="group relative">
        <div 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-12 h-12 bg-gradient-to-b from-muted to-muted-foreground/20 rounded-[6px] border-2 border-primary/20 flex justify-center items-center shadow-lg cursor-pointer hover:scale-105 transition-transform"
        >
          <motion.div
            className="relative w-4 h-6 bg-gradient-to-b from-primary-foreground to-primary/80 rounded cursor-pointer border border-primary/20"
            animate={{ top: isOn ? "10%" : "0%" }}
          >
            <div className="absolute top-0 left-0 w-full h-[85%] bg-gradient-to-b from-primary-foreground to-background/80 rounded-[2px]" />
          </motion.div>
        </div>
        {/* Tooltip */}
        <div className="invisible group-hover:visible absolute top-14 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/90 text-white text-xs rounded-md shadow-lg z-50 whitespace-nowrap">
          Click to toggle theme
          {/* Tooltip arrow */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45" />
        </div>
      </div>
      <div className="relative ml-2">
        {!isOn && (
          <div className="px-3 py-1 bg-muted/50 border border-primary/20 rounded-md shadow-sm">
            <span className="text-sm text-primary font-medium">Dark</span>
          </div>
        )}
        {isOn && (
          <div className="px-3 py-1 bg-muted/50 border border-primary/20 rounded-md shadow-sm">
            <span className="text-sm text-primary font-medium">Light</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50"
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold relative group">
          Angelo
          <motion.div 
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
            whileHover={{ width: "100%" }}
          />
        </Link>
        <div className="flex items-center gap-8">
          <Link 
            href="/about" 
            className="relative group transition-colors hover:text-primary"
          >
            About
            <motion.div 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </Link>
          <Link 
            href="/projects" 
            className="relative group transition-colors hover:text-primary"
          >
            Projects
            <motion.div 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </Link>
          <ThemeSwitch />
        </div>
      </nav>
    </motion.header>
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