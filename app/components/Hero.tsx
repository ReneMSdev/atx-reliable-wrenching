import React from 'react'
import Image from 'next/image'

const Hero = () => {
  // Maintaining the 40px slant to match your Navbar logo
  const angleSlant = 'polygon(0 0, 100% 0, calc(100% - 40px) 100%, 0% 100%)'

  return (
    <section className='relative w-full h-[600px] md:h-[750px] overflow-hidden bg-black'>
      {/* Background Placeholder */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='https://placehold.co/1920x1080'
          alt='Hero Background'
          fill
          priority
          className='object-cover opacity-50'
        />
        {/* Dark overlay for text readability */}
        <div className='absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent' />
      </div>

      <div className='relative z-10 max-w-5xl mx-auto h-full flex items-center px-6'>
        <div className='max-w-3xl'>
          {/* Headline - Using font-display */}
          <h1 className='font-display text-4xl font-bold leading-[0.85] text-white mb-6'>
            ATX Reliable Wrenching
          </h1>
          <h2 className='text-3xl font-bold leading-[1.2] text-white mb-6'>
            Quality Service Delivered
            <br />
            to Your Door
          </h2>

          {/* Action Buttons - Default Font */}
          <div className='flex flex-wrap gap-5 font-sans'>
            <button className='bg-accent hover:bg-white hover:text-black transition-all duration-300 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm shadow-xl'>
              Book Appointment
            </button>

            <button className='border-2 border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm backdrop-blur-sm'>
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
