import about from '../../../public/about1.jpg'
import Image from 'next/image'
import Service from '../../components/service/Service'
import About from '../../components/about/About'

const AboutPage = () => {
  return (
    <div>
      <div className='bg-cover bg-center  bg-[url(https://c0.wallpaperflare.com/preview/323/1002/408/man-male-wall-hide.jpg)] grid place-items-center text-center '>
        <h1 className='text-5xl py-20 w-full h-full bg-black/50 font-semibold uppercase text-white'>
          about me
        </h1>
      </div>
      <div className='w-[90vw] mx-auto py-20'>
        <About />
        <div>
          <h1 className='text-3xl md:text-6xl font-medium'>
            Stuff I am good at
          </h1>
          <Service />
        </div>
        <div className='flex items-center flex-col-reverse md:flex-row gap-10 md:gap-16'>
          <div className='space-y-4'>
            <h1 className='text-3xl md:text-6xl font-medium'>
              Interested for a project?
            </h1>
            <p className=' text-lg md:text-xl'>
              Excited about a new front-end project opportunity? Lets
              collaborate and bring your ideas to life.
            </p>
            <button className=' group bg-black px-3 py-2 my-3 flex items-start justify-start rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#1F618D] before:to-[#1F618D]/70 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff] dark:bg-[#474F7A]  flex-col text-semibold text-base'>
              Got a new project?
              <span className='text-sm block font-sans group-hover:underline'>
                contact me for a brief
              </span>
            </button>
          </div>
          <div className='max-w-2xl mx-auto'>
            <Image
              src={about}
              alt='about'
              width={400}
              height={400}
              className='w-full h-full rounded-full aspect-square object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
