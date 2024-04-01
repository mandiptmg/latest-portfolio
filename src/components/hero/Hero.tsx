'use client'
import { useGlobalContext } from '@/context/context'
import hero from '../../../public/hero.png'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const Hero = () => {
  const {dark} = useGlobalContext()
  return (
    <div className='w-[90vw]   py-8 gap-4 md:gap-0  mx-auto flex items-center flex-col-reverse  md:grid md:grid-cols-2'>
      <div data-aos='fade-up' className='grid place-items-center'>
        <div>
          <h5 className='text-base md:text-lg lg:text-xl dark:text-white color font-normal'>
            Hi! I am Mandip, a
          </h5>
          <p className='text-3xl font-bold color1 md:text-3xl lg:text-5xl'>
            Front-end Developer
          </p>
          <p className='text-sm mt-5 dark:text-gray-200 text-gray-500'>
            I design engaging websites with stunning visuals and user-friendly
            interfaces. As a frontend developer, I focus on creating enjoyable
            user experiences using modern web technologies.
          </p>
          <div className='flex items-center mt-5 gap-4'>
            <button
              onClick={() => window.open('https://github.com/mandiptmg')}
              className='px-5 py-2 font-medium bg-[#1F618D] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center gap-1'
            >
              <FaGithub className='text-xl sm:text-2xl ' />{' '}
              <span className='text-base sm:text-lg font-semibold'>Github</span>
            </button>
            <button
              onClick={() => window.open('https://linkedin.com/in/mandip-tamang

')}
              className='px-5 py-2 font-medium bg-[#1F618D] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center gap-1'
            >
              <FaLinkedin className='text-xl sm:text-2xl ' />{' '}
              <span className='text-base md:text-lg font-semibold'>
                Linkedin
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className=' w-full grid mx-auto place-items-center  h-full'>
        <div data-aos='fade-left' className='relative md:h-[70%]'>
          <Image
            src={hero}
            alt='logo'
            className={`${dark ? 'grayscale': 'none'} w-full h-full    object-contain `}
          />
          {/* <div className='bg-gradient-to-b from-white/10 via-white/70 absolute bottom-20 left-0 to-white/90 w-full h-16'></div> */}
          <div
            className='bg-[#1F618D]/50 -z-10 w-full h-60 absolute bottom-0 left-0'
            style={{
              clipPath: 'polygon(1% 46%, 100% 8%, 100% 100%, 0% 100%)',
            }}
          >
            {/* Content */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
