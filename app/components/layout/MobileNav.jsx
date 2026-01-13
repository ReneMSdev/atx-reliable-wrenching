'use client'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { scrollToSection } from './scrollToSection'

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const angleSlantNavbar = 'polygon(0 0, 100% 0, calc(100% - 46px) 100%, 0% 100%)'

  const menuItems = [
    { label: 'Our Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'Our Work', id: 'reviews' },
    { label: 'Contact Us', id: 'contact' },
  ]

  const handleMenuClick = (id) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Menu Bar */}
      <nav className='fixed top-0 left-0 w-full z-50 shadow-sm'>
        <div className='relative flex h-20 w-full'>
          {/* White Section - Right Side with Hamburger (behind black section) */}
          <div className='absolute inset-0 bg-white flex items-center justify-end pr-4 z-10'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-black transition-opacity p-2 cursor-pointer'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>

          {/* Black Section - Left Side with Diagonal Edge (on top) */}
          <div
            className='relative bg-black flex items-center pl-4 pr-12 w-1/2 z-20'
            style={{ clipPath: angleSlantNavbar }}
          >
            <Image
              src='/images/LogoSmall.png'
              alt='Logo'
              height={60}
              width={111}
              className='object-contain'
            />
          </div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-accent z-40 transition-all duration-500 ease-in-out shadow-sm overflow-hidden ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className='flex flex-col py-6'>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className='text-white font-bold text-md px-6 py-3 transition-colors text-center cursor-pointer'
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setIsMenuOpen(false)}
            className='bg-black text-white mx-auto px-10 py-3 mt-4 font-bold text-sm tracking-widest hover:bg-gray-800 transition-all cursor-pointer'
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className='h-20' />
    </>
  )
}
