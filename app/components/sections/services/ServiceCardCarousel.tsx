'use client'

import useEmblaCarousel from 'embla-carousel-react'
import ServiceCard from './ServiceCard'
import { FaGasPump, FaTools, FaCar } from 'react-icons/fa'
import { usePrevNextButtons } from './embla/ArrowButtons'
import { PrevButton, NextButton } from './embla/ArrowButtons'
import { useDotButton, DotButton } from './embla/DotButton'

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

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <>
      <div className='w-full max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-2 overflow-hidden'>
        {/* Navigation buttons above the carousel */}
        <div className='flex justify-end gap-2 mb-8'>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
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
                className='flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]'
              >
                <div className='flex w-full items-center justify-center'>
                  <ServiceCard
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    Icon={service.Icon}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className='flex justify-center mt-4 gap-2'>
            {scrollSnaps.map((scrollSnap, index) => (
              <DotButton
                key={index}
                isSelected={selectedIndex === index}
                onClick={() => onDotButtonClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
