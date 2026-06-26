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
    image: "/images/placeholder.png",
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
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
