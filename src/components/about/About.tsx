'use client'
import Image from 'next/image'
import about from '../../../public/about.jpg'
import { FaDownload } from 'react-icons/fa'
const About = () => {
  return (
    <div className='py-20 w-[90vw]  mx-auto'>
      <div className='md:grid grid-cols-2 flex gap-8 md:gap-0 flex-col md:flex-row justify-between items-center'>
        <div className='grid place-items-center'>
          <div className='relative'>
            <div
              data-aos='fade-right'
              className='w-[50%] -z-10 absolute left-0 -bottom-6 h-[115%] bg-[#1F618D]/50'
            ></div>
            <Image
              data-aos='fade-right'
              data-delay={1}
              src={about}
              width={500}
              height={500}
              className='md:w-[70%] h-full object-contain aspect-square'
              alt='about'
            />
          </div>
        </div>
        <div data-aos='fade-up' className='space-y-3'>
          <h1 className='font-bold md:text-2xl text-xl color1 uppercase'>
            about me
          </h1>
          <p className='dark:text-gray-200 text-sm md:text-base text-gray-500'>
            As a junior front-end developer, I specialize in crafting dynamic,
            visually appealing websites. Proficient in HTML, CSS, and
            JavaScript, I create seamless user interfaces, leveraging modern
            libraries like React and styling with Tailwind CSS. Augmented by
            Next.js and TypeScript, I prioritize user experience, blending
            creativity and technical expertise to bring web projects to life.
            Explore my GitHub for more.
          </p>
          <div>
            <table className='space-y-1'>
              <tbody>
                <tr>
                  <td className='color1 font-semibold'>Name:</td>
                  <td className='dark:text-gray-200 font-light text-gray-500 pl-4'>
                    Mandip Tamang
                  </td>
                </tr>
                <tr>
                  <td className='color1 font-semibold'>Age:</td>
                  <td className='dark:text-gray-200 font-light text-gray-500 pl-4'>
                    20
                  </td>
                </tr>
                <tr>
                  <td className='color1 font-semibold'>Address:</td>
                  <td className='dark:text-gray-200 font-light text-gray-500 pl-4'>
                    Nepal, Hetauda-3
                  </td>
                </tr>
                <tr>
                  <td className='color1 font-semibold'>Phone No:</td>
                  <td className='dark:text-gray-200 font-light text-gray-500 pl-4'>
                    +977 9809118069
                  </td>
                </tr>
                <tr>
                  <td className='color1 font-semibold'>Email:</td>
                  <td className='dark:text-gray-200 font-light text-gray-500 pl-4'>
                    mandiptamang125@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1XHQAgiGeEUrbsGhMfl3RCfNO4I-i46c-/view'
              )
            }
            className='px-5 py-2 font-medium bg-[#1F618D] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center gap-1'
          >
            <FaDownload className='text-xl sm:text-2xl ' />{' '}
            <span className='text-base md:text-lg font-semibold'>
              Download CV
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
