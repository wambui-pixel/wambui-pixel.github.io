"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Lock } from "lucide-react";

type Project = {
  id: number;
  title: string;
  gradient: string;
  description: string;
  tags: string[];
  github: string | null;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Magistrala IoT Platform",
    gradient: "from-indigo-500 via-violet-500 to-purple-600",
    description:
      "Browser-based interface for managing IoT systems — provision devices, configure real-time rules, monitor alarms, and build dashboards without writing code.",
    tags: ["Next.js", "React", "TypeScript", "IoT"],
    github: null,
  },
  {
    id: 2,
    title: "Magistrala Website",
    gradient: "from-blue-500 via-sky-500 to-cyan-500",
    description:
      "Documentation and marketing website for Magistrala, an enterprise-grade open-source IoT platform powering smart energy, water metering, and agriculture solutions.",
    tags: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "Cloudflare"],
    github: "https://github.com/absmach/magistrala-website",
  },
  {
    id: 3,
    title: "FluxMQ Dashboard",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    description:
      "Dashboard for managing FluxMQ, a high-performance open-source message broker supporting MQTT, AMQP, and CoAP with sub-10ms latency at 300K–500K msgs/sec.",
    tags: ["Go", "TypeScript", "MQTT", "AMQP", "CoAP"],
    github: "https://github.com/absmach/fluxmq",
  },
  {
    id: 4,
    title: "Ultraviolet Website",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    description:
      "Marketing and content hub for Ultraviolet, a confidential computing startup. Built with Astro and Tailwind CSS for blazing-fast static delivery, featuring a reusable component architecture and optimized imagery.",
    tags: ["Astro", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ultravioletrs/website",
  },
  {
    id: 5,
    title: "Propeller UI",
    gradient: "from-orange-500 via-amber-400 to-yellow-400",
    description:
      "Maintained the product website and UI for Propeller, a WebAssembly workload orchestrator for the Cloud-Edge continuum — enabling portable, sandboxed app deployment from cloud servers to edge microcontrollers.",
    tags: ["MDX", "TypeScript", "WebAssembly", "Edge Computing"],
    github: null,
  },
  {
    id: 6,
    title: "IoT Client SDKs",
    gradient: "from-teal-500 via-emerald-400 to-green-500",
    description:
      "Authored and maintained official client libraries for Magistrala IoT platform in TypeScript and Python, enabling developers to integrate device provisioning, messaging, and data pipelines across language ecosystems.",
    tags: ["TypeScript", "Python", "npm", "PyPI", "IoT"],
    github: "https://github.com/absmach/magistrala-sdk-ts",
  },
];

export function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
              What I&apos;ve built
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-72 sm:w-80 rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Gradient banner */}
                <div
                  className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-white/20 text-7xl font-black select-none">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-card-foreground text-base leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
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
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View on GitHub
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                      <Lock className="w-3.5 h-3.5" />
                      Private Repository
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
