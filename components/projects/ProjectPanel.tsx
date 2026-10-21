"use client";

import { ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectTimeline } from "@/components/projects/ProjectTimeline";

interface ProjectPanelProps {
  project: Project;
  active: boolean;
  activeStage: number;
  onSelectStage?: (stage: number) => void;
}

export function ProjectPanel({ project, active, activeStage, onSelectStage }: ProjectPanelProps) {
  return (
    <div
      aria-hidden={!active}
      inert={!active}
      className={`[grid-area:1/1] flex flex-col transition-all duration-300 ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 invisible"
      }`}
    >
      <h3
        className="font-black text-foreground mb-6"
        style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
      >
        {project.title}
      </h3>
      <div className="mb-6">
        <ProjectTimeline project={project} activeStage={activeStage} onSelectStage={onSelectStage} />
      </div>
      {/* Pinned to the card's bottom edge so it sits in the same spot for
          every project, regardless of how long its title and copy are. */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm font-medium px-3 py-1.5 rounded-lg bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            View on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-base text-muted-foreground">
            <Lock className="w-4 h-4" />
            Private repository
          </span>
        )}
      </div>
    </div>
  );
}
