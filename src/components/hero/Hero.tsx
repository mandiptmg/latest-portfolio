"use client";

import { useGlobalContext } from "@/context/context";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import hero from "../../../public/hero.png";

const Hero = () => {
  const { dark } = useGlobalContext();

  return (
    <div className="relative min-h-[89vh] pt-20 ">
    
      <div className="w-[90vw] mx-auto">
        <div className="lg:grid grid-cols-2 flex flex-col-reverse gap-7 items-center">
          {/* Left Section - Text Content */}
          <div className="text-center lg:text-left py-7">
            <h5 className="text-lg lg:text-xl font-normal dark:text-white">
              Hi! I am Mandip, a
            </h5>
            <p className="text-3xl lg:text-5xl font-bold capitalize mt-2 text-[#00ADB5]">
              Full Stack Developer
            </p>
            <p className="text-gray-700 dark:text-gray-200 text-base my-6">
              I’m a passionate Full Stack Developer with 1+ years of experience
              crafting visually stunning and user-friendly websites. I
              specialize in modern web technologies to build seamless
              interfaces and robust backends, ensuring both aesthetics and
              performance.
            </p>

            {/* Social Buttons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <SocialButton
                href="https://github.com/mandiptmg"
                Icon={FaGithub}
                label="Github"
              />
              <SocialButton
                href="https://www.linkedin.com/in/mandip-tamang/"
                Icon={FaLinkedin}
                label="LinkedIn"
              />
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
                style={{ clipPath: "polygon(1% 46%, 100% 8%, 100% 100%, 0% 100%)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Social Button Component
const SocialButton = ({ href, Icon, label }) => (
  <button
    onClick={() => window.open(href, "_blank")}
    className="flex items-center gap-2 px-5 py-2 bg-[#00ADB5] text-white font-medium shadow-[3px_3px_0px_black] transition-all hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
  >
    <Icon className="text-2xl" />
    <span className="text-lg font-semibold">{label}</span>
  </button>
);

export default Hero;
