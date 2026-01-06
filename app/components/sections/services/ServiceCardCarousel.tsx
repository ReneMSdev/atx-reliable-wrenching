'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ServiceCard from './ServiceCard'
import { FaGasPump, FaTools, FaCar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const services = [
  {
    image: 'https://picsum.photos/600/450',
    title: 'Oil Change',
    description:
      'We specialize in providing cusome paint services for all types of vehicles. Our team of professionals is dedicated to delivering exceptional results.',
    Icon: FaGasPump,
  },
  {
    image: 'https://picsum.photos/600/450',
    title: 'Car Repair',
    description:
      'We specialize in providing cusome paint services for all types of vehicles. Our team of professionals is dedicated to delivering exceptional results.',
    Icon: FaTools,
  },
  {
    image: 'https://picsum.photos/600/450',
    title: 'Vehicle Inspection',
    description:
      'We specialize in providing cusome paint services for all types of vehicles. Our team of professionals is dedicated to delivering exceptional results.',
    Icon: FaCar,
  },
  {
    image: 'https://picsum.photos/600/450',
    title: 'Vehicle Inspection',
    description:
      'We specialize in providing cusome paint services for all types of vehicles. Our team of professionals is dedicated to delivering exceptional results.',
    Icon: FaCar,
  },
  {
    image: 'https://picsum.photos/600/450',
    title: 'Vehicle Inspection',
    description:
      'We specialize in providing cusome paint services for all types of vehicles. Our team of professionals is dedicated to delivering exceptional results.',
    Icon: FaCar,
  },
]

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    loop: false,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <>
      <div className='w-full max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto px-2 overflow-hidden'>
        {/* Navigation buttons above the carousel */}
        <div className='flex justify-end gap-2 mb-8'>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className='w-10 h-10 bg-accent text-white flex items-center justify-center shadow-lg'
          >
            <FaArrowLeft className='text-white' />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className='w-10 h-10 bg-black text-white flex items-center justify-center shadow-lg'
          >
            <FaArrowRight className='text-white' />
          </button>
        </div>

        {/* Carousel viewport */}
        <div
          className='overflow-hidden'
          ref={emblaRef}
        >
          <div className='flex px-3'>
            {services.map((service, index) => (
              <div
                key={index}
                className='flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-3'
              >
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  Icon={service.Icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
