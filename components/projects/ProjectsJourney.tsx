"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PROJECTS } from "@/lib/projects";
import { ProjectPanel } from "@/components/projects/ProjectPanel";
import { ProjectsFallbackList } from "@/components/projects/ProjectsFallbackList";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const N = PROJECTS.length;
const SEGMENT_VH = 80;

function getShowJourneySnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeShowJourney(callback: () => void) {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionQuery.addEventListener("change", callback);
  return () => motionQuery.removeEventListener("change", callback);
}

const getServerSnapshot = () => false;

export function ProjectsJourney() {
  const showJourney = useSyncExternalStore(subscribeShowJourney, getShowJourneySnapshot, getServerSnapshot);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const lastIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [localProgress, setLocalProgress] = useState(0);

  useEffect(() => {
    if (!showJourney) return;
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: el,
        scroller: window,
        start: "top top",
        end: () => `+=${N * window.innerHeight * (SEGMENT_VH / 100)}`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const rawT = self.progress * N;
          const index = Math.min(Math.floor(rawT), N - 1);
          if (index !== lastIndexRef.current) {
            lastIndexRef.current = index;
            setActiveIndex(index);
          }
          setLocalProgress(rawT - index);
        },
      });
    }, el);

    return () => {
      ctx.revert();
      scrollTriggerRef.current = null;
    };
  }, [showJourney]);

  const goToProject = (index: number) => {
    const st = scrollTriggerRef.current;
    if (!st) return;
    const targetProgress = index / N;
    const scrollY = st.start + targetProgress * (st.end - st.start);
    gsap.to(window, { scrollTo: scrollY, duration: 0.8, ease: "power2.inOut" });
  };

  return (
    <section id="projects" className="relative bg-background">
      {showJourney ? (
        <div ref={sectionRef} className="relative h-screen overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 45% 55% at 68% 48%, oklch(0.50 0.287 316 / 0.16) 0%, transparent 70%)",
            }}
          />

          <div className="absolute inset-0 z-10 flex flex-col justify-center py-24">
            <div className="max-w-6xl mx-auto w-full px-6 sm:px-12 xl:px-16">
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
                What I&apos;ve built
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Projects</h2>
            </div>

            <div className="w-full px-6 sm:px-12 xl:px-16 mt-8 md:mt-14 flex justify-center">
              <div className="w-full max-w-2xl rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-12 shadow-2xl shadow-black/20">
                <ProjectPanel
                  project={PROJECTS[activeIndex]}
                  index={activeIndex}
                  total={N}
                  progress={localProgress}
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col gap-3">
            {PROJECTS.map((project, i) => (
              <Button
                key={project.slug}
                type="button"
                variant="ghost"
                aria-label={`Go to project ${i + 1}: ${project.title}`}
                aria-current={i === activeIndex}
                onClick={() => goToProject(i)}
                className="size-2.5 rounded-full border border-border p-0 transition-transform hover:bg-transparent dark:hover:bg-transparent"
                style={{
                  backgroundColor: i === activeIndex ? project.color : "transparent",
                  transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            What I&apos;ve built
          </p>
          <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Projects
          </ScrollReveal>
          <ProjectsFallbackList />
        </div>
      )}
    </section>
  );
}
