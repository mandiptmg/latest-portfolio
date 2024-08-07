'use client'
import Image from 'next/image'
import about from '../../../public/about.jpg'
import pdf from '../../../public/mandiptamang.pdf'
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
           I&apos;m a creative junior front-end developer who loves building websites that are both stunning and interactive. I&apos;m an expert in the basics (HTML, CSS, and JavaScript), and I use them to craft user interfaces that feel smooth and effortless. Plus, I love working with modern tools like React and Tailwind CSS to make my designs pop and streamline development.  To take things a step further, I leverage powerful tools like Next.js, redux-toolkit, MongoDB, and TypeScript to build even more robust and efficient applications.  Ultimately, my goal is to create an amazing user experience – it&apos;s where creativity meets technical skill! Check out my GitHub profile to see what I&apos;ve built!
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
          <a
            href={'https://drive.google.com/file/d/1jNkQdODtnHKo-ffPyh9HHs5y152IoYpb/view'}
            download='mandiptamang.pdf'
            className='px-5 py-2 font-medium bg-[#1F618D] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center gap-1'
          >
            <FaDownload className='text-xl sm:text-2xl ' />{' '}
            <span className='text-base md:text-lg font-semibold'>
              Resume
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
