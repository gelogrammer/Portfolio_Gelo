"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Code, Rocket, Mail, User } from "lucide-react";
import { motion } from "framer-motion";

interface NavItem {
    label: string;
    path: string;
    icon: React.ElementType;
}

const navItems: NavItem[] = [
    { label: "Home", path: "/", icon: Home },
    { label: "Projects", path: "/projects", icon: Briefcase },
    { label: "Experience", path: "/deploy", icon: Rocket },
    { label: "Skills", path: "/test", icon: Code },
    { label: "About", path: "/about", icon: User },
    { label: "Contact", path: "/monitor", icon: Mail },
];

export function PipelineNav() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
            <nav aria-label="Main" className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16 gap-4">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3 shrink-0 rounded-md">
                        <span className="w-9 h-9 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-sm font-bold text-primary">
                            &gt;_
                        </span>
                        <span className="hidden md:flex flex-col">
                            <span className="text-sm font-semibold leading-none">Angelo Calleja</span>
                            <span className="text-xs text-muted-foreground mt-1 font-mono">devops engineer</span>
                        </span>
                    </Link>

                    {/* Links: icon-only on small screens (with accessible names), icon + label from lg */}
                    <ul className="flex items-center gap-0.5 sm:gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            const Icon = item.icon;

                            return (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        aria-label={item.label}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`relative flex items-center gap-2 min-h-[44px] min-w-[40px] justify-center px-2.5 lg:px-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                                            isActive
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                                        }`}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} aria-hidden="true" />
                                        <span className="hidden lg:inline">{item.label}</span>
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-active"
                                                className="absolute left-2 right-2 -bottom-[11px] h-0.5 rounded-full bg-primary"
                                                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Status */}
                    <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground font-mono shrink-0">
                        <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                        open to opportunities
                    </div>
                </div>
            </nav>
        </header>
    );
}
