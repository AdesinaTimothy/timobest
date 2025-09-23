import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="bg-black w-full flex items-center justify-center">
      {/* Header Section  */}
      <div className="w-full h-auto ">
        <section className="w-full h-auto" id="hero">
          <div
            id="hero-div"
            className="w-full justify-between flex h-auto items-center mb-2 pt-20"
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
            </div>
          </div>
        </section>

        <section className="mt-6 py-6" id="work-experience">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-yellow-500 text-4xl md:text-5xl font-[500]">
              Work Experience 💪
            </h3>
            <p className=" text-sm text-[#A3A3A3]"></p>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white">
                  <div className="w-full items-center justify-between flex flex-row">
                    <div className="flex flex-row items-center justify-start gap-3">
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
                    <div className="flex flex-row items-center justify-start gap-3">
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
                    <div className="flex flex-row items-center justify-start gap-3">
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

        <div></div>
      </div>
    </div>
  );
}
