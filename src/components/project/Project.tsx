'use client'
import Link from 'next/link'
import { projectData } from '../../../data/data'
import { projectProps } from '../../../types/type'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='py-20 w-[90vw] mx-auto'>
      <div className='text-center'>
        <h1 className='font-bold md:text-2xl text-xl color1 uppercase'>
          my Recent project
        </h1>
        <div className='mt-12 grid gap-4 lg:grid-cols-3 md:grid-cols-2 '>
          {projectData.map((item: projectProps) => (
            <div
              key={item.id}
              onClick={() => window.open(`${item.link}`)}
              className='w-full group border-[#1F618D] shadow-lg relative border cursor-pointer aspect-square h-[300px] overflow-hidden rounded-md'
            >
              <Image
                src={item.img}
                alt={item.title}
                width={470}
                height={40}
                className='w-full h-[2500px] translate-y-0  group-hover:-translate-y-[77.5%] transition-all hover:ease-in duration-[4s] cursor-pointer object-cover '
              />
              <h1 className='text-white capitalize bg-black/50 absolute bottom-0 w-full py-4 opacity-0 group-hover:opacity-100 duration-700'>
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
