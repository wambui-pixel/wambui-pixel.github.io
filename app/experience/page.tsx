import type { Metadata } from "next";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience — Felister Wambui",
};

const experiences = [
  {
    role: "Engineering Attachee",
    company: "Gearbox Kenya",
    period: "March – May 2021",
    summary:
      "Worked as an attachee at Gearbox Kenya, gaining hands-on experience in embedded systems and IoT development.",
    skills: [
      "Embedded Systems",
      "NodeMCU & Arduino",
      "Web Development",
      "IoT Research & Implementation",
      "Blynk App",
      "Telegram Bot Integration",
    ],
  },
  {
    role: "Internal Attachee",
    company: "JKUAT Workshops",
    period: "July – August 2019",
    summary:
      "Internal attachment at the university, rotating through multiple engineering workshops to gain practical, hands-on engineering skills.",
    skills: [
      "Foundry Workshop",
      "Plumbing Workshop",
      "Fitting Workshop",
      "Automotive Workshop",
      "Machine Workshop",
      "Innovation & Prototyping",
      "Installation Workshop",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-16">
      {/* Page header */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Professional history
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Work Experience
          </h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex gap-8">
                  {/* Icon node */}
                  <div className="flex-none w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center z-10 shadow-md">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors">
                    <span className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full mb-3">
                      {exp.period}
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {exp.role}
                    </h2>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {exp.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
