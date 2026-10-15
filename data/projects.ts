export interface ProjectFeature {
  emoji: string;
  title: string;
  description: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  platforms: string;
  disclaimer?: string;
  tagline: string;
  description: string;
  image: string;
  heroImage?: string;
  isMobileApp?: boolean;
  appIcon?: string;
  screenshots: string[];
  tools: string[];
  builtWith: string[];
  features: ProjectFeature[];
  liveLink?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  githubLink?: string;
  expoQrCode?: string;
  demoVideo?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "renalpal",
    title: "RenalPal",
    category: "Healthcare",
    platforms: "iOS, Android",
    isMobileApp: true,
    tagline:
      "A comprehensive mobile companion app for dialysis patients to track fluid intake, manage medications with smart reminders, and monitor their kidney health journey.",
    description:
      "RenalPal is designed specifically for dialysis patients and their care teams. It helps patients stay on top of their fluid intake limits, medication schedules, and dialysis appointments. With smart reminders and intuitive tracking, patients can take control of their kidney health journey with confidence.",
    image:  "/images/renapal1.png",
    heroImage: "/images/renapal1.png",
    screenshots: [
      "/images/renapal1.png",
      "/images/renapal2.png",
      "/images/renapal3.png",
      "/images/renapal4.png",
    ],
    tools: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "NativeWind",
      "Zustand",
    ],
    builtWith: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "NativeWind",
      "Zustand",
    ],
    features: [
      {
        emoji: "💧",
        title: "Fluid Tracking",
        description:
          "Track daily fluid intake against personalised limits set by your care team.",
      },
      {
        emoji: "💊",
        title: "Medication Reminders",
        description:
          "Smart reminders ensure you never miss a dose of your prescribed medications.",
      },
      {
        emoji: "🔔",
        title: "Smart Notifications",
        description:
          "Timely alerts for fluid limits, medications, and upcoming appointments.",
      },
      {
        emoji: "📖",
        title: "Learn About Dialysis",
        description:
          "Educational resources to help patients understand their condition and treatment options.",
      },
      {
        emoji: "🧠",
        title: "Quiz",
        description:
          "Test your knowledge about dialysis, kidney health, and self-care with interactive quizzes.",
      },
    ],
    liveLink: "https://www.renalpal.com/",
  },
  {
    slug: "youtube-qr-generator",
    title: "YouTube QR Generator",
    category: "Web App",
    platforms: "Web",
    tagline:
      "A web app that converts YouTube URLs into downloadable QR codes for easy video sharing and offline access.",
    description:
      "YouTube QR Generator is a simple yet powerful tool that allows users to paste any YouTube URL and instantly generate a scannable QR code. Perfect for educators, marketers, and content creators who want to share videos through printed materials, presentations, or physical displays.",
    image: "/images/qrcodes.webp",
    screenshots: [],
    tools: ["Next.js", "Express", "Railway", "TailwindCSS"],
    builtWith: ["Next.js", "Express", "Railway", "TailwindCSS", "Node.js"],
    features: [
      {
        emoji: "🔗",
        title: "URL to QR",
        description:
          "Paste any YouTube URL and get a high-quality QR code instantly.",
      },
      {
        emoji: "📥",
        title: "Download QR",
        description:
          "Download generated QR codes as images for use in any context.",
      },
      {
        emoji: "⚡",
        title: "Instant Generation",
        description:
          "QR codes are generated in real-time with no waiting or processing delays.",
      },
      {
        emoji: "🎨",
        title: "Clean Design",
        description:
          "Minimal, intuitive interface that makes QR generation effortless.",
      },
    ],
    liveLink: "https://qr-code-beryl-alpha.vercel.app/",
  },
  {
    slug: "rota-app",
    title: "Rota App",
    category: "Healthcare",
    platforms: "iOS, Android, Web",
    isMobileApp: true,
    disclaimer:
      "Built for internal use at a dialysis clinic. Not yet published to app stores.",
    tagline:
      "A mobile app that connects to the clinic's Excel rota spreadsheet, allowing staff to view shift schedules on their phones with push notifications for changes.",
    description:
      "The Rota App replaces the old workflow of photographing a printed Excel rota sheet. Staff can log in with their employee ID to see their personal shifts, view the full team rota in a colour-coded grid, and receive push notifications when schedules change. The app features a dark navy UI with glassmorphism design and shift colour coding matching the physical rota.",
    image: "/images/placeholder.png",
    heroImage: "/images/rotaapp-phone.png",
    screenshots: [
      "/images/rota-screen-1.png",
      "/images/rota-screen-2.png",
      "/images/rota-screen-3.png",
      "/images/rota-screen-4.png",
      "/images/rota-screen-5.png",
    ],
    tools: [
      "React Native",
      "TypeScript",
      "Expo",
      "Google Sheets API",
      "AsyncStorage",
    ],
    builtWith: [
      "React Native",
      "Expo SDK 56",
      "TypeScript",
      "Expo Router",
      "Google Sheets API",
      "AsyncStorage",
      "Expo Notifications",
    ],
    features: [
      {
        emoji: "📅",
        title: "Personal Shift View",
        description:
          "See your upcoming shifts at a glance with colour-coded badges and day highlights.",
      },
      {
        emoji: "👥",
        title: "Team Overview",
        description:
          "Browse the full team roster and see who's working on any given day.",
      },
      {
        emoji: "📊",
        title: "Full Rota Grid",
        description:
          "Scrollable colour-coded grid view matching the physical Excel rota sheet.",
      },
      {
        emoji: "🔔",
        title: "Push Notifications",
        description:
          "Get notified when shifts change, swaps are requested, or new rotas are published.",
      },
      {
        emoji: "🔄",
        title: "Live Sync",
        description:
          "Connects to Google Sheets for live rota updates with automatic polling.",
      },
    ],
    expoQrCode: "/images/rota-expo-qr.png",
    demoVideo: "/videos/rota-demo.mp4",
  },
  {
    slug: "restcountries",
    title: "RestCountries App",
    category: "Web App",
    platforms: "Web",
    tagline:
      "A React web app that displays countries with search and region filter functionality, using the RestCountries API.",
    description:
      "RestCountries App lets users browse and search through countries around the world. It features region-based filtering, detailed country pages with population, capital, and flag information, and a clean responsive design built with React and TailwindCSS.",
    image: "/images/restcountries.webp",
    screenshots: [],
    tools: ["React", "Vite", "React Router", "TailwindCSS", "REST API"],
    builtWith: [
      "React",
      "Vite",
      "React Router",
      "TailwindCSS",
      "RestCountries API",
    ],
    features: [
      {
        emoji: "🔍",
        title: "Search Countries",
        description:
          "Search for any country by name with instant filtering results.",
      },
      {
        emoji: "🌍",
        title: "Region Filter",
        description:
          "Filter countries by region — Africa, Americas, Asia, Europe, Oceania.",
      },
      {
        emoji: "🏳️",
        title: "Country Details",
        description:
          "View detailed info including population, capital, languages, and currencies.",
      },
      {
        emoji: "📱",
        title: "Responsive Design",
        description:
          "Fully responsive layout that works beautifully on mobile and desktop.",
      },
    ],
    liveLink: "https://endearing-concha-d9616c.netlify.app/",
  },

  {
    slug: "secure-network-design",
    title: "Secure Enterprise Network Design",
    category: "Cybersecurity",
    platforms: "Cisco Packet Tracer",
    tagline:
      "Designed and implemented a secure small enterprise network for a financial services company with VLANs, inter-VLAN routing, and access control lists.",
    description:
      "This project was completed as part of the AltSchool Africa Cybersecurity Diploma. I designed a secure branch office network for a mid-sized financial services company expanding across Africa and Europe. The network segments three departments (Admin, Sales, IT Support) using VLANs, implements inter-VLAN routing via Router on a Stick, and enforces access control lists to restrict Sales from accessing Admin resources while giving IT Support full network access.",
    image: "/images/secure-network-design.png",
    heroImage: "/images/secure-network-design.png",
    screenshots: [],
    tools: [
      "Cisco Packet Tracer",
      "Cisco IOS CLI",
      "VLANs",
      "ACLs",
      "Router on a Stick",
    ],
    builtWith: [
      "Cisco Packet Tracer",
      "Cisco IOS CLI",
      "802.1Q Trunking",
      "VLANs",
      "Access Control Lists",
      "Inter-VLAN Routing",
    ],
    features: [
      {
        emoji: "🔒",
        title: "Network Segmentation",
        description:
          "Three departments isolated using VLANs — Admin (VLAN 10), Sales (VLAN 20), and IT Support (VLAN 30).",
      },
      {
        emoji: "🛡️",
        title: "Access Control Lists",
        description:
          "ACLs restrict Sales from accessing Admin resources while allowing IT Support full network access.",
      },
      {
        emoji: "🔄",
        title: "Inter-VLAN Routing",
        description:
          "Router on a Stick configuration enables controlled communication between VLANs through subinterfaces.",
      },
      {
        emoji: "☁️",
        title: "Cloud Server Access",
        description:
          "Admin department securely connects to a cloud payroll system on a separate network (10.0.0.0/24).",
      },
      {
        emoji: "🏗️",
        title: "Enterprise Topology",
        description:
          "Core router, managed switch, and trunk links designed for a real-world financial services branch office.",
      },
      {
        emoji: "✅",
        title: "Verified Security",
        description:
          "All access rules tested and verified — Sales blocked from Admin, IT Support has full access, Admin reaches cloud server.",
      },
    ],
    liveLink: "https://valiant-death-f4f.notion.site/Secure-Enterprise-Network-Design-AltSchool-Cybersecurity-Project-389ddd21bfaf818d9fc9fa6e3ac10b9b",
    githubLink: "https://github.com/AdesinaTimothy/secure-network-design",
  },

  {
    slug: "port-scanner",
    title: "Port Scanner",
    category: "Cybersecurity",
    platforms: "CLI (Python)",
    disclaimer:
      "Educational and authorised security testing only. Only scan systems you own or have explicit written permission to test — unauthorised port scanning may be illegal under laws like the UK Computer Misuse Act 1990.",
    tagline:
      "A lightweight port scanner built in Python that identifies open ports and their running services on a target host — the foundation of every security assessment.",
    description:
      "Port scanning is the first step in any security audit: before a system can be secured or tested, you need to know which ports are open and what's running behind them. This tool connects to a range of ports on a target machine, reports which ones are open, and identifies the service on each, all from the command line. I built it to move beyond just using tools like Nmap, and to actually understand how they work under the hood — TCP connections at the socket level, the relationship between ports and services, and why reconnaissance tooling is structured the way it is.",
    image: "/images/port-scanner.png",
    heroImage: "/images/port-scanner.png",
    screenshots: [],
    tools: ["Python", "Sockets", "CLI"],
    builtWith: ["Python 3", "socket", "datetime"],
    features: [
      {
        emoji: "🎯",
        title: "Custom Port Range Scanning",
        description:
          "Scans a target IP or hostname across any custom port range you specify.",
      },
      {
        emoji: "⚡",
        title: "Real-Time Detection",
        description:
          "Identifies open ports as it scans, with immediate command-line feedback.",
      },
      {
        emoji: "🔎",
        title: "Service Identification",
        description:
          "Detects the service running on each open port — SSH, HTTP, HTTPS, and more.",
      },
      {
        emoji: "⏱️",
        title: "Scan Timestamps",
        description:
          "Displays scan start and finish times so you can track how long a scan took.",
      },
      {
        emoji: "📊",
        title: "Scan Summary",
        description:
          "Reports a clean summary of total open ports found once the scan completes.",
      },
      {
        emoji: "🖥️",
        title: "Clean CLI Output",
        description:
          "Readable, structured terminal output built for clarity over noise.",
      },
    ],
    githubLink: "https://github.com/AdesinaTimothy/port-scanner",
  },

  {
    slug: "aws-security-killswitch",
    title: "AWS Active-Defence Kill-Switch",
    category: "Cybersecurity",
    platforms: "AWS (Cloud)",
    disclaimer:
      "Built and tested in a personal AWS lab account. All account IDs, IP addresses, and access keys shown in screenshots have been redacted — the secret used is a decoy (honeytoken) with dummy values.",
    tagline:
      "An AWS system that detects access to a honeytoken secret in near real-time and automatically revokes the attacker's IAM permissions — turning passive monitoring into active defence.",
    description:
      "This project stores a secret that no legitimate system ever reads, then treats any access to it as an attack: alert instantly, and automatically lock the attacker out. Built entirely with native AWS services (CloudTrail, CloudWatch, EventBridge, SNS, Lambda, Secrets Manager, IAM), it runs two detection pipelines in parallel so they can be compared head-to-head — a CloudWatch metric-filter/alarm path and an EventBridge event-driven path. EventBridge proved roughly 3 minutes faster and carried the attacker's identity and source IP, so it's the one wired to the kill-switch: a Lambda function that detaches the attacker's IAM policy the moment they touch the honeytoken. The kill-switch itself is defence-in-depth — an in-code allow-list and a resource-scoped IAM policy mean it can only ever act on the designated victim user, never be turned against its own operator.",
    image: "/images/placeholder.png",
    screenshots: [],
    tools: [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "Amazon EventBridge",
      "AWS Lambda",
      "AWS IAM",
      "AWS Secrets Manager",
    ],
    builtWith: [
      "AWS CloudTrail",
      "Amazon CloudWatch (Logs, Metric Filters, Alarms)",
      "Amazon EventBridge",
      "Amazon SNS",
      "AWS Lambda (Python)",
      "AWS Secrets Manager",
      "AWS IAM",
      "Amazon S3",
      "AWS CLI",
    ],
    features: [
      {
        emoji: "🍯",
        title: "Honeytoken Detection",
        description:
          "A decoy secret in Secrets Manager that no legitimate system ever reads — any access is by definition an attack.",
      },
      {
        emoji: "🔀",
        title: "Dual Detection Pipelines",
        description:
          "CloudWatch metric-filter/alarm and EventBridge run in parallel, benchmarked head-to-head for speed and signal quality.",
      },
      {
        emoji: "⚡",
        title: "Automated Kill-Switch",
        description:
          "A Lambda function detaches the attacker's IAM policy the instant they touch the honeytoken — their next command is denied.",
      },
      {
        emoji: "🛡️",
        title: "Defence-in-Depth Safety",
        description:
          "An in-code allow-list plus a resource-scoped IAM policy ensure the kill-switch can only ever act on the designated victim.",
      },
      {
        emoji: "📧",
        title: "Real-Time Alerting",
        description:
          "SNS email alerts on both detection paths, with the EventBridge alert carrying the attacker's identity and source IP.",
      },
      {
        emoji: "✅",
        title: "Verified with Live Proof",
        description:
          "Before/after AWS CLI tests confirm the attacker's second attempt is denied immediately after the kill-switch fires.",
      },
    ],
    githubLink:
      "https://github.com/AdesinaTimothy/aws-security-monitoring-killswitch",
  },
  {
    slug: "our-story",
    title: "Our Story",
    category: "Web App",
    platforms: "Web",
    tagline:
      "A private online diary for couples: photos, letters, journal entries, places and milestones, written by two people and seen by no one else.",
    description:
      "Our Story gives each couple their own locked diary. Two accounts share one space where they keep their photos in an album that opens like a book, write letters (including ones sealed until a future date), keep a shared journal, pin places on a map and build a timeline of their relationship. Any couple can sign up: one partner starts the diary and invites the other with a one-time link. Under the hood it is a full-stack Next.js app with a layered, modular backend (controllers, services, repositories, validation and shared core infrastructure), where every database query is scoped to the couple so one diary can never read another. It ships with an animated landing page, light and dark themes, email verification and password reset, rate-limited sign-in, file uploads to local disk or S3, and is covered by integration and end-to-end tests.",
    image: "/images/our-story-hero.webp",
    heroImage: "/images/our-story-hero.webp",
    screenshots: [
      "/images/our-story-hero.webp",
      "/images/our-story-privacy.webp",
      "/images/our-story-home.webp",
      "/images/our-story-timeline.webp",
      "/images/our-story-memories.webp",
      "/images/our-story-letters.webp",
      "/images/our-story-journal.webp",
      "/images/our-story-start.webp",
    ],
    tools: ["Next.js", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS", "Railway"],
    builtWith: [
      "Next.js 16 (App Router, Server Actions)",
      "Node.js",
      "React 19",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "TailwindCSS",
      "Framer Motion",
      "Zod",
      "Vitest",
      "Playwright",
      "Railway",
    ],
    features: [
      {
        emoji: "🔒",
        title: "Private by Design",
        description:
          "Each diary holds exactly two accounts. Every query is scoped to the couple, and photos are only served to the two of you once signed in.",
      },
      {
        emoji: "📖",
        title: "Photo Album Book",
        description:
          "Photos are bound into a book you page through, with album and grid views, favourites and filters by year.",
      },
      {
        emoji: "💌",
        title: "Letters & Time Capsules",
        description:
          "Write letters to each other, keep drafts, or seal one so it only opens on a date that matters.",
      },
      {
        emoji: "🗺️",
        title: "Timeline, Memories & Places",
        description:
          "A milestone timeline, a memory vault and a map of every place you've been together.",
      },
      {
        emoji: "✨",
        title: "Animated Landing Page",
        description:
          "Draggable polaroids, a live 'together for' counter and scroll-driven chapters, with reduced-motion support.",
      },
      {
        emoji: "🏗️",
        title: "Layered Architecture",
        description:
          "Controllers, services, repositories and validation per feature module, with lint rules that keep the layers apart and tests that cover the journeys.",
      },
    ],
    liveLink: "https://our-story-production-2af5.up.railway.app",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
