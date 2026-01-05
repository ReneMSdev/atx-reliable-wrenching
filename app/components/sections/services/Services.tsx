'use client'

import ServiceCard from './ServiceCard'
import { FaGasPump } from 'react-icons/fa'

const Services = () => {
  return (
    <>
      <div className='flex flex-col py-20 px-6 md:px-10'>
        <h1 className='text-4xl font-display text-accent tracking-wide pb-10'>Our Services</h1>
        <div className='flex items-center justify-center'>
          <ServiceCard
            image='https://picsum.photos/600/450'
            Icon={FaGasPump}
            title='Custom Work'
            description='We specialize in providing cusome paint services for all types of vehicles. Our team of professionals is dedicated to delivering exceptional results.'
          />
        </div>
      </div>
    </>
  )
}

export default Services
