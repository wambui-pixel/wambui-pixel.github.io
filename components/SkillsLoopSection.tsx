"use client";

import LogoLoop, { type LogoItem } from "@/components/LogoLoop";

const allSkills = [
  "Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS",
  "PCB Design", "CAD", "3D Printing", "CNC Machining", "Welding", "Open Rocket", "Lathe Machine",
  "Arduino", "NodeMCU / ESP8266", "Embedded Firmware", "Wi-Fi", "Bluetooth", "RFID", "IFTTT", "Blynk",
  "MATLAB", "TensorFlow", "MySQL", "MongoDB", "Machine Learning", "Data Analysis",
];

const logos: LogoItem[] = allSkills.map((skill) => ({
  node: (
    <span className="inline-flex items-center text-xs font-medium text-muted-foreground whitespace-nowrap px-4 py-1.5 rounded-full border border-border bg-card">
      {skill}
    </span>
  ),
}));

export function SkillsLoopSection() {
  return (
    <section
      className="p-5 bg-muted border-y border-border overflow-hidden w-full"
    >
      <LogoLoop
        logos={logos}
        speed={60}
        pauseOnHover
        logoHeight={60}
        gap={12}
        ariaLabel="Skills"
      />
    </section>
  );
}
