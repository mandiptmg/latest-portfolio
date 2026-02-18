"use client";
import Image from "next/image";
import about from "../../../public/about.jpg";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { usePathname } from "next/navigation";
const About = () => {
  const pathname = usePathname();
  return (
    <div className="py-20 w-[90vw] main-container grid place-items-center ">
      <div className="md:grid grid-cols-2 flex gap-8 md:gap-0 flex-col md:flex-row justify-between items-center">
        <div className="grid place-items-center">
          <div className="relative">
            <div
              data-aos="fade-right"
              className="w-[50%] -z-10 absolute left-0 -bottom-6 h-[115%] bg-[#00ADB5]/50"
            ></div>
            <Image
              data-aos="fade-right"
              data-delay={1}
              src={about}
              width={500}
              height={500}
              className="md:w-[70%] h-full object-contain aspect-square"
              alt="about"
            />
          </div>
        </div>
        <div data-aos="fade-up" className="space-y-3">
          <div>
            <h1 className="font-bold md:text-2xl text-xl color1 uppercase">
              about me
            </h1>
            <div className="w-16 h-1 bg-[#00ADB5]"></div>
          </div>

       <div className="space-y-4">
  <p className="dark:text-gray-200 text-gray-600 text-sm md:text-base">
    I am a <strong>Frontend-focused Full Stack Developer</strong> with over <strong>3+ years of professional experience</strong> building scalable, responsive, and accessible web applications. I specialize in <strong>React.js, Next.js, Tailwind CSS, and Redux Toolkit</strong>, translating designs into high-quality, production-ready interfaces.
  </p>
  <p className="dark:text-gray-200 text-gray-600 text-sm md:text-base">
    On the backend, I have hands-on experience with <strong>Laravel, Spring Boot, MySQL</strong>, and <strong>MongoDB</strong>, developing secure APIs, authentication systems, and supporting full-stack functionality when required.
  </p>
  <p className="dark:text-gray-200 text-gray-600 text-sm md:text-base">
    I thrive in <strong>collaborative, Agile environments</strong>, working closely with designers, developers, and stakeholders to deliver robust digital solutions that are both visually appealing and highly functional.
  </p>
  <p className="dark:text-gray-200 text-gray-600 text-sm md:text-base">
    <strong>Let’s build something amazing together!</strong>
  </p>
</div>

          <div className="flex items-center gap-6">
            <Link href="/mandiptamang.pdf" passHref>
              <a
                download="resume.pdf"
                className="px-5 py-2 font-medium bg-[#00ADB5] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center gap-1"
              >
                <FaDownload className="text-xl sm:text-2xl" />
                <span className="text-base md:text-lg font-semibold">
                  Resume
                </span>
              </a>
            </Link>

            <button className={pathname === "/about" ? "hidden" : "none"}>
              <Link
                href="/about"
                className="px-5 py-2 font-medium bg-[#00ADB5] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center gap-1"
              >
                <span className="text-base md:text-lg font-semibold">
                  Read More
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
