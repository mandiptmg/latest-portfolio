'use client'
import { iconData } from '../../../data/data'
import contact from '../../../public/contact.png'
import Image from 'next/image'
import { iconProps } from '../../../types/type'
import ContactForm from '@/components/contactForm/ContactForm'
const Page = () => {
  return (
    <div className='py-20 w-[90vw] mx-auto'>
      <div className='text-center'>
        <h1 className='font-bold md:text-2xl  text-xl color1'>
          <span className='color'>Lets Get in</span> Touch!
        </h1>{' '}
        <div className='mt-10 grid gap-4 md:grid-cols-[1fr,2fr]'>
          <div className='w-full h-full grid place-items-center p-4 rounded bg-gray-200'>
            <Image
              src={contact}
              alt='contact'
              width={400}
              height={400}
              className='w-full aspect-[4/2] mx-auto rounded-md object-cover h-full '
            />
            <div className='text-left space-y-2 mt-4'>
              <h1 className='text-lg tracking-widest md:text-xl  color font-bold'>
                {' '}
                Mandip Tamang
              </h1>
              <h1 className='font-medium text-gray-500'>
                {' '}
                Front End Developer
              </h1>
              <p className='text-sm sm:text-base text-gray-500'>
                I'm a passionate frontend developer, crafting immersive digital
                experiences. Each project blends technical skills with a love
                for design.
              </p>
              <h1 className='uppercase color text-base font-light'>
                find me in
              </h1>
              <div className='flex gap-2 w-full items-center'>
                {iconData.map((icon: iconProps) => (
                  <div key={icon.id}>
                    <h1
                      title={icon.title}
                      onClick={() => window.open(`${icon.link}`)}
                      className='text-xl cursor-pointer  color1 p-2 bg-gray-400'
                    >
                      {icon.icon && <icon.icon />}
                    </h1>
                  </div>
                ))}
              </div>
              <table className='text-sm sm:text-base text-gray-500'>
                <tr>
                  <td>Phone:</td>
                  <td>+977 9809118069</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>mandiptamang125@gmail.com</td>
                </tr>
              </table>
            </div>
          </div>
          <div
            className='w-full p-4 rounded bg-gray-200
          '
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
