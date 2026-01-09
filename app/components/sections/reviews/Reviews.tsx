import Image from 'next/image'
import TitleFlair from 'public/images/TitleFlair.svg'
import ReviewsCarousel from './ReviewsCarousel'

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
      <p className='text-md text-center mb-6 md:mb-0'>
        See what our customers are saying about us.
      </p>

      {/* Reviews Carousel */}
      <div className='pb-10'>
        <ReviewsCarousel />
      </div>
    </section>
  )
}
