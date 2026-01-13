'use client'
import Link from 'next/link'
import { FaPhoneAlt, FaFacebook } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import Image from 'next/image'
import { scrollToSection } from './scrollToSection'
import { siteInfo } from '../../../config/siteInfo'
import BookNowBtn from '@/components/ui/BookNowBtn'

const Navbar = () => {
  // The '40px' in the clip-path determines the "sharpness" of the angle.
  // Using a fixed px value here ensures the angle never changes on resize.
  const angleSlantNavbar = 'polygon(0 0, 100% 0, calc(100% - 46px) 100%, 0% 100%)'
  const angleSlantTop = 'polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0% 100%)'

  return (
    <nav className='w-full font-sans top-0 left-0'>
      {/* --- Top Bar --- */}
      <div className={``}>
        <div className='flex h-10 w-full text-white text-xs md:text-sm bg-accent'>
          {/* Black Section - Fixed Angle */}
          <div
            className='bg-black flex items-center pl-8 pr-16 h-full shrink-0'
            style={{ clipPath: angleSlantTop }}
          >
            <span className='whitespace-nowrap'>Welcome, new and returning customers.</span>
          </div>

          {/* Blue Section - Socials & Hours */}
          <div className='grow flex justify-end items-center px-8'>
            <div className='flex gap-4 items-center pr-8'>
              <span className='hidden lg:inline font-semibold'>
                Monday - Friday <span className='font-bold'>{siteInfo.hoursWeekDays}</span> |
                Saturday <span className='font-bold'>{siteInfo.hoursSaturday}</span>
              </span>
            </div>
            <div className='flex gap-4 items-center'>
              <Link
                href={siteInfo.links.facebook}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:scale-110 transition-transform pl-2 py-4'
              >
                <FaFacebook className='text-white text-xl' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Navigation --- */}
      <div className={`relative bg-white  shadow-sm`}>
        <div className='flex h-27 w-full'>
          {/* Logo Section - Aligned Left with Fixed Angle */}
          <div
            className='relative z-10 bg-black flex items-center pl-8 pr-20 shrink-0'
            style={{ clipPath: angleSlantNavbar }}
          >
            <Image
              src='/images/LogoSmall.png'
              alt='Logo'
              height={80}
              width={148}
            />
          </div>

          {/* Info and Links Section */}
          <div className='grow flex flex-col justify-center'>
            {/* Top Row: Contact Info */}
            <div className='flex justify-end gap-8 items-center pr-8'>
              <div className='flex items-center gap-2'>
                <FaPhoneAlt className='text-accent text-lg' />
                <span className='text-md font-bold'>{siteInfo.phone}</span>
              </div>
              <div className='hidden sm:flex items-center gap-2 text-gray-500 text-sm'>
                <FaLocationDot className='text-accent text-lg' />
                <span className='italic'>Proudly serving the Greater Austin area.</span>
              </div>
            </div>

            {/* Divider */}
            <div className='h-0.5 w-full bg-gray-100 my-2.5' />

            {/* Bottom Row: Nav Links */}
            <div className='flex justify-end items-center gap-2 pr-8'>
              {[
                { label: 'Our Services', id: 'services' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Work', id: 'reviews' },
                { label: 'Contact Us', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className='text-gray-800 hover:text-accent font-bold text-sm tracking-tight transition-colors cursor-pointer p-2'
                >
                  {item.label}
                </button>
              ))}
              <BookNowBtn />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
