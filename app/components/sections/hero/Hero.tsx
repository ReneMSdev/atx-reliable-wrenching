'use client'
import Image from 'next/image'
import { scrollToSection } from '@/components/layout/scrollToSection'
import BookNowBtn from '@/components/ui/BookNowBtn'

export default function Hero() {
  // Slant overlay with fixed angle - right edge at center, flush to left
  // Using fixed px value (200px) ensures the angle stays consistent on resize
  // Element is w-1/2 (50% of screen), clipPath uses 100% to span full element width
  const angleSlant = 'polygon(0 0, 100% 0, calc(100% - 200px) 100%, 0% 100%)'

  return (
    // h is calculated by subtracting the height of the navbar from the viewport height
    <section className='-mt-[2px] relative w-full h-[calc(100vh-140px)] overflow-hidden'>
      {/* Background Image */}
      <Image
        src='/images/enging.jpg'
        alt='Hero Background'
        fill
        priority
        className='object-cover'
      />

      {/* Mobile overlay - covers entire image on small screens */}
      <div className='absolute inset-0 bg-black/80 md:hidden' />

      {/* Angled overlay for text - flush to left, right edge at center - hidden on small screens */}
      <div
        className='hidden md:block absolute top-0 left-0 h-full w-3/5 bg-black/80'
        style={{ clipPath: angleSlant }}
      />

      {/* Hero Content */}
      <div className='relative z-10 h-full flex justify-center md:justify-start'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center px-6 text-white'>
          <div>
            <h1 className='font-display text-4xl lg:text-5xl tracking-wide mb-3'>
              ATX Reliable Wrenching
            </h1>
            <h2 className='font-display text-2xl lg:text-3xl tracking-wide mb-5'>
              Quality Service Delivered
              <br />
              to Your Door
            </h2>

            <div className='flex flex-wrap gap-5 font-sans'>
              <button
                onClick={() => scrollToSection('services')}
                className='flex items-center justify-center gap-1 bg-accent text-white px-8 py-3 font-bold text-sm tracking-wide hover:bg-accent-hover transition-all duration-200 cursor-pointer min-w-[130px]'
              >
                Learn More
              </button>

              <BookNowBtn
                bgClass='bg-white'
                textClass='text-black'
                className='min-w-[130px]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
