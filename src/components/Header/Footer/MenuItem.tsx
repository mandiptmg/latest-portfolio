'use client'
import { headerData } from '../../../../data/data'
import { headerProps } from '../../../../types/type'
import { RxCross1 } from 'react-icons/rx'
import { useGlobalContext } from '@/context/context'
import { motion } from 'framer-motion'

const MenuItem = () => {
  const { setMenu } = useGlobalContext()

  return (
    <div className='fixed w-full color z-10 overflow-hidden h-screen bg-black/60 top-0 right-0 '>
      <motion.div
        initial={{ x: '500', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className='absolute top-0 right-0 h-screen  w-1/2 bg-white'
      >
        <button
          onClick={() => setMenu(false)}
          className='absolute top-0 right-0 p-3 hover:text-white hover:bg-red-500'
        >
          <RxCross1 className='2xl' />
        </button>
        <div className=' mt-20  flex-col flex items-center '>
          {headerData.map((item: headerProps) => (
            <div key={item.id} className='hover:bg-gray-100 group w-full'>
              <h1 className='p-4 flex items-center cursor-pointer font-medium w-full  capitalize gap-2'>
                <span className='text-xl font-semibold  group-hover:text-[#1F618D] '>
                  {item.icon && <item.icon />}
                </span>
                {item.title}
              </h1>
            </div>
          ))}
        </div>{' '}
      </motion.div>
    </div>
  )
}

export default MenuItem
