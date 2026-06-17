import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import Footer from "@/components/ui/Footer";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="bg-black w-full min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-2 z-50 w-full flex items-center justify-between bg-transparent backdrop-blur-md px-5 py-3 rounded-md">
        <Link
          href="/project"
          className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-semibold">TimoBest</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/project"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-[1] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto px-6 pt-24 pb-16 min-h-[70vh]">
        {/* Spotlight glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="flex flex-col gap-5 relative z-[1]">
          {/* App Icon */}
          {project.appIcon && (
            <Image
              src={project.appIcon}
              alt={`${project.title} icon`}
              width={128}
              height={128}
              className="rounded-[28px] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)] object-cover"
            />
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
            {project.title}
          </h1>

          {/* Category badge */}
          <span className="inline-flex items-center px-4 py-1.5 border border-white/[0.06] rounded-full font-mono text-xs font-medium text-gray-400 tracking-wider w-fit">
            {project.category} &bull; {project.platforms}
          </span>

          {/* Disclaimer */}
          {project.disclaimer && (
            <p className="text-xs text-gray-500 italic">{project.disclaimer}</p>
          )}

          {/* Tagline */}
          <p className="text-lg leading-relaxed text-gray-400 max-w-[480px]">
            {project.tagline}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-500 text-black text-sm font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                View Live <ExternalLink size={14} />
              </a>
            )}
            {project.appStoreLink && (
              <a
                href={project.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white text-sm font-medium py-3 px-6 rounded-lg hover:bg-white/15 transition-colors"
              >
                App Store
              </a>
            )}
            {project.playStoreLink && (
              <a
                href={project.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white text-sm font-medium py-3 px-6 rounded-lg hover:bg-white/15 transition-colors"
              >
                Google Play
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white text-sm font-medium py-3 px-6 rounded-lg hover:bg-white/15 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Hero image / phone mockup */}
        <div className="flex justify-center md:justify-end">
          {project.isMobileApp ? (
            <div className="relative w-[260px] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)] bg-gray-900/50 border-[3px] border-white/[0.1]">
              <Image
                src={project.heroImage || project.image}
                alt={`${project.title} preview`}
                width={460}
                height={920}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="relative w-full max-w-[420px] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)] bg-gray-900/50 border border-white/[0.06]">
              <Image
                src={project.heroImage || project.image}
                alt={`${project.title} preview`}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-6">About</h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </section>

      {/* Key Features */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.features.map((feature, i) => (
            <div
              key={i}
              className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
            >
              <span className="text-2xl mb-4 block">{feature.emoji}</span>
              <h3 className="text-white font-semibold text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white mb-10">Screenshots</h2>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {project.screenshots.map((src, i) => (
              <div
                key={i}
                className={`flex-shrink-0 snap-center overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)] bg-gray-900/50 border border-white/[0.06] ${
                  project.isMobileApp
                    ? "w-[220px] rounded-[32px] border-[2px] border-white/[0.1]"
                    : "w-[360px] rounded-xl"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  width={project.isMobileApp ? 460 : 800}
                  height={project.isMobileApp ? 920 : 400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Demo Video */}
      {project.demoVideo && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white mb-4">Demo</h2>
          <p className="text-gray-500 text-sm mb-8">
            A quick look at the app in action.
          </p>
          <div className={`mx-auto ${project.isMobileApp ? "max-w-[300px]" : "max-w-2xl"}`}>
            <div
              className={`overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-gray-900/50 border border-white/[0.06] ${
                project.isMobileApp
                  ? "rounded-[40px] border-[3px] border-white/[0.1]"
                  : "rounded-xl"
              }`}
            >
              <video
                src={project.demoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* Try It — Expo QR Code */}
      {project.expoQrCode && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-white mb-4">Try It Yourself</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
            Scan the QR code below with the{" "}
            <a
              href="https://expo.dev/go"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 underline underline-offset-2 hover:text-yellow-400"
            >
              Expo Go
            </a>{" "}
            app on your phone to preview this project live on your device.
          </p>
          <div className="inline-flex flex-col items-center gap-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
            <div className="w-[200px] h-[200px] bg-white rounded-xl p-3">
              <Image
                src={project.expoQrCode}
                alt="Scan with Expo Go"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center">
              <p className="text-white text-sm font-medium">Scan with Expo Go</p>
              <p className="text-gray-500 text-xs mt-1">Available on iOS & Android</p>
            </div>
          </div>
        </section>
      )}

      {/* Built With */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-6">Built With</h2>
        <div className="flex flex-wrap gap-3">
          {project.builtWith.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-lg text-sm text-gray-300 font-medium hover:bg-white/[0.08] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="flex flex-col gap-7 w-full mt-10 h-auto py-8">
        <Separator />
        <Footer />
      </section>
    </div>
  );
}
