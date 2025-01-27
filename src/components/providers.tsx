"use client";

import { ThemeProvider } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
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
          <ThemeToggle />
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
      {children}
    </ThemeProvider>
  );
} 