'use client'
import Image from 'next/image'
import { AboutImage } from '@/components/sections/about/AboutImage'
import TitleFlair from 'public/images/TitleFlair.svg'
import { YearsOfExperience } from './YearsOfExperience'

export default function AboutSection() {
  return (
    <section
      className='w-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/images/about-bg.png')" }} // background from Figma
    >
      <div className='max-w-6xl mx-auto px-4 py-20 grid gap-10 items-center grid-cols-1 [@media(min-width:1000px)]:grid-cols-2'>
        {/* Left Column - Image */}
        <div className='flex justify-center'>
          <AboutImage />
        </div>

        {/* Right Column - Text */}
        <div className='text-left px-3 max-w-2xl mx-auto [@media(min-width:1000px)]:mx-0'>
          <h2 className='text-4xl md:text-5xl font-display text-accent tracking-wide'>About Us</h2>
          <Image
            src={TitleFlair}
            alt='Services Title Flair'
            width={120}
            height={4}
            className='mb-10'
          />
          <p className='mb-6'>
            {`At ATX Reliable Wrenching, we bring over ${YearsOfExperience()} years of hands-on experience in automotive repair to every vehicle we service. From routine maintenance to complex diagnostics, our team is committed to keeping your car running smoothly and safely. We combine technical expertise with a passion for quality workmanship, ensuring every repair meets the highest standards.`}
          </p>
          <p className='mb-6'>
            {`Located in the heart of Austin, we pride ourselves on providing honest, dependable service to our community. Whether you’re a longtime customer or visiting us for the first time, ATX Reliable Wrenching is here to deliver fast, reliable solutions and get you back on the road with confidence.`}
          </p>
        </div>
      </div>
    </section>
  )
}
