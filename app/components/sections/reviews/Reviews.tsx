import Image from 'next/image'
import TitleFlair from 'public/images/TitleFlair.svg'

export default function Reviews() {
  return (
    <section id='reviews'>
      <div className='flex flex-col pt-12 pb-14 px-6 max-w-6xl mx-auto'>
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
    </section>
  )
}
