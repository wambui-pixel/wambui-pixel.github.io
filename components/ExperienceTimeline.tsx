"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  skills: string[];
}

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="relative overflow-x-clip">
      <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-10 md:space-y-14">
        {experiences.map((exp, i) => {
          const isRight = i % 2 === 0;
          return (
            <div
              key={exp.company}
              className="relative flex gap-6 md:grid md:grid-cols-[1fr_3rem_1fr] md:items-start md:gap-6"
            >
              <div className="flex-none w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-md md:col-start-2 md:mx-auto">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: isRight ? 32 : -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`flex-1 bg-card border border-border rounded-2xl p-5 hover:border-primary transition-colors ${
                  isRight ? "md:col-start-3" : "md:col-start-1"
                }`}
              >
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <span className="text-xs text-muted-foreground">{exp.location}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-0.5">{exp.role}</h3>
                <p className="text-sm font-medium text-primary mb-3">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-muted text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
