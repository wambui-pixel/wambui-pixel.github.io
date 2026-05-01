import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Other Projects — Felister Wambui",
};

export default function OthersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-16">
      {/* Page header */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Beyond the main projects
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Other Mini-Projects
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Mary Had a Little Lamb */}
          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors">
            <div className="p-6 sm:p-8">
              <span className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full mb-4">
                Arduino · Buzzer
              </span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Making &ldquo;Mary Had a Little Lamb&rdquo; with a Buzzer
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                To show that engineering can also be fun — a buzzer programmed to
                play the classic nursery rhyme &ldquo;Mary Had a Little Lamb.&rdquo;
                A playful demonstration that software timing and frequency control
                can produce musical notes.
              </p>

              {/* Video */}
              <div className="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 mb-6">
                <video
                  className="w-full"
                  controls
                  preload="metadata"
                >
                  <source src="/mary.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <a
                href="https://github.com/wambui-pixel/Mary-had-a-little-lamb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
              >
                View on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
