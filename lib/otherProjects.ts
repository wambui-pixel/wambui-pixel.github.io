export interface MiniProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured?: boolean;
}

export const OTHER_PROJECTS: MiniProject[] = [
  {
    id: 1,
    title: "AI Sous Chef",
    featured: true,
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
    featured: true,
    description:
      "Engineering can be fun too, a buzzer programmed to play the classic nursery rhyme using software timing and frequency control.",
    tags: ["Arduino", "Buzzer"],
    github: "https://github.com/wambui-pixel/Mary-had-a-little-lamb",
  },
];
