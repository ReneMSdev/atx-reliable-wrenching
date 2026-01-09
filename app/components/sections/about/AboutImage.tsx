import Image from 'next/image'
import { YearsOfExperience } from './YearsOfExperience'

export const AboutImage = () => {
  return (
    <div className='relative w-[70vw] max-w-[280px] md:max-w-[360px] aspect-square mb-20'>
      {/* Left black bar */}
      <svg
        viewBox='0 0 12 100'
        preserveAspectRatio='none'
        className='
          absolute
          left-0
          top-[10%]
          h-[90%]
          w-[24px]
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
        src='https://picsum.photos/500/500'
        alt='About Image'
        fill
        className='object-cover'
      />

      {/* Overlapping smaller image */}
      <div
        className='
          absolute bottom-0
          right-[clamp(-60px,-8vw,-30px)]
          w-[clamp(110px,25vw,150px)]
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
      <div className='absolute bottom-[-80px] left-[-24px] flex'>
        {/* Number rectangle */}
        <div className='bg-accent-dark text-white text-lg font-bold h-20 flex items-center justify-center px-4'>
          <span className='text-4xl md:text-5xl'>{YearsOfExperience()}+</span>
        </div>
        {/* Label rectangle */}
        <div className='bg-accent font-condensed text-white h-20 flex flex-col items-start justify-center px-4'>
          <p className='text-2xl md:text-3xl font-semibold whitespace-nowrap'>
            Years of Experience
          </p>
          <p className='text-md md:text-lg'>Automotive Repair</p>
        </div>
      </div>
    </div>
  )
}
