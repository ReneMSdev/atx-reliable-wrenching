'use client'
import ServiceCardCarousel from './ServiceCardCarousel'
import TitleFlair from 'public/images/TitleFlair.svg'
import Image from 'next/image'

const Services = () => {
  return (
    <section
      id='services'
      className='scroll-mt-20 min-[900px]:scroll-mt-0'
    >
      <div className='flex flex-col pt-12 pb-14 px-6 max-w-6xl mx-auto'>
        {/* Header row: title + buttons */}
        <h2 className='text-4xl font-display text-accent tracking-wide'>Our Services</h2>
        <Image
          src={TitleFlair}
          alt='Services Title Flair'
          width={100}
          height={4}
        />

        {/* Carousel */}
        <div className='flex items-center justify-center'>
          <ServiceCardCarousel />
        </div>
      </div>
    </section>
  )
}

export default Services
