"use client";

import { motion } from "motion/react";
import { CircleAlert, Hammer, Lightbulb, TrendingUp, type LucideIcon } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Stage {
  key: "problem" | "built" | "solution" | "impact";
  label: string;
  icon: LucideIcon;
}

const STAGES: Stage[] = [
  { key: "problem", label: "Problem", icon: CircleAlert },
  { key: "built", label: "Built", icon: Hammer },
  { key: "solution", label: "Solution", icon: Lightbulb },
  { key: "impact", label: "Impact", icon: TrendingUp },
];

export function ProjectTimeline({ project, progress }: { project: Project; progress: number }) {
  const clamped = Math.min(Math.max(progress, 0), 1);
  const stageFloat = clamped * STAGES.length;
  const activeStage = Math.min(Math.floor(stageFloat), STAGES.length - 1);
  const fillPercent = clamped * 100;
  const active = STAGES[activeStage];

  return (
    <div>
      <div className="relative flex items-center mb-6">
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-px bg-border" />
        <div
          className="absolute left-4 top-1/2 -translate-y-1/2 h-px"
          style={{ width: `calc((100% - 32px) * ${fillPercent / 100})`, backgroundColor: project.color }}
        />
        {STAGES.map((stage, i) => {
          const Icon = stage.icon;
          const reached = i <= activeStage;
          return (
            <div key={stage.key} className="relative z-10 flex-1 flex flex-col items-center gap-2">
              <div
                className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200"
                style={{
                  borderColor: reached ? project.color : "var(--border)",
                  backgroundColor: reached ? project.color : "var(--card)",
                }}
              >
                <Icon
                  className="w-4 h-4"
                  style={{ color: reached ? "var(--background)" : "var(--muted-foreground)" }}
                />
              </div>
              <span
                className={`text-[11px] font-bold uppercase tracking-wider ${
                  i === activeStage ? "text-foreground" : "text-muted-foreground/60"
                }`}
              >
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>

      <motion.p
        key={active.key}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-base text-muted-foreground leading-relaxed min-h-[4.5em]"
      >
        {project[active.key]}
      </motion.p>
    </div>
  );
}
