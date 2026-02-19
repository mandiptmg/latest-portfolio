"use client";

import { useGlobalContext } from "@/context/context";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import hero from "../../../public/hero.png";
import bgImage2 from "../../../public/bgImage2.jpg";
import bgImage from "../../../public/bgImage.jpg";

const Hero = () => {
  const { dark } = useGlobalContext();

  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center py-20 md:py-40  mb-20"
      style={{ backgroundImage: `url(${bgImage2.src})` }}
    >
      {/* Dark overlay (only in dark mode) */}
      <div className="absolute inset-0 dark:bg-[#222831]/70"></div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-100  dark:from-transparent dark:via-[#222831]/80 dark:to-[#222831]"></div>

      <div className="w-[90vw] relative z-10 main-container  grid place-items-center">
        <div className="lg:grid grid-cols-2 flex flex-col-reverse gap-7 items-center">
          {/* Left Section - Text Content */}
          <div className="text-center lg:text-left py-7">
            <h5 className="text-lg lg:text-xl font-normal dark:text-white">
              Hi! I am Mandip, a
            </h5>
            <p className="text-3xl lg:text-5xl font-bold capitalize mt-2 text-[#00ADB5]">
              Frontend-Focused Full Stack Developer
            </p>
            <p className="text-gray-700 dark:text-gray-200 text-base my-6">
              I&apos;m a passionate Full Stack Developer with 3+ years of
              experience crafting visually stunning and user-friendly websites.
              I specialize in modern web technologies to build seamless
              interfaces and robust backends, ensuring both aesthetics and
              performance.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => window.open("https://github.com/mandiptmg")}
                className="px-5 py-2 font-medium bg-[#00ADB5] text-[#EEEEEE] w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center gap-1"
              >
                <FaGithub className="text-xl sm:text-2xl " />{" "}
                <span className="text-base sm:text-lg font-semibold">
                  Github
                </span>
              </button>
              <button
                onClick={() =>
                  window.open("https://www.linkedin.com/in/mandip-tamang/")
                }
                className="px-5 py-2 font-medium bg-[#00ADB5] text-[#EEEEEE] w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center gap-1"
              >
                <FaLinkedin className="text-xl sm:text-2xl " />{" "}
                <span className="text-base md:text-lg font-semibold">
                  Linkedin
                </span>
              </button>
            </div>
          </div>

          {/* Right Section - Hero Image */}
          <div className="grid place-items-center">
            <div className="relative">
              <Image
                src={hero}
                alt="Hero Image"
                className={`${dark ? "grayscale" : ""} object-contain`}
              />
              <div
                className="bg-[#00ADB5]/50 absolute bottom-0 left-0 w-full h-60 -z-10"
                style={{
                  clipPath: "polygon(1% 46%, 100% 8%, 100% 100%, 0% 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
