"use client";

import { motion } from "motion/react";
import { ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectTimeline } from "@/components/projects/ProjectTimeline";

export function ProjectPanel({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: number;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-muted-foreground mb-4">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h3
          className="font-black text-foreground mb-6"
          style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          {project.title}
        </h3>
        <div className="mb-6">
          <ProjectTimeline project={project} progress={progress} />
        </div>
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
      </motion.div>
    </div>
  );
}
