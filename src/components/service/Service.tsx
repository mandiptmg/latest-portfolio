import { portfolioItems } from '../../../data/data'
import { portfolioProps } from '../../../types/type'

const service = () => {
  return (
    <div className='py-20 w-[90vw] mx-auto'>
      <div className='text-center'>
        <h1 className='font-bold md:text-2xl text-xl color1 uppercase'>
          my services
        </h1>
        <div className='grid mt-12 md:grid-cols-3 gap-4 '>
          {portfolioItems.map((item: portfolioProps) => (
            <div
              key={item.id}
              className='grid space-y-2 place-items-center border rounded-lg p-4'
            >
              <h1 className='text-xl p-2 rounded bg-gray-200 color1 md:text-2xl'>
                {item.icon && <item.icon />}
              </h1>
              <h1 className='font-semibold text-lg colo1 md:text-xl '>
                {item.title}
              </h1>
              <p className=' md:text-base text-gray-500 dark:text-gray-200 text-sm'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default service
