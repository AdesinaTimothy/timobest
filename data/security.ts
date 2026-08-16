import {
  Activity,
  Boxes,
  Bug,
  ClipboardCheck,
  Cloud,
  Crosshair,
  Fingerprint,
  GraduationCap,
  HeartPulse,
  KeyRound,
  MonitorCheck,
  Network,
  Radar,
  ScanSearch,
  ScrollText,
  SearchCheck,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Terminal,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Security domains — the "what I can do" section                      */
/* ------------------------------------------------------------------ */

export interface SecurityDomain {
  Icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
}

export const SECURITY_DOMAINS: SecurityDomain[] = [
  {
    Icon: Network,
    title: "Network Security",
    description:
      "Designing segmented networks that limit blast radius, and enforcing who can talk to what at the routing layer.",
    skills: [
      "VLAN Segmentation",
      "Inter-VLAN Routing",
      "Access Control Lists",
      "802.1Q Trunking",
      "Router on a Stick",
      "Subnetting",
    ],
  },
  {
    Icon: Cloud,
    title: "Cloud Security",
    description:
      "Securing workloads in the cloud through least-privilege identity, tight network boundaries, and hardened configuration.",
    skills: [
      "IAM & Least Privilege",
      "Shared Responsibility Model",
      "Security Groups",
      "Cloud Config Review",
      "Secrets Management",
    ],
  },
  {
    Icon: ShieldAlert,
    title: "Defensive Security",
    description:
      "Watching the network for what shouldn't be there — collecting logs, spotting anomalies, and responding to incidents.",
    skills: [
      "Log Analysis",
      "SIEM Fundamentals",
      "Threat Detection",
      "Incident Response",
      "Network Monitoring",
    ],
  },
  {
    Icon: Crosshair,
    title: "Offensive Security",
    description:
      "Thinking like an attacker to find weaknesses before someone else does, then writing it up so it can be fixed.",
    skills: [
      "Reconnaissance",
      "Vulnerability Scanning",
      "Exploitation Basics",
      "Password Attacks",
      "Findings & Reporting",
    ],
  },
  {
    Icon: Shield,
    title: "Application Security",
    description:
      "Building software that holds up under pressure — validated inputs, safe authentication, and no secrets in the repo.",
    skills: [
      "OWASP Top 10",
      "Secure Authentication",
      "Input Validation",
      "Session Management",
      "Dependency Hygiene",
    ],
  },
  {
    Icon: ScrollText,
    title: "Governance, Risk & Compliance",
    description:
      "The paperwork side that actually matters — especially in healthcare, where patient data carries real legal weight.",
    skills: [
      "Risk Assessment",
      "Security Policies",
      "UK GDPR",
      "NHS DSP Toolkit",
      "Access Control Policy",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Tools — same white-pill treatment as the home page skills section   */
/* TODO: trim this to the tools you have genuinely worked with.        */
/* ------------------------------------------------------------------ */

export interface SecurityTool {
  name: string;
  /** Path to an SVG in /public/images/icons/svg — takes priority over Icon. */
  icon?: string;
  /** Lucide fallback for tools with no logo in the icon set. */
  Icon?: LucideIcon;
}

export interface SecurityToolGroup {
  title: string;
  tools: SecurityTool[];
}

export const SECURITY_TOOLS: SecurityToolGroup[] = [
  {
    title: "Network & Traffic Analysis",
    tools: [
      { name: "Cisco Packet Tracer", Icon: Network },
      { name: "Cisco IOS CLI", Icon: Terminal },
      { name: "Wireshark", Icon: Radar },
      { name: "Nmap", Icon: ScanSearch },
      { name: "tcpdump", Icon: Activity },
    ],
  },
  {
    title: "Offensive & Testing",
    tools: [
      { name: "Kali Linux", icon: "/images/icons/svg/Linux.svg" },
      { name: "Burp Suite", Icon: Bug },
      { name: "Metasploit", Icon: Crosshair },
      { name: "John the Ripper", Icon: KeyRound },
      { name: "Hydra", Icon: Fingerprint },
    ],
  },
  {
    title: "Defensive & Monitoring",
    tools: [
      { name: "Splunk", icon: "/images/icons/svg/Splunk.svg" },
      { name: "Kibana", icon: "/images/icons/svg/Kibana.svg" },
      { name: "Nessus", Icon: ShieldAlert },
      { name: "Snort", Icon: Siren },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    tools: [
      { name: "AWS", icon: "/images/icons/svg/AWS.svg" },
      { name: "Azure", icon: "/images/icons/svg/Azure.svg" },
      { name: "Docker", icon: "/images/icons/svg/Docker.svg" },
      { name: "Ubuntu", icon: "/images/icons/svg/Ubuntu.svg" },
      { name: "VirtualBox", Icon: Boxes },
    ],
  },
  {
    title: "Scripting & Automation",
    tools: [
      { name: "Python", icon: "/images/icons/svg/Python.svg" },
      { name: "Bash", icon: "/images/icons/svg/Bash.svg" },
      { name: "PowerShell", icon: "/images/icons/svg/Powershell.svg" },
      { name: "Git", icon: "/images/icons/svg/Git.svg" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Certifications & training                                           */
/* TODO: only AltSchool is confirmed — edit or remove the rest.        */
/* ------------------------------------------------------------------ */

export type CertificationStatus = "Completed" | "In Progress" | "Planned";

export interface Certification {
  Icon: LucideIcon;
  title: string;
  issuer: string;
  period: string;
  status: CertificationStatus;
  description: string;
  topics: string[];
  link?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    Icon: GraduationCap,
    title: "Cybersecurity Diploma",
    issuer: "AltSchool Africa",
    period: "2025 — Present",
    status: "In Progress",
    description:
      "A structured diploma covering network security, system administration, threat analysis, and hands-on lab work — the programme behind my Secure Enterprise Network Design project.",
    topics: [
      "Network Security",
      "Cisco Networking",
      "Threat Analysis",
      "Security Operations",
    ],
  },
  {
    Icon: ShieldCheck,
    title: "CompTIA Security+",
    issuer: "CompTIA",
    period: "Target 2026",
    status: "Planned",
    description:
      "The baseline vendor-neutral certification for security operations — threats, architecture, risk management, and incident response.",
    topics: ["Threats & Attacks", "Architecture", "Risk Management", "IAM"],
  },
  {
    Icon: Network,
    title: "CCNA",
    issuer: "Cisco",
    period: "Target 2026",
    status: "Planned",
    description:
      "Cisco's networking associate certification, building directly on the routing, switching, and ACL work from my Packet Tracer labs.",
    topics: ["Routing & Switching", "IP Connectivity", "Security Fundamentals"],
  },
];

/* ------------------------------------------------------------------ */
/* Roles I'm working towards                                           */
/* ------------------------------------------------------------------ */

export type RoleFocus = "Primary target" | "Also exploring";

export interface TargetRole {
  Icon: LucideIcon;
  title: string;
  focus: RoleFocus;
  /** One line on why this role, kept short — the skills live in SECURITY_DOMAINS. */
  note: string;
}

export const TARGET_ROLES: TargetRole[] = [
  {
    Icon: MonitorCheck,
    title: "SOC Analyst (Tier 1)",
    focus: "Primary target",
    note: "Monitoring, triaging and escalating alerts — the same calm-under-pressure work as a clinical shift.",
  },
  {
    Icon: ClipboardCheck,
    title: "GRC Analyst",
    focus: "Primary target",
    note: "Turning regulation into controls people actually follow, grounded in NHS information governance.",
  },
  {
    Icon: SearchCheck,
    title: "Information Security Analyst",
    focus: "Also exploring",
    note: "Hardening configs, reviewing access, and fixing what the scans surface — not just reporting it.",
  },
  {
    Icon: HeartPulse,
    title: "Healthcare Security Analyst",
    focus: "Also exploring",
    note: "Where I'm genuinely differentiated — I've been the clinician on the ward using the system.",
  },
];
