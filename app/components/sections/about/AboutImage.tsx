import Image from 'next/image'
import { YearsOfExperience } from './YearsOfExperience'

export const AboutImage = () => {
  return (
    <div className='relative w-[70vw] max-w-[252px] md:max-w-[324px] aspect-square mb-20'>
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
        src='/images/car.jpg'
        alt='About Image'
        fill
        className='object-cover'
      />

      {/* Overlapping smaller image */}
      <div
        className='
          absolute bottom-0
          right-[clamp(-54px,-7.2vw,-27px)]
          w-[clamp(99px,22.5vw,135px)]
          aspect-square
          shadow-lg
        '
      >
        <Image
          src='https://picsum.photos/300/300'
          alt='Secondary About Image'
          fill
          className='object-cover'
        />
      </div>
      {/* Bottom rectangles */}
      <div className='absolute bottom-[-72px] left-[-22px] flex'>
        {/* Number rectangle */}
        <div className='bg-accent-dark text-white text-base font-bold h-[72px] flex items-center justify-center px-[14px]'>
          <span className='text-3xl md:text-4xl'>{YearsOfExperience()}+</span>
        </div>
        {/* Label rectangle */}
        <div className='bg-accent font-condensed text-white h-[72px] flex flex-col items-start justify-center px-[14px]'>
          <p className='text-xl md:text-2xl font-semibold whitespace-nowrap'>Years of Experience</p>
          <p className='text-sm md:text-base'>Automotive Repair</p>
        </div>
      </div>
    </div>
  )
}
