"use client";

import { ThemeProvider } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

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

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
} 