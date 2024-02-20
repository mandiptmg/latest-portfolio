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
const Header = () => {
  const { setMenu, menu, dark, setDark } = useGlobalContext()
  const toggleDarkMode = () => {
    const newDarkMode = !dark
    localStorage.setItem('darkMode', String(newDarkMode))
    setDark(newDarkMode)
  }
  return (
    <div className='h-20 relative w-full dark:darkcolor dark:text-white color flex justify-between items-center px-1 md:px-7'>
      <div className='flex items-center'>
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
      <div className='hidden md:inline-flex items-center gap-7'>
        {headerData.map((item: headerProps) => (
          <div key={item.id}>
            <Link href={item.link}>
              {' '}
              <h1 className='px-1 cursor-pointer hover:text-[#1F618D] font-medium capitalize hover:bg-slate-200  '>
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
