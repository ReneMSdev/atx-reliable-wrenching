'use client'

import useEmblaCarousel from 'embla-carousel-react'
import ServiceCard from './ServiceCard'
import { usePrevNextButtons } from '@/components/ui/embla/ArrowButtons'
import { PrevButton, NextButton } from '@/components/ui/embla/ArrowButtons'
import { useDotButton, DotButton } from '@/components/ui/embla/DotButton'
import { services } from './serviceDetails'

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
        <div className='flex justify-end gap-4 mb-8'>
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
          <div className='flex justify-center mt-6 gap-2'>
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
