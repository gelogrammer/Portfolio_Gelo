"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function LightBulb() {
  const { theme, setTheme } = useTheme();
  const [isOn, setIsOn] = useState(theme === "light");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setAudio(new Audio("https://www.fesliyanstudios.com/play-mp3/387"));
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsOn(theme === "light");
    }
  }, [theme, mounted]);

  const toggleLight = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setIsOn(newTheme === "light");
    audio?.play();
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-20 right-8 z-50 hidden md:block">
      {/* Wire */}
      <div className="absolute left-1/2 -top-36 w-1 h-48 bg-primary/80 -translate-x-1/2" />

      {/* Bulb */}
      <motion.div
        onClick={toggleLight}
        className={`relative w-12 h-12 rounded-full ${
          isOn ? "bg-yellow-100" : "bg-muted"
        } cursor-pointer`}
        animate={{
          boxShadow: isOn
            ? "0 0 30px rgba(255,255,0,0.6), 0 0 60px rgba(255,255,0,0.4), 0 0 80px rgba(255,255,0,0.2)"
            : "none",
        }}
      >
        {/* Bulb Base */}
        <div
          className={`absolute left-[14px] -top-[30px] w-[20px] h-12 ${
            isOn ? "bg-yellow-100" : "bg-muted"
          } rounded-[6px] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[18px] before:bg-primary/80`}
        />

        {/* Left curve */}
        <span className="absolute -top-2 -left-1 w-4 h-4 bg-transparent rotate-[342deg] rounded-br-[24px] shadow-[12px_12px_0_6px_var(--muted)]" />

        {/* Right curve */}
        <span className="absolute -top-2 -right-1 w-4 h-4 bg-transparent rotate-[17deg] rounded-bl-[24px] shadow-[-12px_12px_0_6px_var(--muted)]" />

        {/* Glow effect */}
        {isOn && (
          <motion.div
            className="absolute top-1/2 left-1/2 w-20 h-20 bg-yellow-100 rounded-full -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            style={{ filter: "blur(24px)" }}
          />
        )}
      </motion.div>
    </div>
  );
} 