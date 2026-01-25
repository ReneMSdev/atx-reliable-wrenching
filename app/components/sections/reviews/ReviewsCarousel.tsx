'use client'

import useEmblaCarousel from 'embla-carousel-react'
import ReviewCard from './ReviewCard'
import { usePrevNextButtons } from '@/components/ui/embla/ArrowButtons'
import { PrevButton, NextButton } from '@/components/ui/embla/ArrowButtons'
import { useDotButton, DotButton } from '@/components/ui/embla/DotButton'
import { reviews } from './reviewsDetails'

export default function ReviewsCarousel() {
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
      <div className='w-full max-w-6xl mx-auto px-2 overflow-hidden'>
        {/* Navigation buttons above the carousel */}
        <div className='flex justify-end gap-4 mb-8 px-4'>
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
            {reviews.map((review, index) => (
              <div
                key={index}
                className='flex-[0_0_100%] lg:flex-[0_0_50%]'
              >
                <div className='flex w-full items-center justify-center px-2'>
                  <ReviewCard
                    review={review.review}
                    author={review.author}
                    rating={review.rating}
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
