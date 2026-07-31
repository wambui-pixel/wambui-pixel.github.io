import { ExternalLink, Lock } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

export function ProjectsFallbackList() {
  return (
    <div className="space-y-4">
      {PROJECTS.map((project) => (
        <div
          key={project.slug}
          className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary transition-colors"
        >
          <div className="h-1" style={{ backgroundColor: project.color }} />
          <div className="p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-card-foreground text-base leading-snug">
                {project.title}
              </h3>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="flex-none text-primary hover:text-primary/80 transition-colors mt-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <Lock className="flex-none w-4 h-4 text-muted-foreground mt-0.5" />
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-lg bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
