'use client'
// import Link from 'next/link'
import { projectData } from '../../../data/data'
import { projectProps } from '../../../types/type'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='py-20 w-[90vw] mx-auto'>
      <div className='text-center'>
        <h1 className='font-bold capitalize md:text-2xl text-xl color1'>
          my Recent project
        </h1>
        <div className='mt-12 grid gap-10 lg:grid-cols-3 md:grid-cols-2 '>
          {projectData.slice(0, 6).map((item: projectProps) => (
            <div
              key={item.id}
              onClick={() => window.open(`${item.link}`)}
              className='w-full group hover:scale-[1.04] duration-700 relative cursor-pointer '
            >
              <div className='h-[300px] shadow1 overflow-hidden w-full'>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={470}
                  height={40}
                  className='w-full h-[2500px]  translate-y-0  group-hover:-translate-y-[77.5%] transition-all hover:ease-in duration-[4s] cursor-pointer object-fit '
                />
              </div>
              <h1 className='group-hover:text-white shadow-2xl text-base  md:text-xl font-thin text-left capitalize text-black group-hover:bg-[#1F618D]/70 rounded-lg mt-4 w-full py-2 px-4 duration-700'>
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
