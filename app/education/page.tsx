import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Education — Felister Wambui",
};

const education = [
  {
    degree: "Bachelor of Science — Mechatronic Engineering",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    period: "2017 – Present",
    description:
      "Studying the intersection of mechanical, electrical, and computer engineering with a focus on embedded systems, robotics, and IoT development.",
  },
  {
    degree: "Kenya Certificate of Secondary Education",
    institution: "Buruburu Girls Secondary School",
    period: "2013 – 2016",
    description: "Completed secondary education with a strong foundation in sciences and mathematics.",
  },
  {
    degree: "Primary School Certificate",
    institution: "Tender Care Junior Academy",
    period: "2003 – 2012",
    description: "Completed primary education.",
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-16">
      {/* Page header */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Academic journey
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Education
          </h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

            <div className="space-y-10">
              {education.map((item, idx) => (
                <div key={idx} className="relative flex gap-8">
                  {/* Icon node */}
                  <div className="flex-none w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center z-10 shadow-md">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-2 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors">
                    <span className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full mb-3">
                      {item.period}
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {item.degree}
                    </h2>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                      {item.institution}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
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
