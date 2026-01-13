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
    <div className='relative w-full max-w-md aspect-9/5'>
      <Image
        src='/images/review-frame.svg'
        alt='Review Frame'
        fill
        className='object-contain'
      />

      {/* Text overlay */}
      <div className='absolute inset-0 pt-10 md:pt-12 pb-8 px-8 flex flex-col justify-between'>
        {/* Review text (centered in remaining space) */}
        <div className='flex flex-1 items-start justify-center'>
          <p className='text-md leading-snug italic line-clamp-4 md:line-clamp-6'>{review}</p>
        </div>

        {/* Bottom row */}
        <div className='flex items-center justify-between text-md'>
          <span className='font-bold'>{author}</span>
          {renderStars(rating)}
        </div>
      </div>
    </div>
  )
}
