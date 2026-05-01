"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";

const aboutLinks = [
  { label: "Education", href: "#education" },
  { label: "Work Experience", href: "#experience" },
  { label: "My Skills", href: "#skills" },
];

const projectLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Mini Projects", href: "#others" },
];

export function Nav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/90 backdrop-blur-md shadow-sm"
        : "bg-background"
        } border-b border-border`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        <div className="flex flex-row justify-between w-full">
          <div>
            {/* Desktop links */}
            <div className="hidden md:flex gap-1">
              <Link
                href="/"
                className={"px-3 py-2 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:text-primary"}
              >
                Home
              </Link>

              {/* About dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  About
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                  <div className="w-48 rounded-xl bg-card shadow-xl border border-border overflow-hidden py-1">
                    {aboutLinks.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2.5 text-sm text-card-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Projects
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                  <div className="w-44 rounded-xl bg-card shadow-xl border border-border overflow-hidden py-1">
                    {projectLinks.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2.5 text-sm text-card-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-4.5 h-4.5" />
                ) : (
                  <Moon className="w-4.5 h-4.5" />
                )
              ) : (
                <div className="w-4.5 h-4.5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-muted-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="w-4.5 h-4.5" />
              ) : (
                <Moon className="w-4.5 h-4.5" />
              )
            ) : (
              <div className="w-4.5 h-4.5" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 rounded-full text-muted-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {
        menuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Home
              </Link>

              <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                About
              </p>
              {aboutLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors"
                >
                  {l.label}
                </a>
              ))}

              <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Projects
              </p>
              {projectLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )
      }
    </header >
  );
}
