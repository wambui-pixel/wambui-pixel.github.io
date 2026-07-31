import { ExternalLink } from "lucide-react";
import type { MiniProject } from "@/lib/otherProjects";

export function MiniProjectCard({ project }: { project: MiniProject }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary hover:-translate-y-0.5 transition-[border-color,transform] shadow-sm">
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-card-foreground text-sm leading-snug">{project.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View on GitHub <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
