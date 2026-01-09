'use client'

import useEmblaCarousel from 'embla-carousel-react'
import ReviewCard from './ReviewCard'
import { usePrevNextButtons } from '@/components/ui/embla/ArrowButtons'
import { PrevButton, NextButton } from '@/components/ui/embla/ArrowButtons'
import { useDotButton, DotButton } from '@/components/ui/embla/DotButton'

const reviews = [
  {
    review:
      "I've been bringing my car to ATX Reliable Wrenching for a few years now, and they never disappoint. The team is knowledgeable, honest, and always gets the job done right the first time.",
    author: 'Wendy Stevens',
    rating: 5,
  },
  {
    review:
      'Excellent service! They came to my house and fixed my brake issue quickly. Professional, friendly, and reasonably priced. Highly recommend!',
    author: 'Michael Chen',
    rating: 5,
  },
  {
    review:
      'Good experience overall. The mechanic was professional and explained everything clearly. The work was done on time and the price was fair.',
    author: 'Sarah Johnson',
    rating: 4,
  },
  {
    review:
      "They fixed my transmission problem that other shops couldn't figure out. Very impressed with their diagnostic skills and attention to detail.",
    author: 'Robert Martinez',
    rating: 5,
  },
  {
    review:
      'Decent service, but had to wait a bit longer than expected. The work quality was good though, and they were upfront about the costs.',
    author: 'Jennifer Lee',
    rating: 3,
  },
  {
    review:
      'Outstanding customer service! They went above and beyond to help me with my car troubles. Will definitely be coming back for all my automotive needs.',
    author: 'David Thompson',
    rating: 5,
  },
]

export default function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
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
                className='flex-[0_0_100%] md:flex-[0_0_50%]'
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
