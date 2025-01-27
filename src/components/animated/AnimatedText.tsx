"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function AnimatedText({ text }: { text: string }) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold"
    >
      {text}
    </motion.span>
  );
} 