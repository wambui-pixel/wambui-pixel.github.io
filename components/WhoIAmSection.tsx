"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion } from "motion/react";
import { Network, Hammer, Puzzle, Sparkles, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Trait {
  icon: LucideIcon;
  belief: string;
  evidence: string;
}

const TRAITS: Trait[] = [
  {
    icon: Network,
    belief: "Systems thinker",
    evidence:
      "Doesn't treat hardware and software as separate disciplines. Nakuja's avionics integration, CHAJI's EV charger hardware and software debugging, Ultraviolet's SDK bridging a Go backend to TypeScript frontends, all the same instinct: understand the whole system, not just one layer.",
  },
  {
    icon: Hammer,
    belief: "Builder, not just a maintainer",
    evidence:
      "Solo-owned the WebSocket chatbot architecture at Ultraviolet from scratch, plus a dozen personal side projects built because the idea was interesting, not because a ticket said so.",
  },
  {
    icon: Puzzle,
    belief: "Solves problems, not just tickets",
    evidence:
      "Built out Stripe and Paddle billing end-to-end because half-working payments aren't solved, wrote SDK docs so external developers weren't stuck guessing, and translated technical findings into plain updates at CHAJI so non-technical stakeholders could actually act on them.",
  },
  {
    icon: Sparkles,
    belief: "Cross-disciplinary and still curious",
    evidence:
      "CAD, welding, CNC, PCB design, machine learning, web development. Keeps picking up new domains instead of settling into one lane.",
  },
];

const N = TRAITS.length;
const CYCLE_MS = 2400;

function getAutoCycleSnapshot(): boolean {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeAutoCycle(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

const getServerSnapshot = () => false;

export function WhoIAmSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoCycle = useSyncExternalStore(subscribeAutoCycle, getAutoCycleSnapshot, getServerSnapshot);

  useEffect(() => {
    if (!autoCycle || isHovering) return;
    const id = setInterval(() => setActiveIndex((i) => (i + 1) % N), CYCLE_MS);
    return () => clearInterval(id);
  }, [autoCycle, isHovering]);

  return (
    <section id="who-i-am" className="py-20 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
          How I think
        </p>
        <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-10">
          Who I Am
        </ScrollReveal>

        {/* Connecting stepper: a moving spotlight ties the traits together as one
            system rather than four unrelated cards, echoing the Hero ring's pulse
            and the Projects section's stepper line. */}
        <div className="relative hidden sm:flex items-center mb-8 px-5">
          <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 h-px bg-border" />
          <motion.div
            className="absolute left-5 top-1/2 -translate-y-1/2 h-px bg-primary"
            animate={{ width: `calc((100% - 40px) * ${activeIndex / (N - 1)})` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          {TRAITS.map((trait, i) => {
            const Icon = trait.icon;
            const active = i === activeIndex;
            return (
              <div key={trait.belief} className="relative z-10 flex-1 flex justify-center">
                <div
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-[transform,background-color,border-color] duration-300 ${
                    active ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    borderColor: active ? "var(--primary)" : "var(--border)",
                    backgroundColor: active ? "var(--primary)" : "var(--card)",
                  }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: active ? "var(--primary-foreground)" : "var(--muted-foreground)" }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {TRAITS.map((trait, idx) => {
            const Icon = trait.icon;
            const active = idx === activeIndex;
            return (
              <motion.div
                key={trait.belief}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setActiveIndex(idx);
                }}
                onMouseLeave={() => setIsHovering(false)}
                className={`bg-card border rounded-2xl p-5 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 ${
                  active ? "border-primary" : "border-border shadow-sm"
                }`}
                style={
                  active
                    ? { boxShadow: "0 0 0 3px color-mix(in oklch, var(--primary) 15%, transparent)" }
                    : undefined
                }
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
                    active ? "bg-primary" : "bg-primary/10"
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${active ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{trait.belief}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{trait.evidence}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
