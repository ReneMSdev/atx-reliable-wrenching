'use client'
import ServiceCardCarousel from './ServiceCardCarousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Services = () => {
  return (
    <>
      <div className='flex flex-col py-10 px-6'>
        {/* Header row: title + buttons */}
        <h1 className='text-4xl font-display text-accent tracking-wide'>Our Services</h1>

        {/* Carousel */}
        <div className='flex items-center justify-center'>
          <ServiceCardCarousel />
        </div>
      </div>
    </>
  )
}

export default Services
