import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills — Felister Wambui",
};

const skillCategories = [
  {
    category: "Engineering & Design",
    skills: [
      "Computer Aided Design (CAD)",
      "Eagle CAD",
      "CNC Machining",
      "Lathe Machine",
      "3D Printing",
      "Welding",
      "Casting & Foundry",
      "Installation",
    ],
  },
  {
    category: "Software & Programming",
    skills: [
      "C",
      "C++",
      "Java",
      "Web Development & Design",
      "Embedded Systems Programming",
    ],
  },
  {
    category: "IoT & Connectivity",
    skills: [
      "NodeMCU / ESP8266",
      "Arduino",
      "IoT Implementation",
      "Blynk App",
      "Telegram Bot Integration",
      "ThingSpeak",
      "Google Sheets API",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Team Player",
      "Research & Documentation",
      "Project Coordination",
    ],
  },
];

const accentColors = [
  "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700",
  "bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700",
  "bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-700",
  "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700",
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-16">
      {/* Page header */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What I bring
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
            My Skills
          </h1>
        </div>
      </section>

      {/* Skills grid */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map(({ category, skills }, idx) => (
              <div
                key={category}
                className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
              >
                <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                  {category}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full border ${accentColors[idx % accentColors.length]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
