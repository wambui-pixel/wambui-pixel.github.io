import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { OTHER_PROJECTS } from "@/lib/otherProjects";
import { MiniProjectCard } from "@/components/MiniProjectCard";

export const metadata: Metadata = {
  title: "Other Projects — Felister Wambui",
  description: "Personal and university side projects by Felister Wambui.",
};

export default function OtherProjectsPage() {
  return (
    <main className="pt-28 pb-20 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link
          href="/#others"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
          Personal &amp; university work
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">Other Projects</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((project) => (
            <MiniProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
