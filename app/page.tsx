import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="bg-black flex flex-col w-full items-center justify-center">
      {/* Header Section  */}
      <div className="w-full h-auto ">
        <section className="w-full h-auto" id="hero">
          <div
            id="hero-div"
            className="w-full justify-between flex h-auto items-center mb-2 pt-5"
          >
            <div className="gap-4 w-full">
              <h1 className="text-white text-5xl md:text-8xl font-[700]">
                Hello, <br></br> I'm TimoBest 👋
              </h1>
              <h4 className=" text-yellow-500 text-2xl md:text-3xl font-[500] mt-3">
                Nurse & Design Engineer. 👨‍⚕️
              </h4>
              <p className="text-white text-[20px] mt-6">
                I'm passionate about designing 🎨, and bringing it to life
                through code, crafting delightful 🌐 web and 📱 mobile
                experiences and a growing expertie in 🤖 AI-driven technologies
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 py-3" id="about">
          <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-between">
            <div className="w-[300]    md:w-[450] ">
              <Image
                src="/images/timobest.jpg"
                alt="Picture of the author"
                width={450}
                height={450}
                className="rounded-full object-cover border-2 border-yellow-500 aspect-square"
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <h1 className="text-white text-4xl md:text-6xl mb-2 font-semibold">
                I <span className="text-yellow-500">design</span> and <br />{" "}
                <span className="text-yellow-500">build</span> softwares 👨‍💻
              </h1>
              <p className="text-md md:text-lg text-white leading-relaxed tracking-wide">
                I bridged healthcare and design engineering, starting as a nurse
                where I built empathy, recision, and problem-solving skills.
                Expanding into design engineering, I learned to create solutions
                with real-world impact. This shift moved me beyond patient care
                to designing systems, improving experiences, and driving
                innovations on a broader scale. More than mastering tools, it’s
                a bout engineering thoughtful solutions that blend compassion
                with innovation—seeing challenges clinically and creatively to
                improve lives and shape a better future.
              </p>

              <div className="flex flex-col md:flex-row gap-6">
                <Link href="/about">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black  py-2 px-6 rounded-md shadow-md transition-colors duration-300">
                    Learn more about me
                  </button>
                </Link>
                <button className="bg-white hover:bg-yellow-600 text-black  py-2 px-6 rounded-md shadow-md transition-colors duration-300">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 py-6" id="work-experience">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-yellow-500 text-4xl md:text-5xl font-[500]">
              Work Experience 💪
            </h3>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">
                  <div className="w-full items-center justify-between flex flex-row">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <div>
                        <Image
                          src="/images/rnlinked.svg"
                          alt="Picture of the author"
                          width={60}
                          height={60}
                          className="rounded-full object-cover aspect-square border-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-white  text-lg font-[600]">
                          RnLINKED
                        </h3>
                        <p className="text-sm font-[300]">Design Engineer</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#fafafa]">April, 2025 - Present</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  <p className="text-white text-base">
                    I bridged healthcare and design engineering, starting as a
                    nurse where I built empathy, recision, and problem-solving
                    skills. Expanding into design engineering, I learned to
                    create solutions with real-world impact. This shift moved me
                    beyond patient care to designing systems, improving
                    experiences, and driving innovations on a broader scale.
                    More than mastering tools, it’s a bout engineering
                    thoughtful solutions that blend compassion with
                    innovation—seeing challenges clinically and creatively to
                    improve lives and shape a better future.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">
                  <div className="w-full items-center justify-between flex flex-row">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <div>
                        <Image
                          src="/images/rnlinked.svg"
                          alt="Picture of the author"
                          width={60}
                          height={60}
                          className="rounded-full object-cover border-1 aspect-square"
                        />
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-[600]">
                          DiaPal
                        </h3>
                        <p className="text-sm font-[300]">
                          Founding Design Engineer
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#fafafa]">April, 2025 - Present</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  <p className="text-white text-base">
                    I bridged healthcare and design engineering, starting as a
                    nurse where I built empathy, recision, and problem-solving
                    skills. Expanding into design engineering, I learned to
                    create solutions with real-world impact. This shift moved me
                    beyond patient care to designing systems, improving
                    experiences, and driving innovations on a broader scale.
                    More than mastering tools, it’s a bout engineering
                    thoughtful solutions that blend compassion with
                    innovation—seeing challenges clinically and creatively to
                    improve lives and shape a better future.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">
                  <div className="w-full items-center justify-between flex flex-row">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <div>
                        <Image
                          src="/images/timobest.jpg"
                          alt="Picture of the author"
                          width={60}
                          height={60}
                          className="rounded-full object-cover border-1 aspect-square"
                        />
                      </div>
                      <div>
                        <h3 className="text-white  text-lg font-[600]">
                          RnLINKED
                        </h3>
                        <p className="text-sm font-[300]">Design Engineer</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#fafafa]">April, 2025 - Present</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  <p className="text-white text-base">
                    I bridged healthcare and design engineering, starting as a
                    nurse where I built empathy, recision, and problem-solving
                    skills. Expanding into design engineering, I learned to
                    create solutions with real-world impact. This shift moved me
                    beyond patient care to designing systems, improving
                    experiences, and driving innovations on a broader scale.
                    More than mastering tools, it’s a bout engineering
                    thoughtful solutions that blend compassion with
                    innovation—seeing challenges clinically and creatively to
                    improve lives and shape a better future.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full h-auto mt-6">
          <div>
            <div className="w-full flex flex-col gap-3">
              <h3 className="text-yellow-500 text-4xl md:text-5xl font-[500]">
                Skills 🧰
              </h3>
            </div>

            <div className="h-auto flex flex-col flex-wrap mt-4">
              <h3 className="text-white mt-2 text-2xl">Frontend Development</h3>

              <div className="flex flex-wrap  mt-1 gap-2 max-w-4xl">
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    HTML
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/HTML5.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    CSS3
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/CSS3.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Tailwind CSS
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Tailwind-CSS.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    JavaScript
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/JavaScript.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    TypeScript
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/TypeScript.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    React
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/React.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    NextJs
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Next.js.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Develpment */}
            <div className="h-auto flex flex-col flex-wrap mt-4">
              <h3 className="text-white mt-2 text-2xl">Backend Development</h3>

              <div className="flex flex-wrap  mt-1 gap-2 max-w-4xl">
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Node.js
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Node.js.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Express
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Express.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Rest APIs
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Tailwind-CSS.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    GraphQl
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/GraphQL.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    MongoDB
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/MongoDB.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    PostgresSQL
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/PostgresSQL.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Clerk
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Clerk.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    SupaBase
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/SupaBase.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="h-auto flex flex-col flex-wrap mt-4">
              <h3 className="text-white mt-1 text-2xl">Mobile Development</h3>

              <div className="flex flex-wrap  mt-2 gap-2 max-w-4xl">
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    React Native
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/React.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Expo
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Expo.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    SQLite
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/SQLite.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    MMKV
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/GraphQL.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    NativeWind
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/MongoDB.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Reanimated
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/logo-hero.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="h-auto flex flex-col flex-wrap mt-4">
              <h3 className="text-white mt-1 text-2xl">Design</h3>

              <div className="flex flex-wrap  mt-2 gap-2 max-w-4xl">
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Figma
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Figma.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Illustrator
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Adobe-Illustrator.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Photoshop
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Adobe-Photoshop.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="h-auto flex flex-col flex-wrap mt-4">
              <h3 className="text-white mt-1 text-2xl">Packages/Library</h3>

              <div className="flex flex-wrap  mt-2 gap-2 max-w-4xl">
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Zustand
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Figma.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    React-Toastify
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Adobe-Illustrator.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-wrap items-center justify-between gap-3  bg-white rounded-sm px-2 py-1 shadow-sm 
                hover:bg-yellow-500 hover:shadow-md transition-colors duration-100 cursor-pointer group"
                >
                  {/* Label */}
                  <p className="text-gray-900 text-sm font-medium group-hover:text-white">
                    Shadcn UI
                  </p>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full">
                    <Image
                      src="/images/icons/svg/Adobe-Photoshop.svg"
                      alt="HTML5 Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT SECTIONS */}
        <section id="projects" className="w-full h-auto mt-16">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-yellow-500 text-4xl md:text-5xl font-[500]">
              Selected Projects 🛠️
            </h3>
          </div>

          <div>
            <p className="text-white">
              I've worked on a diverse range of projects, from mobile
              applications, websites, and web apps to Chrome extensions,
              AI-driven tools, and more.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <div>
            <Link href="/project">
              <button className="bg-white rounded-md py-2 px-3 mt-5 hover:bg-gray-300">
                View more Projects
              </button>
            </Link>
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
