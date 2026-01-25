import Image from 'next/image'
import { YearsOfExperience } from './YearsOfExperience'

export const AboutImage = () => {
  return (
    <div className='relative w-[324px] aspect-square mb-20'>
      {/* Left black bar */}
      <svg
        viewBox='0 0 12 100'
        preserveAspectRatio='none'
        className='
          absolute
          left-0
          top-[11%]
          h-[90%]
          w-[22px]
          -translate-x-full
          fill-black
        '
        aria-hidden
      >
        <rect
          x='0'
          y='0'
          width='12'
          height='100'
        />
      </svg>
      {/* Main image */}
      <Image
        src='/images/about.jpg'
        alt='About Image'
        fill
        className='object-cover'
      />

      {/* Bottom rectangles */}
      <div className='absolute bottom-[-72px] left-[-22px] flex w-[324px]'>
        {/* Number rectangle */}
        <div className='bg-accent-dark text-white text-base font-bold h-[72px] flex items-center justify-center px-[14px] shrink-0'>
          <span className='text-4xl'>{YearsOfExperience()}+</span>
        </div>
        {/* Label rectangle */}
        <div className='bg-accent font-condensed text-white h-[72px] flex flex-col items-start justify-center px-[18px] flex-1'>
          <p className='text-2xl font-semibold whitespace-nowrap'>Years of Experience</p>
          <p className='text-base'>Automotive Repair</p>
        </div>
      </div>
    </div>
  )
}
