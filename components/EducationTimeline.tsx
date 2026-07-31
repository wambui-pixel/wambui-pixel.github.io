"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export function EducationTimeline({ items }: { items: EducationItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-8">
        {items.map((item, idx) => (
          <div key={item.institution} className="flex gap-6">
            <div className="flex-none w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-md">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
              className="flex-1 bg-card border border-border rounded-2xl p-5 hover:border-primary hover:-translate-y-0.5 transition-[border-color,transform] shadow-sm"
            >
              <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                {item.period}
              </span>
              <h3 className="text-base font-bold text-foreground mb-1">{item.degree}</h3>
              <p className="text-sm font-medium text-primary">{item.institution}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
