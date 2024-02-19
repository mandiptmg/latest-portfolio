// import logoblack from './../../../../public/logo-black.png'
import logoWhite from './../../../../public/logo-white.png'
import { headerData, iconData } from '../../../../data/data'
import { headerProps, iconProps } from '../../../../types/type'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  const time = new Date().getFullYear()
  return (
    <div className='pt-4 bg-black/90  w-full'>
      <div className='grid items-center  grid-cols-12'>
        <div className='col-span-4 grid place-items-center'>
          <Image
            src={logoWhite}
            width={200}
            height={200}
            className='aspect-square object-contain'
            alt='log'
          />
        </div>
        <div className='text-center grid md:place-items-center place-items-start col-span-8 text-gray-400'>
          <div className='space-y-4'>
            <div className='flex justify-center items-center gap-4'>
              {iconData.map((icon: iconProps) => (
                <div key={icon.id}>
                  <Link href={icon.link}>
                    <h1
                      title={icon.title}
                      className='text-sm sm:text-2xl rounded-full text-gray-600 hover:scale-[1.1] duration-700 bg-gray-100 p-2'
                    >
                      {icon.icon && <icon.icon />}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
            <div className='flex flex-wrap items-center gap-4'>
              {headerData.map((item: headerProps) => (
                <div key={item.id}>
                  <Link href={item.link}>
                    <h1 className='capitalize text-sm sm:text-base cursor-pointer font-medium'>
                      {item.title}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black text-center py-5'>
        <p className='text-white text-xs sm:text-sm'>
          Copyright &copy;{time},Design by{' '}
          <span className='font-thin'>MANDIP TAMANG</span>
        </p>
      </div>
    </div>
  )
}

export default Footer
