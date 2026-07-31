"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiArduino,
  SiEspressif,
  SiBluetooth,
  SiIfttt,
  SiTensorflow,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import {
  CircuitBoard,
  Compass,
  Boxes,
  Cog,
  Flame,
  Rocket,
  RotateCw,
  Cpu,
  Wifi,
  Radio,
  Smartphone,
  Sigma,
  BrainCircuit,
  ChartSpline,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  categoryId: string;
  icon: IconType | LucideIcon;
}

interface Category {
  id: string;
  label: string;
}

const CATEGORIES: Category[] = [
  { id: "frontend", label: "Frontend Development" },
  { id: "engineering", label: "Engineering & Design" },
  { id: "embedded", label: "Embedded Systems & IoT" },
  { id: "data", label: "Data & Tools" },
];

const SKILLS: Skill[] = [
  { name: "Next.js", categoryId: "frontend", icon: SiNextdotjs },
  { name: "React", categoryId: "frontend", icon: SiReact },
  { name: "TypeScript", categoryId: "frontend", icon: SiTypescript },
  { name: "JavaScript", categoryId: "frontend", icon: SiJavascript },
  { name: "HTML", categoryId: "frontend", icon: SiHtml5 },
  { name: "CSS", categoryId: "frontend", icon: SiCss },

  { name: "PCB Design", categoryId: "engineering", icon: CircuitBoard },
  { name: "CAD", categoryId: "engineering", icon: Compass },
  { name: "3D Printing", categoryId: "engineering", icon: Boxes },
  { name: "CNC Machining", categoryId: "engineering", icon: Cog },
  { name: "Welding", categoryId: "engineering", icon: Flame },
  { name: "Open Rocket", categoryId: "engineering", icon: Rocket },
  { name: "Lathe Machine", categoryId: "engineering", icon: RotateCw },

  { name: "Arduino", categoryId: "embedded", icon: SiArduino },
  { name: "NodeMCU / ESP8266", categoryId: "embedded", icon: SiEspressif },
  { name: "Embedded Firmware", categoryId: "embedded", icon: Cpu },
  { name: "Wi-Fi", categoryId: "embedded", icon: Wifi },
  { name: "Bluetooth", categoryId: "embedded", icon: SiBluetooth },
  { name: "RFID", categoryId: "embedded", icon: Radio },
  { name: "IFTTT", categoryId: "embedded", icon: SiIfttt },
  { name: "Blynk", categoryId: "embedded", icon: Smartphone },

  { name: "MATLAB", categoryId: "data", icon: Sigma },
  { name: "TensorFlow", categoryId: "data", icon: SiTensorflow },
  { name: "MySQL", categoryId: "data", icon: SiMysql },
  { name: "MongoDB", categoryId: "data", icon: SiMongodb },
  { name: "Machine Learning", categoryId: "data", icon: BrainCircuit },
  { name: "Data Analysis", categoryId: "data", icon: ChartSpline },
];

export function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);

  const filteredSkills = SKILLS.filter((s) => s.categoryId === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <Button
            key={cat.id}
            type="button"
            variant={activeCategory === cat.id ? "default" : "outline"}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "h-auto px-4 py-2 rounded-full text-sm font-semibold",
              activeCategory === cat.id
                ? "border-primary hover:bg-primary hover:text-primary-foreground"
                : "bg-muted border-border hover:bg-muted hover:text-muted-foreground hover:border-primary dark:bg-muted dark:border-border dark:hover:bg-muted"
            )}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border border-border bg-card text-foreground hover:border-primary hover:-translate-y-0.5 transition-[border-color,transform] shadow-sm"
              >
                <Icon className="w-4 h-4 text-primary flex-none" />
                {skill.name}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
