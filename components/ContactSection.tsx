"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" };

const contactLinks = [
  {
    label: "Email",
    value: "kiokowambui015@gmail.com",
    href: "mailto:kiokowambui015@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/wambui-pixel",
    href: "https://github.com/wambui-pixel",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/wambui-kioko",
    href: "https://www.linkedin.com/in/wambui-kioko/",
    icon: LinkedinIcon,
  },
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>(() => {
    if (typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("cv") === "1") {
      return {
        ...INITIAL,
        subject: "CV Request",
        message: "Hi Felister,\n\nI came across your portfolio and would love to receive your CV.\n\nA little about the role / opportunity:\n",
      };
    }
    return INITIAL;
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: { target: HTMLInputElement | HTMLTextAreaElement }) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm(INITIAL);
      }
    } catch {
      setErrorMsg("Network error — please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
          Get in touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
          Contact Me
        </h2>

        <div className="grid lg:grid-cols-[1fr_340px] gap-6 items-start">
          {/* ── Left: form (dark card) ───────────────────────── */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Send a message
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-foreground mb-8 leading-snug">
              I typically reply in 1–2<br className="hidden sm:block" /> business days.
            </p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground">Message sent!</p>
                <p className="text-sm text-muted-foreground">
                  {"Check your inbox — I've sent you a confirmation."}
                </p>
                <Button
                  type="button"
                  variant="link"
                  onClick={() => setStatus("idle")}
                  className="h-auto p-0 mt-4 text-sm"
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">{errorMsg}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-auto w-full gap-2 py-3.5 rounded-full hover:bg-primary/90 font-semibold text-sm disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : (
                    <>Send message <Send className="w-4 h-4" /></>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* ── Right: contact info ──────────────────────────── */}
          <div className="flex flex-col gap-4">
            {/* Direct channels */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Other channels
              </p>
              <div className="flex flex-col gap-3">
                {contactLinks.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between gap-3 py-2.5 border-b border-border last:border-0 group"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      <Icon className="w-4 h-4" />
                      {label}
                    </span>
                    <span className="text-sm text-primary group-hover:underline text-right truncate max-w-[160px]">
                      {value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Availability
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                Open to full-time roles, freelance projects, and interesting
                engineering collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
