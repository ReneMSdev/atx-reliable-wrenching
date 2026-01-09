import Image from 'next/image'
import TitleFlair from 'public/images/TitleFlair.svg'
import ReviewCard from './ReviewCard'

const reviews = [
  {
    review:
      'I’ve been bringing my car to ATX Reliable Wrenching for a few years now, and they never disappoint. The team is knowledgeable, honest, and always gets the job done right the first time.',
    author: 'Wendy Stevens',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section id='reviews'>
      <div className='flex flex-col pt-12 pb-6 px-6 max-w-6xl mx-auto'>
        {/* Title */}
        <h1 className='text-4xl md:text-5xl font-display text-accent tracking-wide'>
          Our Google Reviews
        </h1>
        <Image
          src={TitleFlair}
          alt='Reviews Title Flair'
          width={120}
          height={4}
        />
      </div>

      {/* Subtitle */}
      <p className='text-md text-center mb-10'>See what our customers are saying about us.</p>

      {/* Reviews */}
      <div className='flex items-center justify-center px-6 max-w-6xl mx-auto pb-10'>
        <ReviewCard
          review={reviews[0].review}
          author={reviews[0].author}
          rating={reviews[0].rating}
        />
      </div>
    </section>
  )
}
