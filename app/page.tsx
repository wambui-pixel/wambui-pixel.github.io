import type { Metadata } from "next";
import { GraduationCap, Briefcase, ExternalLink } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SkillsLoopSection } from "@/components/SkillsLoopSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";

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

const experiences = [
  {
    role: "Software Engineer",
    company: "Ultraviolet",
    period: "Mar 2024 – Present",
    location: "Serbia",
    summary:
      "Own development and maintenance of production SaaS web applications, leading features from design through deployment.",
    skills: ["Next.js", "React", "TypeScript", "Real-time Chat", "REST APIs", "Authentication", "Testing"],
  },
  {
    role: "Junior Engineer & Systems Administrator",
    company: "CHAJI",
    period: "Jul 2023 – Feb 2024",
    location: "Nairobi",
    summary:
      "Supported EV charger development and administered backend systems, analysing performance data to drive improvements.",
    skills: ["EV Charger Systems", "Systems Administration", "Hardware Testing", "Data Analysis", "PCB Assembly"],
  },
  {
    role: "Junior Researcher",
    company: "Nakuja Project",
    period: "May 2022 – Dec 2022",
    location: "Nairobi",
    summary:
      "Designed and fabricated rocket components, built MATLAB flight models, and collaborated across avionics, propulsion, and airframe teams to achieve a successful launch.",
    skills: ["MATLAB", "Open Rocket", "CAD", "Flight Control Systems", "Cross-functional Collaboration"],
  },
  {
    role: "Intern (Web & ML)",
    company: "Gearbox",
    period: "Feb 2022 – Apr 2022",
    location: "Nairobi",
    summary:
      "Front-end web development, machine learning with TensorFlow, database creation, and product documentation.",
    skills: ["HTML/CSS", "JavaScript", "TensorFlow", "MySQL", "MongoDB", "Documentation"],
  },
  {
    role: "Intern (Embedded & IoT)",
    company: "Gearbox",
    period: "Mar 2021 – May 2021",
    location: "Nairobi",
    summary:
      "Designed and implemented embedded firmware, IoT systems, and mechatronic automation using Wi-Fi, Bluetooth, IFTTT, and RFID.",
    skills: ["Embedded Firmware", "IoT", "Wi-Fi", "Bluetooth", "RFID", "IFTTT", "Mechatronics Automation"],
  },
  {
    role: "Online Community Manager",
    company: "Freelancer",
    period: "Mar 2020 – Jun 2020",
    location: "Nairobi",
    summary:
      "Managed social media accounts, created advertising content to grow online presence, and engaged with community members.",
    skills: ["Social Media Management", "Content Creation", "Community Engagement", "Advertising"],
  },
];

type OtherProject = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  image?: string;
  gradient?: string;
};

const otherProjects: OtherProject[] = [
  {
    title: "AI Sous Chef",
    gradient: "from-orange-400 via-amber-500 to-yellow-500",
    description:
      "Personal AI project that generates recipes from ingredients you already have at home. Tell the Sous Chef what's in your kitchen and it creates tailored recipes.",
    tags: ["Next.js", "TypeScript", "AI"],
    github: "https://github.com/wambui-pixel/sous-chef",
  },
  {
    title: "Automated Door System",
    image: "/images/door.jpeg",
    description:
      "Ultrasonic sensor and servo motor combination for fully touchless door control.",
    tags: ["Arduino", "Servo Motor", "Ultrasonic"],
    github: "https://github.com/wambui-pixel/Automatic-Door",
  },
  {
    title: "Touchless Faucet + Door Control",
    image: "/images/touchless.jpg",
    description:
      "Reduces contact with contaminated surfaces while enforcing hand sanitisation before entry.",
    tags: ["NodeMCU", "IoT", "Sensors"],
    github: "https://github.com/YvonneMureithi/Touchless-Faucet",
  },
  {
    title: "Facemask ATM + Reminder",
    image: "/images/mask.jpg",
    description:
      "Dispenses masks on demand and sends alerts when stock runs low.",
    tags: ["Arduino", "Blynk", "Automation"],
    github: "https://github.com/r3wnad/Mask-ATM",
  },
  {
    title: "Simple Pulse Monitor",
    image: "/images/pulse.jpg",
    description:
      "Streams pulse data via PulseSensor to ThingSpeak for real-time chart visualisation.",
    tags: ["PulseSensor", "ThingSpeak", "IoT"],
    github: "https://github.com/LeoMaina/Simple-Pulse-Monitor",
  },
  {
    title: "Voice Controlled Appliances",
    image: "/images/voice.jpeg",
    description:
      "Control home lighting by voice through Google Assistant and NodeMCU.",
    tags: ["NodeMCU", "Google Assistant", "IFTTT"],
    github: "https://github.com/Shekillah/Voice-controlled-home-appliances",
  },
  {
    title: "Servo Motor via LDR + NodeMCU",
    image: "/images/servo2.jpeg",
    description:
      "Light-dependent resistor drives a servo motor angle in real time over ESP8266.",
    tags: ["NodeMCU", "LDR", "Servo Motor"],
    github: "https://github.com/YvonneMureithi/Controlling-Servo-Motor-Using-LDR-With-NodeMCU",
  },
  {
    title: "Smoke Detector",
    image: "/images/detector.jpeg",
    description:
      "Monitors air quality and pushes Blynk notifications when smoke crosses a threshold.",
    tags: ["Arduino", "Blynk", "Gas Sensor"],
    github: "https://github.com/wambui-pixel/Smoke-detector",
  },
  {
    title: "Smart Parking System",
    image: "/images/parking.jpg",
    description:
      "Ultrasonic sensors and IoT display available parking spots in a web dashboard.",
    tags: ["NodeMCU", "Ultrasonic", "IoT"],
    github: "https://github.com/r3wnad/Smart-Parking",
  },
  {
    title: "NodeMCU → Google Sheets",
    image: "/images/data.jpeg",
    description:
      "Pipes DHT11 temperature, humidity, date and time directly into Google Sheets.",
    tags: ["NodeMCU", "DHT11", "Google Sheets"],
    github: "https://github.com/LeoMaina/NodeMCU-to-send-DATA-to-Googlesheets-directly",
  },
  {
    title: "Stepper Motor via Blynk",
    image: "/images/stepper.jpg",
    description:
      "Control stepper motor direction and speed from a phone using the Blynk app.",
    tags: ["NodeMCU", "Blynk", "Stepper Motor"],
    github: "https://github.com/MisiCod/Stepper-control-from-the-phone",
  },
];

const skillCategories = [
  {
    category: "Frontend Development",
    color: "bg-primary/10 text-primary border-primary/30",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Engineering & Design",
    color: "bg-secondary/20 text-foreground border-border",
    skills: ["PCB Design", "CAD", "3D Printing", "CNC Machining", "Welding", "Open Rocket", "Lathe Machine"],
  },
  {
    category: "Embedded Systems & IoT",
    color: "bg-muted text-muted-foreground border-border",
    skills: ["Arduino", "NodeMCU / ESP8266", "Embedded Firmware", "Wi-Fi", "Bluetooth", "RFID", "IFTTT", "Blynk"],
  },
  {
    category: "Data & Tools",
    color: "bg-accent/20 text-foreground border-border",
    skills: ["MATLAB", "TensorFlow", "MySQL", "MongoDB", "Machine Learning", "Data Analysis"],
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />

      <SkillsLoopSection />

      {/* ── Projects carousel ────────────────────────────── */}
      <ProjectsCarousel />

      {/* ── Experience ───────────────────────────────────── */}
      <section id="experience" className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Professional history
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Work Experience
          </h2>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-none w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-md">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-2xl p-5 hover:border-primary transition-colors">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-muted text-muted-foreground"
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

      {/* ── Skills ───────────────────────────────────────── */}
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            What I bring
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map(({ category, color, skills }) => (
              <div
                key={category}
                className="bg-card border border-border rounded-2xl p-5 hover:border-primary transition-colors"
              >
                <h3 className="text-sm font-bold text-foreground mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${color}`}
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

      {/* ── Education ────────────────────────────────────── */}
      <section id="education" className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Academic journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Education
          </h2>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {education.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-none w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-md">
                    <GraduationCap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-2xl p-5 hover:border-primary transition-colors">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {item.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Other projects ───────────────────────────────── */}
      <section id="others" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Personal &amp; university work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Other Projects
          </h2>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col p-5 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-md transition-all duration-200"
              >
                {/* Colour accent strip */}
                <div className={`w-8 h-1 rounded-full mb-4 bg-gradient-to-r ${project.gradient ?? "from-primary to-secondary"}`} />

                <h3 className="font-semibold text-card-foreground text-sm leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>

          {/* Mary Had a Little Lamb — fun footer card */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-colors">
            <div className="p-6 sm:flex sm:gap-8">
              <div className="sm:flex-1 mb-5 sm:mb-0">
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                  Arduino · Buzzer
                </span>
                <h3 className="text-base font-bold text-card-foreground mb-2">
                  &ldquo;Mary Had a Little Lamb&rdquo; on a Buzzer
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Engineering can be fun too — a buzzer programmed to play the
                  classic nursery rhyme using software timing and frequency control.
                </p>
                <a
                  href="https://github.com/wambui-pixel/Mary-had-a-little-lamb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View on GitHub
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="sm:w-72 rounded-xl overflow-hidden bg-muted shrink-0">
                <video className="w-full" controls preload="metadata">
                  <source src="/mary.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
