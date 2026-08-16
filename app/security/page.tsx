import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import Footer from "@/components/ui/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { PROJECTS } from "@/data/projects";
import {
  CERTIFICATIONS,
  SECURITY_DOMAINS,
  SECURITY_TOOLS,
  TARGET_ROLES,
  type CertificationStatus,
  type RoleFocus,
} from "@/data/security";

const securityProjects = PROJECTS.filter((p) => p.category === "Cybersecurity");

const statusStyles: Record<CertificationStatus, string> = {
  Completed: "bg-yellow-500 text-black",
  "In Progress": "bg-yellow-500/15 text-yellow-500 border border-yellow-500/40",
  Planned: "bg-white/5 text-gray-400 border border-gray-700",
};

const focusStyles: Record<RoleFocus, string> = {
  "Primary target": "bg-yellow-500 text-black",
  "Also exploring": "bg-white/5 text-gray-400 border border-gray-700",
};

export default function SecurityPage() {
  return (
    <div className="bg-black flex flex-col w-full items-center justify-center px-2">
      {/* Header Section */}
      <section
        id="menu"
        className="sticky top-2 z-50 w-full h-auto flex flex-row flex-wrap items-center rounded-md justify-center md:justify-between gap-y-1 bg-transparent backdrop-blur-md px-2 md:px-5"
      >
        <div>
          <Link href="/">
            <h5 className="text-yellow-500 text-lg font-semibold">TimoBest</h5>
          </Link>
        </div>
        <div>
          <NavigationMenu className="">
            <NavigationMenuList className="gap-0 md:gap-3">
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <p className="px-2 md:px-4 py-2 text-sm md:text-base font-semibold text-yellow-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                    Home
                  </p>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/project" passHref>
                  <p className="px-2 md:px-4 py-2 text-sm md:text-base font-semibold text-yellow-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                    Projects
                  </p>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/security" passHref>
                  <p className="px-2 md:px-4 py-2 text-sm md:text-base font-semibold text-yellow-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                    Security
                  </p>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" passHref>
                  <p className="px-2 md:px-4 py-2 text-sm md:text-base font-semibold text-yellow-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                    About
                  </p>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>

      <div className="w-full h-auto">
        {/* HERO SECTION */}
        <section className="relative w-full h-auto" id="hero">
          <div className="w-full justify-between flex h-auto items-center mt-30 mb-2 pt-5">
            <div className="gap-4 w-full">
              <h1 className="text-white text-5xl md:text-8xl font-[700]">
                Cyber <br /> Security 🔐
              </h1>

              <div className="flex flex-wrap items-center gap-3 mt-3">
                <h4 className="text-yellow-500 text-2xl md:text-3xl font-medium">
                  Securing systems that people depend on 🛡️
                </h4>

                <span className="rounded-full bg-white/10 border border-white px-3 py-2 text-sm text-white">
                  Network • Cloud • Blue Team • GRC
                </span>
              </div>

              <p className="text-white text-[20px] mt-6">
                I came into security from healthcare, where a single leaked
                record is somebody's private life 🏥. That perspective shapes how
                I approach it — segment the network, assume breach, verify every
                rule, and write it down so the next person can follow it. Here's
                what I'm building, breaking, and learning 🔍
              </p>
            </div>
          </div>
        </section>

        {/* SECURITY DOMAINS SECTION */}
        <section id="security-skills" className="w-full h-auto mt-20 py-3">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-yellow-500 text-4xl md:text-5xl font-[500]">
              Security Domains 🧠
            </h3>
            <p className="text-white">
              The areas I work across — from segmenting a network at the switch
              level to keeping patient data on the right side of UK GDPR.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SECURITY_DOMAINS.map(({ Icon, title, description, skills }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-lg border border-gray-700 p-5 hover:border-yellow-500/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-yellow-500/10 border border-yellow-500/30">
                    <Icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h4 className="text-white text-xl font-semibold">{title}</h4>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-white text-xs rounded-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="security-projects" className="w-full h-auto mt-16">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-yellow-500 text-4xl md:text-5xl font-[500]">
              Security Projects 🛠️
            </h3>
          </div>

          <div>
            <p className="text-white">
              Hands-on labs and network designs — each one documented with the
              topology, the configuration, and the tests that prove the rules
              actually hold.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                image={project.image}
                title={project.title}
                description={project.tagline}
                tools={project.tools}
                liveLink={project.liveLink}
              />
            ))}
          </div>

          <div>
            <Link href="/project">
              <button className="bg-white rounded-md py-2 px-3 mt-5 hover:bg-gray-300">
                View all Projects
              </button>
            </Link>
          </div>
        </section>

        {/* TOOLS SECTION */}
        <section id="security-tools" className="w-full h-auto mt-16">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-yellow-500 text-4xl md:text-5xl font-[500]">
              Security Tools 🧰
            </h3>
          </div>

          {SECURITY_TOOLS.map((group) => (
            <div
              key={group.title}
              className="h-auto flex flex-col flex-wrap mt-4"
            >
              <h3 className="text-white mt-2 text-2xl">{group.title}</h3>

              <div className="flex flex-wrap mt-1 gap-2 max-w-4xl">
                {group.tools.map(({ name, icon, Icon }) => (
                  <div
                    key={name}
                    className="flex flex-wrap items-center justify-between gap-3 bg-white rounded-sm px-2 py-1 shadow-sm
                 hover:bg-gray-200 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                  >
                    {/* Label */}
                    <p className="text-gray-900 text-sm font-medium">{name}</p>

                    {/* Icon */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full">
                      {icon ? (
                        <Image
                          src={icon}
                          alt={`${name} logo`}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      ) : Icon ? (
                        <Icon className="w-[18px] h-[18px] text-gray-900" />
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="w-full h-auto mt-16">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-yellow-500 text-4xl md:text-5xl font-[500]">
              Certifications & Training 🎓
            </h3>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="flex flex-col gap-3 rounded-lg border border-gray-700 p-5 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-yellow-500/10 border border-yellow-500/30 flex-shrink-0">
                      <cert.Icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-[600]">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 text-sm font-[300]">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusStyles[cert.status]
                      }`}
                    >
                      {cert.status}
                    </span>
                    <p className="text-[#fafafa] text-sm">{cert.period}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-gray-800 text-white text-xs rounded-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-yellow-500 hover:text-yellow-400 transition-colors w-fit"
                  >
                    View credential
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* TARGET ROLES SECTION */}
        <section id="target-roles" className="w-full h-auto mt-16">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-yellow-500 text-4xl md:text-5xl font-[500]">
              Where I'm Heading 🎯
            </h3>
            <p className="text-white">
              I'm working towards my first full-time security role. These are
              the seats I'm aiming for.
            </p>
          </div>

          <ul className="mt-8 flex flex-col gap-3">
            {TARGET_ROLES.map(({ Icon, title, focus, note }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-lg border border-gray-700 px-5 py-4 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-md bg-yellow-500/10 border border-yellow-500/30 flex-shrink-0">
                  <Icon className="w-4 h-4 text-yellow-500" />
                </div>

                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h4 className="text-white text-lg font-[600]">{title}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${focusStyles[focus]}`}
                    >
                      {focus}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {note}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Hiring CTA */}
          <div className="mt-8 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-xl md:text-2xl font-semibold">
                Open to entry-level security roles 🚀
              </h4>
              <p className="text-gray-400 text-sm">
                Junior, apprenticeship, or career-changer routes — I'd love to
                hear about it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="mailto:timobest121@gmail.com">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-6 rounded-md shadow-md transition-colors duration-300">
                  Get in touch
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/timothy-adesina-bb1188221/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-white hover:bg-gray-300 text-black py-2 px-6 rounded-md shadow-md transition-colors duration-300">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER SECTION */}
      <section
        id="footer"
        className="flex flex-col gap-7 w-full mt-10 h-auto py-8"
      >
        <Separator />
        <Footer />
      </section>
    </div>
  );
}
