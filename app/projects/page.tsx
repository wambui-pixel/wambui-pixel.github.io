import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects — Felister Wambui",
};

const projects = [
  {
    id: 1,
    title: "Automated Door System",
    image: "/images/door.jpeg",
    description:
      "Ultrasonic sensor and servo motor combination for a fully touchless door control system. The sensor detects presence and triggers the servo to open the door without any physical contact.",
    github: "https://github.com/wambui-pixel/Automatic-Door",
    tags: ["Arduino", "Servo Motor", "Ultrasonic Sensor"],
  },
  {
    id: 2,
    title: "Touchless Faucet + Door Control",
    image: "/images/touchless.jpg",
    description:
      "Reduces contact with contaminated door handles while enforcing hand sanitisation before entry. Combines a touchless faucet sensor with a door access control system.",
    github: "https://github.com/YvonneMureithi/Touchless-Faucet",
    tags: ["NodeMCU", "IoT", "Sensors"],
  },
  {
    id: 3,
    title: "Facemask ATM + Reminder",
    image: "/images/mask.jpg",
    description:
      "A mask dispensing system that alerts a person when they exit their home and sends notifications when the mask stock runs low.",
    github: "https://github.com/r3wnad/Mask-ATM",
    tags: ["Arduino", "Blynk", "Automation"],
  },
  {
    id: 4,
    title: "Simple Pulse Monitor",
    image: "/images/pulse.jpg",
    description:
      "Streams pulse data via PulseSensor to ThingSpeak for real-time chart visualisation. Useful for monitoring patients or athletes.",
    github: "https://github.com/LeoMaina/Simple-Pulse-Monitor",
    tags: ["PulseSensor", "ThingSpeak", "IoT"],
  },
  {
    id: 5,
    title: "Voice Controlled Appliances",
    image: "/images/voice.jpeg",
    description:
      "Control home lighting by voice through Google Assistant and NodeMCU — switching LED lights on or off with voice commands.",
    github: "https://github.com/Shekillah/Voice-controlled-home-appliances",
    tags: ["NodeMCU", "Google Assistant", "IFTTT"],
  },
  {
    id: 6,
    title: "Servo Motor via LDR + NodeMCU",
    image: "/images/servo2.jpeg",
    description:
      "Light-dependent resistor drives a servo motor angle in real time over ESP8266 NodeMCU — more light, more rotation.",
    github: "https://github.com/YvonneMureithi/Controlling-Servo-Motor-Using-LDR-With-NodeMCU",
    tags: ["NodeMCU", "LDR", "Servo Motor"],
  },
  {
    id: 7,
    title: "Smoke Detector",
    image: "/images/detector.jpeg",
    description:
      "Monitors air quality and pushes Blynk notifications when smoke crosses a configurable threshold, enabling rapid response.",
    github: "https://github.com/wambui-pixel/Smoke-detector",
    tags: ["Arduino", "Blynk", "Gas Sensor"],
  },
  {
    id: 8,
    title: "Smart Parking System",
    image: "/images/parking.jpg",
    description:
      "Ultrasonic sensors and IoT display available parking spots in a web dashboard in real time, reducing time spent searching for parking.",
    github: "https://github.com/r3wnad/Smart-Parking",
    tags: ["NodeMCU", "Ultrasonic", "IoT"],
  },
  {
    id: 9,
    title: "NodeMCU → Google Sheets",
    image: "/images/data.jpeg",
    description:
      "Pipes DHT11 temperature, humidity, date and time readings directly into Google Sheets — no intermediary server required.",
    github: "https://github.com/LeoMaina/NodeMCU-to-send-DATA-to-Googlesheets-directly",
    tags: ["NodeMCU", "DHT11", "Google Sheets"],
  },
  {
    id: 10,
    title: "Stepper Motor via Blynk",
    image: "/images/stepper.jpg",
    description:
      "Control stepper motor direction and speed from a smartphone using the Blynk app interface over Wi-Fi.",
    github: "https://github.com/MisiCod/Stepper-control-from-the-phone",
    tags: ["NodeMCU", "Blynk", "Stepper Motor"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-16">
      {/* Page header */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What I&apos;ve built
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Projects
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl">
            IoT, embedded systems, and automation projects built during university
            and at Gearbox Kenya.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="font-semibold text-slate-900 dark:text-white text-base leading-snug mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    View on GitHub
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
