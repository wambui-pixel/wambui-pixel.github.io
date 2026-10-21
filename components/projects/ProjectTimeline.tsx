"use client";

import { CircleAlert, Hammer, Lightbulb, TrendingUp, type LucideIcon } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Stage {
  key: "problem" | "built" | "solution" | "impact";
  label: string;
  icon: LucideIcon;
}

export const STAGES: Stage[] = [
  { key: "problem", label: "Problem", icon: CircleAlert },
  { key: "built", label: "Built", icon: Hammer },
  { key: "solution", label: "Solution", icon: Lightbulb },
  { key: "impact", label: "Impact", icon: TrendingUp },
];

interface ProjectTimelineProps {
  project: Project;
  activeStage: number;
  onSelectStage?: (stage: number) => void;
}

export function ProjectTimeline({ project, activeStage, onSelectStage }: ProjectTimelineProps) {
  const fillPercent = (activeStage / (STAGES.length - 1)) * 100;

  return (
    <div>
      <div className="relative flex items-center mb-6">
        <div className="absolute left-[12.5%] right-[12.5%] top-4 -translate-y-1/2 h-px bg-border" />
        <div
          className="absolute left-[12.5%] top-4 -translate-y-1/2 h-px transition-[width] duration-300 ease-out"
          style={{ width: `calc(75% * ${fillPercent / 100})`, backgroundColor: project.color }}
        />
        {STAGES.map((stage, i) => {
          const Icon = stage.icon;
          const reached = i <= activeStage;
          return (
            <button
              key={stage.key}
              type="button"
              onClick={() => onSelectStage?.(i)}
              aria-current={i === activeStage ? "step" : undefined}
              className="relative z-10 flex-1 flex flex-col items-center gap-2 cursor-pointer group"
            >
              <span
                className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200 group-hover:scale-110"
                style={{
                  borderColor: reached ? project.color : "var(--border)",
                  backgroundColor: reached ? project.color : "var(--card)",
                }}
              >
                <Icon
                  className="w-4 h-4"
                  style={{ color: reached ? "var(--background)" : "var(--muted-foreground)" }}
                />
              </span>
              <span
                className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  i === activeStage ? "text-foreground" : "text-muted-foreground/60 group-hover:text-muted-foreground"
                }`}
              >
                {stage.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Every stage's text shares one grid cell, so the card is always as
          tall as the longest stage and doesn't jump while stepping through. */}
      <div className="grid">
        {STAGES.map((stage, i) => (
          <p
            key={stage.key}
            aria-hidden={i !== activeStage}
            className={`[grid-area:1/1] text-base text-muted-foreground leading-relaxed transition-all duration-200 ${
              i === activeStage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5 invisible"
            }`}
          >
            {project[stage.key]}
          </p>
        ))}
      </div>
    </div>
  );
}
