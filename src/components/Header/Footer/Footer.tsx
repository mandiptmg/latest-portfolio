// import logoblack from './../../../../public/logo-black.png'
"use client";
import logoWhite from "./../../../../public/logo-white.png";
import { headerData, iconData } from "../../../../data/data";
import { headerProps, iconProps } from "../../../../types/type";
import Link from "next/link";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const lookElement = document.querySelector<Element>(".look");
      if (!lookElement) return;

      if (window.scrollY === 0) {
        lookElement.classList.add("hidden");
      } else {
        lookElement.classList.remove("hidden");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="pt-4 bg-black/90  ">
    <div className="main-container  w-full">
      <div className="flex justify-between gap-2 md:gap-5 items-center px-5 py-10 ">
        <div className=" grid place-items-center">
          <Link href="/">
            {" "}
            <Image
              src={logoWhite}
              width={150}
              height={150}
              className="aspect-square inline-flex object-contain"
              alt="log"
            />
          </Link>
        </div>
        <div className="text-center grid md:place-items-center place-items-start  text-gray-400">
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-4">
              {iconData.map((icon: iconProps) => (
                <div key={icon.id}>
                  <Link href={icon.link}>
                    <h1
                      title={icon.title}
                      className="text-sm sm:text-2xl rounded-full text-gray-600 hover:scale-[1.1] duration-700 bg-gray-100 p-2"
                    >
                      {icon.icon && <icon.icon />}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {headerData.map((item: headerProps) => (
                <div key={item.id}>
                  <Link href={item.link}>
                    <h1 className="capitalize text-sm sm:text-base cursor-pointer font-medium">
                      {item.title}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-black dark:bg-white/5  text-center py-5">

    <div className="main-container ">

        <p className="text-white text-xs sm:text-sm">
          Copyright &copy;2024,Design by{" "}
          <span className="font-thin">MANDIP TAMANG</span>
        </p>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer look  bg-gray-800  px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce text-sm md:text-xl fixed bottom-5 duration-700 hover:animate-none hover:scale-[1.1] right-2"
      >
        <FaArrowUp />
      </button>
      </div>
    </div>
  );
};

export default Footer;
