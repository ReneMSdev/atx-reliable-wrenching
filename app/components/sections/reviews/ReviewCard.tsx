import Image from 'next/image'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { JSX } from 'react'

interface ReviewCardProps {
  review: string
  author: string
  rating: number
}

function renderStars(rating: number): JSX.Element {
  return (
    <div className='flex items-center text-[#FBBC04]'>
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </div>
  )
}

export default function ReviewCard({ review, author, rating }: ReviewCardProps): JSX.Element {
  return (
    <div className='relative w-full max-w-lg aspect-7/4'>
      <Image
        src='/images/review-frame.svg'
        alt='Review Frame'
        fill
        className='object-contain'
      />

      {/* Text overlay */}
      <div className='absolute inset-0 pt-12 pb-8 px-8 flex flex-col justify-between'>
        {/* Review text */}
        <p className='text-md md:text-lg leading-snug italic'>{review}</p>

        {/* Bottom row */}
        <div className='flex items-center justify-between text-md md:text-lg'>
          <span className='font-bold'>{author}</span>
          <span>{renderStars(rating)}</span>
        </div>
      </div>
    </div>
  )
}
