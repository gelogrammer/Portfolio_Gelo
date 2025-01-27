import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold">{exp.role}</h3>
        <p className="text-muted-foreground mt-2">{exp.company} • {exp.dates}</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          {exp.responsibilities.map((resp, i) => (
            <li key={i} className="text-sm">{resp}</li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
} 