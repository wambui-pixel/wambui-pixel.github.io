import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SkillsLoopSection } from "@/components/SkillsLoopSection";
import { ProjectsJourney } from "@/components/projects/ProjectsJourney";
import { ContactSection } from "@/components/ContactSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExperienceTimeline, type Experience } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { EducationTimeline } from "@/components/EducationTimeline";
import { MiniProjectCard } from "@/components/MiniProjectCard";
import { OTHER_PROJECTS } from "@/lib/otherProjects";
import { WhoIAmSection } from "@/components/WhoIAmSection";

export const metadata: Metadata = {
  title: "Felister Wambui — Portfolio",
  description:
    "Portfolio of Felister Wambui, Mechatronic Engineer, Programmer, CAD Designer, and Web Developer.",
};


const education = [
  {
    degree: "Bachelor of Science — Mechatronic Engineering",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    period: "2017 – 2022",
  },
  {
    degree: "Kenya Certificate of Secondary Education",
    institution: "Buruburu Girls Secondary School",
    period: "2013 – 2016",
  },
];

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Ultraviolet",
    period: "Mar 2024 – May 2026",
    location: "Serbia",
    summary:
      "Led solo development of a real-time WebSocket chatbot, owning reconnects and message ordering. Integrated Stripe and Paddle billing end-to-end and maintained the team's public TypeScript SDK.",
    skills: ["Next.js", "React 19", "TypeScript", "WebSockets", "Stripe", "Paddle", "TypeScript SDK", "CI/CD"],
  },
  {
    role: "Junior Engineer & Systems Administrator",
    company: "CHAJI",
    period: "Jul 2023 – Feb 2024",
    location: "Nairobi",
    summary:
      "Primary technical contact for EV charger pilot programs, diagnosing hardware and software faults and turning performance data into stakeholder-ready updates.",
    skills: ["EV Charger Systems", "Systems Administration", "Hardware Debugging", "Data Analysis", "Stakeholder Communication"],
  },
  {
    role: "Junior Researcher",
    company: "Nakuja Project",
    period: "May 2022 – Dec 2022",
    location: "Nairobi",
    summary:
      "Designed rocket components and built MATLAB flight simulations, integrating avionics, propulsion, and airframe systems for a top-tier competition launch.",
    skills: ["MATLAB", "Open Rocket", "CAD", "Flight Control Systems", "Cross-functional Collaboration"],
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />

      <SkillsLoopSection />

      {/* ── Projects journey ─────────────────────────────── */}
      <ProjectsJourney />

      {/* ── Experience ───────────────────────────────────── */}
      <section id="experience" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Professional history
          </p>
          <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Work Experience
          </ScrollReveal>
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────── */}
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            What I bring
          </p>
          <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Skills
          </ScrollReveal>
          <SkillsGrid />
        </div>
      </section>

      {/* ── Education ────────────────────────────────────── */}
      <section id="education" className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Academic journey
          </p>
          <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Education
          </ScrollReveal>
          <EducationTimeline items={education} />
        </div>
      </section>

      {/* ── Other projects ───────────────────────────────── */}
      <section id="others" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Personal &amp; university work
          </p>
          <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Other Projects
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {OTHER_PROJECTS.filter((p) => p.featured).map((project) => (
              <MiniProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/other-projects"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Show more projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who I Am ─────────────────────────────────────── */}
      <WhoIAmSection />

      {/* ── Contact ──────────────────────────────────────── */}
      <ContactSection />

    </main>
  );
}
