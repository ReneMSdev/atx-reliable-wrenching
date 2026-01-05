import Image from 'next/image'

const Hero = () => {
  // Slant overlay to match Navbar logo
  const angleSlant = 'polygon(0 0, 100% 0, 70% 100%, 0 100%)'

  return (
    // h is calculated by subtracting the height of the navbar from the viewport height
    <section className='relative w-full h-[calc(100vh-80px)] mt-[80px] overflow-hidden'>
      {/* Background Image */}
      <Image
        src='https://picsum.photos/1200/800'
        alt='Hero Background'
        fill
        priority
        className='object-cover'
      />

      {/* Angled overlay for text (left half) */}
      <div
        className='absolute top-0 left-0 h-full w-3/5 bg-black/80'
        style={{ clipPath: angleSlant }}
      />

      {/* Hero Content */}
      <div className='relative z-10 h-full flex'>
        <div className='w-3/5 flex flex-col justify-center items-center px-6 text-white'>
          <div>
            <h1 className='font-display text-5xl font-bold mb-3'>ATX Reliable Wrenching</h1>
            <h2 className='font-display text-4xl font-bold mb-5'>
              Quality Service Delivered
              <br />
              to Your Door
            </h2>

            <div className='flex flex-wrap gap-5 font-sans'>
              <button className='bg-accent text-white px-8 py-3 font-bold text-xs tracking-widest hover:bg-accent-dark transition-all cursor-pointer'>
                Learn More
              </button>

              <button className='bg-white text-black px-8 py-3 font-bold text-xs tracking-widest hover:bg-accent hover:text-white transition-all cursor-pointer'>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
