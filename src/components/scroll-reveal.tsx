"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "fade";
    delay?: number;
    duration?: number;
    className?: string;
}

export function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    className = "",
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants: Record<string, Variant> = {
        hidden: {
            opacity: 0,
            ...(direction === "up" && { y: 50 }),
            ...(direction === "down" && { y: -50 }),
            ...(direction === "left" && { x: 50 }),
            ...(direction === "right" && { x: -50 }),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
