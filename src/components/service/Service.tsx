"use client";
import { portfolioItems } from "../../../data/data";
import { portfolioProps } from "../../../types/type";
import { usePathname } from "next/navigation";
const Service = () => {
  const pathname = usePathname();
  return (
    <div className="py-20 w-[90vw] mx-auto">
      <div className="text-center">
        <div data-aos="fade-up" className="grid place-items-center">
          <div>
            <h1
              className={`${
                pathname === "/about" ? "hidden" : "none"
              } font-bold md:text-2xl text-xl color1 uppercase`}
            >
              my services
            </h1>
            <div className="w-16 mx-auto h-1 bg-[#00ADB5]"></div>
          </div>
        </div>

        <div
          className={`grid  md:grid-cols-3 grid-cols-2 gap-4 ${
            pathname === "/about" ? "mt-5" : "mt-12"
          }`}
        >
          {portfolioItems.map((item: portfolioProps) => (
            <div
              data-aos="zoom-in-down"
              data-delay={200 * item.id}
              key={item.id}
              className="grid space-y-2 place-items-center border dark:border-gray-700 rounded-lg p-4"
            >
              <h1 className="text-xl p-2 rounded bg-gray-200 color1 md:text-2xl">
                {item.icon && <item.icon />}
              </h1>
              <h1 className="font-semibold text-lg color1 md:text-xl ">
                {item.title}
              </h1>
              <p className=" md:text-base text-gray-500 dark:text-gray-200 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
