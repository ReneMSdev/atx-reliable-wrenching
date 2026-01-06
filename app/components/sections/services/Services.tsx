'use client'
import ServiceCardCarousel from './ServiceCardCarousel'
import TitleFlair from 'public/images/TitleFlair.svg'
import Image from 'next/image'

const Services = () => {
  return (
    <>
      <div className='flex flex-col py-10 px-6 max-w-6xl mx-auto'>
        {/* Header row: title + buttons */}
        <h1 className='text-4xl font-display text-accent tracking-wide'>Our Services</h1>
        <Image
          src={TitleFlair}
          alt='Services Title Flair'
          width={120}
          height={4}
        />

        {/* Carousel */}
        <div className='flex items-center justify-center'>
          <ServiceCardCarousel />
        </div>
      </div>
    </>
  )
}

export default Services
