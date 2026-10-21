export interface Project {
  slug: string;
  title: string;
  problem: string;
  built: string;
  solution: string;
  impact: string;
  tags: string[];
  github: string | null;
  color: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "fluxmq-observability-dashboard",
    title: "FluxMQ Observability Dashboard",
    problem:
      "The FluxMQ team had no visibility into broker activity in production. Diagnosing issues meant digging through raw logs, with no way to monitor message throughput, connection state, or protocol health at a glance.",
    built:
      "A Next.js dashboard polling broker stats across MQTT, AMQP, and CoAP, server-rendered for fast load on low-powered internal machines.",
    solution:
      "Puts live throughput, connection state, and protocol health on one screen, so diagnosing an issue no longer means digging through raw logs.",
    impact:
      "Cut routine diagnostics down to a glance at the dashboard instead of a log-digging session.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MQTT", "AMQP", "CoAP"],
    github: "https://github.com/absmach/fluxmq",
    color: "#c4b5fd",
  },
  {
    slug: "magistrala-iot-platform",
    title: "Magistrala IoT Platform",
    problem:
      "Provisioning devices, configuring rules, and monitoring alarms across an IoT fleet required writing code against the platform's APIs directly, putting basic fleet management out of reach for non-developers.",
    built:
      "A browser-based interface for provisioning devices, configuring real-time rules, monitoring alarms, and building dashboards.",
    solution:
      "Turns fleet management into point-and-click configuration, so non-developers can operate the platform without touching its APIs.",
    impact:
      "Opened up day-to-day fleet management to non-developer users.",
    tags: ["Next.js", "React", "TypeScript", "IoT"],
    github: null,
    color: "#a78bfa",
  },
  {
    slug: "magistrala-website",
    title: "Magistrala Website",
    problem:
      "An enterprise-grade open-source IoT platform had no dedicated way to communicate its capabilities to prospective developers and buyers, or to host its documentation.",
    built: "A documentation and marketing site built with Next.js and MDX.",
    solution:
      "Gives the platform a proper home for its docs alongside a marketing presence aimed at developers and buyers.",
    impact:
      "Gave prospective developers and buyers a single place to evaluate the platform and its docs.",
    tags: ["Next.js", "TypeScript", "MDX"],
    github: "https://github.com/absmach/magistrala-website",
    color: "#8b5cf6",
  },
  {
    slug: "ultraviolet-website",
    title: "Ultraviolet Website",
    problem:
      "A confidential computing startup needed a fast, credible marketing presence to explain its product to a technical audience without a slow, JavaScript-heavy site getting in the way.",
    built: "A marketing and content hub built with Astro and Tailwind CSS.",
    solution:
      "Optimised for blazing-fast static delivery, so the site never slows down the pitch to a technical audience.",
    impact:
      "Gave the startup a credible, fast-loading front door for a technical audience.",
    tags: ["Astro", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ultravioletrs/website",
    color: "#7c3aed",
  },
  {
    slug: "propeller-ui",
    title: "Propeller UI",
    problem:
      "Propeller's WebAssembly workload orchestration for the Cloud-Edge continuum had no product site or UI to make the concept concrete for prospective users.",
    built: "The product website and UI for Propeller.",
    solution:
      "Makes WebAssembly workload orchestration across the Cloud-Edge continuum concrete and explorable for prospective users.",
    impact:
      "Gave Propeller a concrete product presence for prospective users to evaluate.",
    tags: ["MDX", "TypeScript", "WebAssembly"],
    github: null,
    color: "#a855f7",
  },
  {
    slug: "iot-client-sdks",
    title: "IoT Client SDKs",
    problem:
      "Developers integrating with Magistrala had no official, maintained client libraries, leaving them to hand-roll API calls in TypeScript and Python projects.",
    built:
      "Official TypeScript and Python client libraries, published to npm and PyPI.",
    solution:
      "Lets downstream developers install a maintained SDK instead of hand-rolling API calls.",
    impact:
      "Published official SDKs downstream developers could install directly from npm and PyPI.",
    tags: ["TypeScript", "Python", "npm"],
    github: "https://github.com/absmach/magistrala-sdk-ts",
    color: "#d946ef",
  },
];
