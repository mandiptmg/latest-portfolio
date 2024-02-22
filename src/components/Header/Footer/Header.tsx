'use client'
import logoblack from './../../../../public/logo-black.png'
import logowhite from './../../../../public/logo-white.png'
import Image from 'next/image'
import { headerData } from '../../../../data/data'
import { headerProps } from '../../../../types/type'
import { FaMoon, FaSun } from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'
import { useGlobalContext } from '@/context/context'
import MenuItem from './MenuItem'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { motion } from 'framer-motion'
const Header = () => {
  const pathname = usePathname()
  const { setMenu, menu, dark, setDark, scroll } = useGlobalContext()
  const toggleDarkMode = () => {
    setDark(!dark)
                if (dark === true) {
                  document.documentElement.classList.remove('dark')
                  localStorage.setItem('dark-mode', String(!dark)) //setitem(key,value)
                } else {
                  document.documentElement.classList.add('dark')
                  localStorage.setItem('dark-mode', String(!dark))
                }
              }
  return (
    <div
      className={`${scroll} h-20 sticky top-0 left-0 w-full color dark:text-white color flex justify-between items-center z-40 transition bgsticky px-1 md:px-7`}
    >
      <Link href='/'>
        <div
          // initial={{ opacity: 0, scale: 0 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{
          //   duration: 1,
          //   ease: 'easeInOut', // Example easing function
          // }}
          className='flex items-center'
        >
          <Image
            src={dark ? logowhite : logoblack}
            alt='logo'
            width={90}
            height={90}
            className='aspect-auto object-contain'
          />
          <h1>
            Mandip | <span className='font-semibold color1'>Developer</span>
          </h1>
        </div>
      </Link>
      <div className='hidden md:inline-flex items-center gap-7'>
        {headerData.map((item: headerProps) => (
          <div key={item.id}>
            <Link href={item.link}>
              {' '}
              <h1
                className={`px-1 cursor-pointer hover:text-[#1F618D] font-medium capitalize hover:bg-slate-200 ${
                  pathname === item.link ? 'text-[#1F618D] bg-gray-200' : 'none'
                }  `}
              >
                {item.title}
              </h1>
            </Link>
          </div>
        ))}
      </div>
      <div className='flex items-center gap-4 pr-2 sm:pr-0 text-xl'>
        <button onClick={toggleDarkMode}>
          {dark ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={() => setMenu(!menu)}>
          <RiMenu3Fill className='text-semibold hover:scale-[1.1] duration-500 text-2xl md:hidden' />
        </button>
      </div>
      {/* mobile MenuItem */}
      {menu && (
        <div>
          <MenuItem />
        </div>
      )}
    </div>
  )
}

export default Header
