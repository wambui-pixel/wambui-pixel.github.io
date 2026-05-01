import { Mail, Phone, Cpu, Code2, PenTool, Globe } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";

const specialisms = [
  { icon: Cpu, label: "Mechatronics" },
  { icon: Code2, label: "Programming" },
  { icon: PenTool, label: "CAD Design" },
  { icon: Globe, label: "Web Dev" },
];

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* ── Specialisms strip ────────────────────────────── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {specialisms.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all"
              >
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/30">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200 text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects carousel ────────────────────────────── */}
      <ProjectsCarousel />

      {/* ── Contact ──────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-10">
            Open to internship opportunities, collaborations, and interesting
            engineering challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kiokowambui015@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              kiokowambui015@gmail.com
            </a>
            <a
              href="tel:+254705333065"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:border-indigo-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              0705 333 065
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
