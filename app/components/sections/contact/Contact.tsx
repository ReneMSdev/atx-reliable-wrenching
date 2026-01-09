'use client'
import { FaPhoneAlt, FaEnvelope, FaFacebook } from 'react-icons/fa'
import Image from 'next/image'
import TitleFlair from 'public/images/TitleFlair.svg'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section
      id='contact'
      className='w-full relative overflow-hidden'
    >
      {/* Background with 180 degree flip */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/images/about-bg.png')",
          transform: 'rotate(180deg)',
        }}
      />

      {/* Content */}
      <div className='relative z-10'>
        <div className='max-w-6xl mx-auto px-6 py-10'>
          {/* Contact Us h1 - Top Left */}
          <h1 className='text-4xl lg:text-5xl font-display text-accent tracking-wide'>
            Contact Us
          </h1>
          <div className='flex justify-start mb-10'>
            <Image
              src={TitleFlair}
              alt='Services Title Flair'
              width={120}
              height={4}
            />
          </div>

          {/* Grid for two columns */}
          <div className='grid gap-10 grid-cols-1 [@media(min-width:1000px)]:grid-cols-2'>
            {/* First Column - Contact Info (top on small, left on medium+) */}
            <div className='flex flex-col gap-8 text-center lg:text-left'>
              {/* Available Hours */}
              <div className='flex flex-col gap-4'>
                <h2 className='text-3xl font-display tracking-wide'>Available Hours</h2>
                <div className='flex flex-col gap-1 items-center lg:items-start'>
                  <span className='text-lg font-bold'>
                    Monday - Friday <span className='font-normal'>8:00 AM - 5:00 PM</span>
                  </span>
                  <span className='text-lg font-bold'>
                    Saturday <span className='font-normal'>9:00 AM - 1:00 PM</span>
                  </span>
                </div>
              </div>

              {/* Call Us */}
              <div className='flex flex-col gap-4'>
                <h2 className='text-3xl font-display tracking-wide'>Call Us</h2>
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
                  <FaPhoneAlt className='text-accent text-xl' />
                  <span className='text-lg font-semibold'>(512) 123 - 7456</span>
                </div>
              </div>

              {/* Send Us an Email */}
              <div className='flex flex-col gap-4'>
                <h2 className='text-3xl font-display tracking-wide'>Send Us an Email</h2>
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
                  <FaEnvelope className='text-accent text-xl' />
                  <span className='text-lg'>info@atxreliablewrenching.com</span>
                </div>
              </div>

              {/* Our Socials */}
              <div className='flex flex-col gap-4'>
                <h2 className='text-3xl font-display tracking-wide'>Our Socials</h2>
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
                  <FaFacebook className='text-accent text-4xl' />
                  <span className='text-lg'>Facebook</span>
                </div>
              </div>
            </div>

            {/* Second Column - Send a Message Form (bottom on small, right on medium+) */}
            <div className='flex flex-col items-center'>
              <h2 className='text-3xl font-display tracking-wide pb-5'>Send a Message</h2>
              {/* Contact Form */}
              <div className='flex justify-center w-full'>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
