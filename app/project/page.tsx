import Footer from "@/components/ui/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="bg-black w-full ">
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

      <section className="w-full h-auto" id="hero">
        <div
          id="hero-div"
          className="w-full justify-between flex h-auto items-center mb-2 pt-5"
        >
          <div className="gap-4 w-full">
            <h1 className="text-white text-5xl md:text-7xl font-[700]">
              Welcome to <br></br> to my Project page 🛠️
            </h1>
            <h4 className=" text-yellow-500 text-2xl md:text-3xl font-[500] mt-3">
              Nurse & Design Engineer. 👨‍⚕️
            </h4>
            <p className="text-white text-[20px] mt-6">
              I've built a diverse range of projects, from mobile apps,
              websites, and web platforms to Chrome extensions, AI-driven tools,
              and design projects.
            </p>
          </div>
        </div>

        {/* Projects DIV */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            slug="renalpal"
            image="/images/renalpal-card.png"
            title="RenalPal"
            description="A comprehensive mobile companion app for dialysis patients to track fluid intake, manage medications with smart reminders, and monitor their kidney health journey."
            tools={[
              "React Native",
              "TypeScript",
              "Expo",
              "Supabase",
              "NativeWind",
              "Zustand",
            ]}
            liveLink="https://www.renalpal.com/"
          />
          <ProjectCard
            slug="youtube-qr-generator"
            image="/images/qrcodes.webp"
            title="YouTube QR Generator"
            description="A web app that converts YouTube URLs into downloadable QR codes for easy video sharing and offline access."
            tools={["Next.js", "Express", "Railway", "TailwindCSS"]}
            liveLink="https://qr-code-beryl-alpha.vercel.app/"
          />
          <ProjectCard
            slug="rota-app"
            image="/images/placeholder.png"
            title="Rota App"
            description="A mobile app that connects to the clinic's Excel rota spreadsheet, allowing staff to view shift schedules with push notifications for changes."
            tools={["React Native", "TypeScript", "Expo", "Google Sheets API"]}
          />
          <ProjectCard
            slug="restcountries"
            image="/images/restcountries.webp"
            title="RestCountries App"
            description="A React web app that displays countries with search and region filter functionality, using the RestCountries API."
            tools={["React", "Vite", "React Router", "TailwindCSS", "REST API"]}
            liveLink="https://endearing-concha-d9616c.netlify.app/"
          />
          <ProjectCard
            slug="secure-network-design"
            image="/images/secure-network-design.png"
            title="Secure Enterprise Network Design"
            description="Designed and implemented a secure enterprise network with VLANs, inter-VLAN routing, and ACLs for a financial services company."
            tools={["Cisco Packet Tracer", "Cisco IOS CLI", "VLANs", "ACLs"]}
          />
          <ProjectCard
            slug="port-scanner"
            image="/images/port-scanner.png"
            title="Port Scanner"
            description="A lightweight Python port scanner that identifies open ports and their running services on a target host — the foundation of every security assessment."
            tools={["Python", "Sockets", "CLI"]}
          />
        </div>
      </section>

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
