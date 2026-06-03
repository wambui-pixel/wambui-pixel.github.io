import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SkillsLoopSection } from "@/components/SkillsLoopSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { ContactSection } from "@/components/ContactSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollStack, ScrollStackItem } from "@/components/ScrollStack";
import { Carousel } from "@/components/Carousel";
import type { CarouselProject } from "@/components/Carousel";

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
    period: "Mar 2024 – May 2026",
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

const otherProjects: CarouselProject[] = [
  {
    id: 1,
    title: "AI Sous Chef",
    gradient: "from-orange-400 via-amber-500 to-yellow-500",
    description:
      "Personal AI project that generates recipes from ingredients you already have at home. Tell the Sous Chef what's in your kitchen and it creates tailored recipes.",
    tags: ["Next.js", "TypeScript", "AI"],
    github: "https://github.com/wambui-pixel/sous-chef",
  },
  {
    id: 2,
    title: "Automated Door System",
    description: "Ultrasonic sensor and servo motor combination for fully touchless door control.",
    tags: ["Arduino", "Servo Motor", "Ultrasonic"],
    github: "https://github.com/wambui-pixel/Automatic-Door",
  },
  {
    id: 3,
    title: "Touchless Faucet + Door Control",
    description: "Reduces contact with contaminated surfaces while enforcing hand sanitisation before entry.",
    tags: ["NodeMCU", "IoT", "Sensors"],
    github: "https://github.com/YvonneMureithi/Touchless-Faucet",
  },
  {
    id: 4,
    title: "Facemask ATM + Reminder",
    description: "Dispenses masks on demand and sends alerts when stock runs low.",
    tags: ["Arduino", "Blynk", "Automation"],
    github: "https://github.com/r3wnad/Mask-ATM",
  },
  {
    id: 5,
    title: "Simple Pulse Monitor",
    description: "Streams pulse data via PulseSensor to ThingSpeak for real-time chart visualisation.",
    tags: ["PulseSensor", "ThingSpeak", "IoT"],
    github: "https://github.com/LeoMaina/Simple-Pulse-Monitor",
  },
  {
    id: 6,
    title: "Voice Controlled Appliances",
    description: "Control home lighting by voice through Google Assistant and NodeMCU.",
    tags: ["NodeMCU", "Google Assistant", "IFTTT"],
    github: "https://github.com/Shekillah/Voice-controlled-home-appliances",
  },
  {
    id: 7,
    title: "Servo Motor via LDR + NodeMCU",
    description: "Light-dependent resistor drives a servo motor angle in real time over ESP8266.",
    tags: ["NodeMCU", "LDR", "Servo Motor"],
    github: "https://github.com/YvonneMureithi/Controlling-Servo-Motor-Using-LDR-With-NodeMCU",
  },
  {
    id: 8,
    title: "Smoke Detector",
    description: "Monitors air quality and pushes Blynk notifications when smoke crosses a threshold.",
    tags: ["Arduino", "Blynk", "Gas Sensor"],
    github: "https://github.com/wambui-pixel/Smoke-detector",
  },
  {
    id: 9,
    title: "Smart Parking System",
    description: "Ultrasonic sensors and IoT display available parking spots in a web dashboard.",
    tags: ["NodeMCU", "Ultrasonic", "IoT"],
    github: "https://github.com/r3wnad/Smart-Parking",
  },
  {
    id: 10,
    title: "NodeMCU → Google Sheets",
    description: "Pipes DHT11 temperature, humidity, date and time directly into Google Sheets.",
    tags: ["NodeMCU", "DHT11", "Google Sheets"],
    github: "https://github.com/LeoMaina/NodeMCU-to-send-DATA-to-Googlesheets-directly",
  },
  {
    id: 11,
    title: "Stepper Motor via Blynk",
    description: "Control stepper motor direction and speed from a phone using the Blynk app.",
    tags: ["NodeMCU", "Blynk", "Stepper Motor"],
    github: "https://github.com/MisiCod/Stepper-control-from-the-phone",
  },
  {
    id: 12,
    title: '"Mary Had a Little Lamb" on a Buzzer',
    gradient: "from-pink-400 via-rose-400 to-red-400",
    description: "Engineering can be fun too — a buzzer programmed to play the classic nursery rhyme using software timing and frequency control.",
    tags: ["Arduino", "Buzzer"],
    github: "https://github.com/wambui-pixel/Mary-had-a-little-lamb",
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
      <section id="experience" className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Professional history
          </p>
          <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Work Experience
          </ScrollReveal>
          <ScrollStack useWindowScroll itemDistance={80} itemStackDistance={20} baseScale={0.88}>
            {experiences.map((exp, idx) => (
              <ScrollStackItem key={idx} itemClassName="bg-card border border-border rounded-2xl p-5 hover:border-primary transition-colors">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <span className="text-xs text-muted-foreground">{exp.location}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-0.5">{exp.role}</h3>
                <p className="text-sm font-medium text-primary mb-3">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-muted text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────── */}
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            What I bring
          </p>
          <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Skills
          </ScrollReveal>
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
      <section id="education" className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Academic journey
          </p>
          <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Education
          </ScrollReveal>
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
          <ScrollReveal textClassName="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Other Projects
          </ScrollReveal>

          {/* Carousel */}
          <Carousel items={otherProjects} loop autoplay autoplayDelay={4000} pauseOnHover />
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <ContactSection />

    </main>
  );
}
