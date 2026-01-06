'use client'

import React from 'react'
import Image from 'next/image'
import AboutBg from '@/public/images/about-bg.jpg' // Figma export
import AboutImage from 'public/images/aboutImage.png'
import TitleFlair from 'public/images/TitleFlair.svg'

export default function AboutSection() {
  return (
    <section
      className='w-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/images/about-bg.jpg')" }} // background from Figma
    >
      <div className='max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10'>
        {/* Left Column - Image */}
        <div className='md:w-1/2 flex justify-center'>
          <Image
            src={AboutImage}
            alt='About Image'
            width={500}
            height={500}
          />
        </div>

        {/* Right Column - Text */}
        <div className='md:w-1/2 text-left px-3'>
          <h2 className='text-4xl md:text-5xl font-display text-accent tracking-wide'>About Us</h2>
          <Image
            src={TitleFlair}
            alt='Services Title Flair'
            width={120}
            height={4}
            className='mb-10'
          />
          <p className='mb-6'>
            {`At ATX Reliable Wrenching, we bring over 12 years of hands-on experience in automotive repair to every vehicle we service. From routine maintenance to complex diagnostics, our team is committed to keeping your car running smoothly and safely. We combine technical expertise with a passion for quality workmanship, ensuring every repair meets the highest standards.`}
          </p>
          <p className='mb-6'>
            {`Located in the heart of Austin, we pride ourselves on providing honest, dependable service to our community. Whether you’re a longtime customer or visiting us for the first time, ATX Reliable Wrenching is here to deliver fast, reliable solutions and get you back on the road with confidence.`}
          </p>
        </div>
      </div>
    </section>
  )
}
