"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Automated Door System",
    image: "/images/door.jpeg",
    description:
      "Ultrasonic sensor + servo motor combination for fully touchless door control.",
    github: "https://github.com/wambui-pixel/Automatic-Door",
  },
  {
    id: 2,
    title: "Touchless Faucet + Door Control",
    image: "/images/touchless.jpg",
    description:
      "Reduces contact with contaminated surfaces while enforcing hand sanitisation before entry.",
    github: "https://github.com/YvonneMureithi/Touchless-Faucet",
  },
  {
    id: 3,
    title: "Facemask ATM + Reminder",
    image: "/images/mask.jpg",
    description:
      "Dispenses masks on demand and sends alerts when stock runs low.",
    github: "https://github.com/r3wnad/Mask-ATM",
  },
  {
    id: 4,
    title: "Simple Pulse Monitor",
    image: "/images/pulse.jpg",
    description:
      "Streams pulse data via PulseSensor to ThingSpeak for real-time chart visualisation.",
    github: "https://github.com/LeoMaina/Simple-Pulse-Monitor",
  },
  {
    id: 5,
    title: "Voice Controlled Appliances",
    image: "/images/voice.jpeg",
    description:
      "Control home lighting by voice through Google Assistant and NodeMCU.",
    github: "https://github.com/Shekillah/Voice-controlled-home-appliances",
  },
  {
    id: 6,
    title: "Servo Motor via LDR + NodeMCU",
    image: "/images/servo2.jpeg",
    description:
      "Light-dependent resistor drives a servo motor angle in real time over ESP8266.",
    github:
      "https://github.com/YvonneMureithi/Controlling-Servo-Motor-Using-LDR-With-NodeMCU",
  },
  {
    id: 7,
    title: "Smoke Detector",
    image: "/images/detector.jpeg",
    description:
      "Monitors air quality and pushes Blynk notifications when smoke crosses a threshold.",
    github: "https://github.com/wambui-pixel/Smoke-detector",
  },
  {
    id: 8,
    title: "Smart Parking System",
    image: "/images/parking.jpg",
    description:
      "Ultrasonic sensors + IoT display available parking spots in a web dashboard.",
    github: "https://github.com/r3wnad/Smart-Parking",
  },
  {
    id: 9,
    title: "NodeMCU → Google Sheets",
    image: "/images/data.jpeg",
    description:
      "Pipes DHT11 temperature, humidity, date and time directly into Google Sheets.",
    github: "https://github.com/LeoMaina/NodeMCU-to-send-DATA-to-Googlesheets-directly",
  },
  {
    id: 10,
    title: "Stepper Motor via Blynk",
    image: "/images/stepper.jpg",
    description:
      "Control stepper motor direction and speed from a phone using the Blynk app.",
    github: "https://github.com/MisiCod/Stepper-control-from-the-phone",
  },
];

export function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
              What I've built
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel — overflow hidden but peek visible */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-72 sm:w-80 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="320px"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
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
      </div>
    </section>
  );
}
