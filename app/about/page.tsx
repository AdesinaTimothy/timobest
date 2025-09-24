import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <section className="mt-20 py-3" id="about">
        <div className="w-full flex flex-col  gap-10 md:gap-20 items-center justify-between">
          <div className="w-[400px]    md:w-[450] ">
            <Image
              src="/images/timobest.jpg"
              alt="Picture of the author"
              width={450}
              height={650}
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
              with real-world impact. This shift moved me beyond patient care to
              designing systems, improving experiences, and driving innovations
              on a broader scale. More than mastering tools, it’s a bout
              engineering thoughtful solutions that blend compassion with
              innovation—seeing challenges clinically and creatively to improve
              lives and shape a better future.
            </p>
          </div>
        </div>
      </section>

      <section id="apart" className="w-full auto my-8">
        <div className="w-full border-1 border-gray-600 h-5xl rounded-lg flex flex-row items-start justify-between  md:items-center gap-4 pt-4 pb-4 pl-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-yellow-500 text-xl md:text-3xl font-semibold">
              What set s me apart
            </h3>
            <div>
              <ul className="flex flex-col gap-2\1">
                <li className="text-white text-base flex gap-3">
                  <div>💻</div>I breath design/codes
                </li>
                <li className="text-white text-base flex gap-2">
                  <div>☘️</div>I have a growth mindset
                </li>
                <li className="text-white text-base flex gap-2">
                  <div>🧩</div>I thrive in complexities
                </li>
                <li className="text-white text-base flex gap-2">
                  <div>🤝</div>I am a team player
                </li>
                <li className="text-white text-base flex gap-2">
                  <div>✨</div>I shape experiences
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Image
              src="/images/icons/svg/trophy1.png"
              alt="Picture of the author"
              width={150}
              height={150}
              className=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
