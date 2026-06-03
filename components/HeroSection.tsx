import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="dark relative h-[100svh] min-h-[600px] bg-background overflow-hidden">

      {/* ── Accent glow — upper-right, behind face ────────── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 32% 42% at 74% 30%, oklch(0.50 0.287 316 / 0.28) 0%, transparent 70%)",
        }}
      />

      {/* ── Portrait — right half, desktop only ───────────── */}
      <div
        className="hidden lg:block absolute right-0 top-0 h-full w-[50%] z-20 opacity-0"
        style={{ animation: "fadeIn 1s ease 0.28s both" }}
      >
        <div
          className="relative h-full w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
          }}
        >
          <Image
            src="/images/mine.jpg"
            alt="Felister Wambui"
            fill
            priority
            className="object-cover object-top"
            sizes="50vw"
          />
        </div>
      </div>

      {/* ── Text block — full-width, vertically centered ──── */}
      <div className="absolute inset-0 z-30 flex items-center pt-16">
        <div className="w-full px-8 sm:px-12 xl:px-16">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-10 opacity-0"
            style={{ animation: "fadeIn 0.6s ease 0.1s both" }}
          >
            <span className="block w-6 h-px bg-primary flex-none" />
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-muted-foreground">
              Software Engineer
            </span>
          </div>

          {/* Name */}
          <h1 className="mb-8" aria-label="Felister Wambui">
            <span
              className="block font-black uppercase opacity-0"
              style={{
                fontSize: "clamp(72px, 12vw, 168px)",
                lineHeight: 0.87,
                letterSpacing: "-0.04em",
                color: "white",
                animation: "fadeUp 0.8s ease 0.2s both",
              }}
            >
              Felister
            </span>
            <span
              className="block font-black uppercase opacity-0"
              style={{
                fontSize: "clamp(72px, 12vw, 168px)",
                lineHeight: 0.87,
                letterSpacing: "-0.04em",
                color: "white",
                animation: "fadeUp 0.8s ease 0.32s both",
              }}
            >
              Wambui
            </span>
          </h1>

          {/* Thin rule */}
          <div
            className="w-14 h-px bg-border mb-7 opacity-0"
            style={{ animation: "fadeIn 0.5s ease 0.48s both" }}
          />

          {/* Description */}
          <p
            className="text-base sm:text-[17px] text-muted-foreground leading-relaxed font-light max-w-[320px] mb-4 opacity-0"
            style={{ animation: "fadeUp 0.6s ease 0.54s both" }}
          >
            Building practical systems for the real world.
          </p>

          {/* Specialty line */}
          <p
            className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground/50 mb-12 opacity-0"
            style={{ animation: "fadeUp 0.6s ease 0.62s both" }}
          >
            Web&ensp;·&ensp;IoT&ensp;·&ensp;Embedded Systems&ensp;·&ensp;AI
          </p>

          {/* CTAs */}
          <div
            className="flex items-center gap-3 flex-wrap opacity-0"
            style={{ animation: "fadeUp 0.6s ease 0.72s both" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-foreground text-background text-sm font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Explore Projects
              <span className="transition-transform duration-200 group-hover:translate-x-0.5 leading-none">
                →
              </span>
            </a>
            <Link
              href="/?cv=1#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-muted-foreground text-sm font-semibold rounded-full hover:text-foreground hover:border-muted-foreground/50 transition-all duration-200"
            >
              Request CV
              <span className="text-[11px] leading-none">↓</span>
            </Link>
          </div>

        </div>
      </div>

      {/* ── Bottom strip ─────────────────────────────────── */}
      <div
        className="absolute bottom-0 inset-x-0 z-30 border-t border-border opacity-0"
        style={{ animation: "fadeIn 0.6s ease 0.9s both" }}
      >
        <div className="px-8 sm:px-12 h-14 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/wambui-pixel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              <GithubIcon className="w-[15px] h-[15px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/wambui-kioko/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="w-[15px] h-[15px]" />
            </a>
            <a
              href="mailto:kiokowambui015@gmail.com"
              aria-label="Email"
              className="text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              <Mail className="w-[15px] h-[15px]" />
            </a>
          </div>
          <span className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground/40">
            Nairobi, Kenya
          </span>
        </div>
      </div>

    </section>
  );
}
