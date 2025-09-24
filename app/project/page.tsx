import Footer from "@/components/ui/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="bg-black w-full ">
      <section
        id="menu"
        className="sticky top-2 z-50 w-full h-auto flex flex-row items-center rounded-md justify-between bg-transparent backdrop-blur-md px-5"
      >
        <div>
          <Link href="/">
            <h5 className="text-yellow-500 text-lg font-semibold">TimoBest</h5>
          </Link>
        </div>
        <div>
          <NavigationMenu className="">
            <NavigationMenuList className="gap-3">
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <p className="px-4 py-2 text-base font-semibold text-yellow-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                    Home
                  </p>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/project" passHref>
                  <p className="px-4 py-2 text-base font-semibold text-yellow-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                    Projects
                  </p>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" passHref>
                  <p className="px-4 py-2 text-base font-semibold text-yellow-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-black">
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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
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
