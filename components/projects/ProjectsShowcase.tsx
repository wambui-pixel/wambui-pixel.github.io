"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useInView, type PanInfo } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PROJECTS } from "@/lib/projects";
import { ProjectPanel } from "@/components/projects/ProjectPanel";
import { STAGES } from "@/components/projects/ProjectTimeline";

const N = PROJECTS.length;
const STAGE_COUNT = STAGES.length;
const TOTAL_STEPS = N * STAGE_COUNT;
const STAGE_MS = 4500;
const SWIPE_THRESHOLD_PX = 60;

function getAutoAdvanceSnapshot(): boolean {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeAutoAdvance(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

const getServerSnapshot = () => false;

export function ProjectsShowcase() {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { amount: 0.5 });
  const motionAllowed = useSyncExternalStore(subscribeAutoAdvance, getAutoAdvanceSnapshot, getServerSnapshot);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Once the visitor navigates themselves, stop auto-advancing for good so
  // the card never changes out from under someone who is reading it.
  const [userTookControl, setUserTookControl] = useState(false);

  const activeIndex = Math.floor(activeStep / STAGE_COUNT);
  const activeStage = activeStep % STAGE_COUNT;
  const autoAdvance = motionAllowed && inView && !isPaused && !userTookControl;

  // Keyed on activeStep so every change restarts the full stage duration.
  useEffect(() => {
    if (!autoAdvance) return;
    const id = setTimeout(() => setActiveStep((s) => (s + 1) % TOTAL_STEPS), STAGE_MS);
    return () => clearTimeout(id);
  }, [autoAdvance, activeStep]);

  const goTo = (project: number, stage = 0) => {
    setUserTookControl(true);
    const wrapped = (project + N) % N;
    setActiveStep(wrapped * STAGE_COUNT + stage);
  };

  const handleDragEnd = (_: PointerEvent, info: PanInfo) => {
    if (info.offset.x <= -SWIPE_THRESHOLD_PX) goTo(activeIndex + 1);
    else if (info.offset.x >= SWIPE_THRESHOLD_PX) goTo(activeIndex - 1);
  };

  return (
    <section id="projects" className="relative py-20 bg-background overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 55% at 68% 48%, oklch(0.50 0.287 316 / 0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
          What I&apos;ve built
        </p>
        <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Projects
        </ScrollReveal>

        {/* Every project named upfront, so it's clear there are six even to a
            visitor who never interacts with the card. */}
        <div className="hidden md:flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Projects">
          {PROJECTS.map((project, i) => {
            const active = i === activeIndex;
            return (
              <button
                key={project.slug}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => goTo(i)}
                className={`text-sm font-medium px-3.5 py-1.5 rounded-full border transition-colors cursor-pointer ${
                  active
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50"
                }`}
              >
                {project.title}
              </button>
            );
          })}
        </div>

        <motion.div
          ref={cardRef}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          dragSnapToOrigin
          onDragEnd={handleDragEnd}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-2xl shadow-black/20"
        >
          <div className="flex items-center justify-between gap-4 mb-3">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-muted-foreground">
              {String(activeIndex + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <ArrowButton label="Previous project" onClick={() => goTo(activeIndex - 1)}>
                <ChevronLeft className="w-4 h-4" />
              </ArrowButton>
              <ArrowButton label="Next project" onClick={() => goTo(activeIndex + 1)}>
                <ChevronRight className="w-4 h-4" />
              </ArrowButton>
            </div>
          </div>

          <ProjectProgress activeIndex={activeIndex} activeStage={activeStage} onSelect={goTo} />

          {/* All projects share one grid cell, so the card is always as tall
              as the tallest project and doesn't jump when switching. */}
          <div className="grid">
            {PROJECTS.map((project, i) => (
              <ProjectPanel
                key={project.slug}
                project={project}
                active={i === activeIndex}
                activeStage={i === activeIndex ? activeStage : 0}
                onSelectStage={(stage) => goTo(i, stage)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ArrowButtonProps {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}

function ArrowButton({ label, onClick, children }: ArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors cursor-pointer"
    >
      {children}
    </button>
  );
}

interface ProjectProgressProps {
  activeIndex: number;
  activeStage: number;
  onSelect: (project: number) => void;
}

// One segment per project, filling stage by stage.
function ProjectProgress({ activeIndex, activeStage, onSelect }: ProjectProgressProps) {
  return (
    <div className="flex gap-1.5 mb-6">
      {PROJECTS.map((project, i) => {
        const fill = i < activeIndex ? 1 : i === activeIndex ? (activeStage + 1) / STAGE_COUNT : 0;
        return (
          <button
            key={project.slug}
            type="button"
            aria-label={`Go to project ${i + 1}: ${project.title}`}
            aria-current={i === activeIndex}
            onClick={() => onSelect(i)}
            className="group flex-1 py-2 -my-2 cursor-pointer"
          >
            <span className="block h-1 rounded-full bg-muted overflow-hidden group-hover:bg-muted-foreground/30 transition-colors">
              <span
                className="block h-full rounded-full transition-[width] duration-300 ease-out"
                style={{ width: `${fill * 100}%`, backgroundColor: project.color }}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}
