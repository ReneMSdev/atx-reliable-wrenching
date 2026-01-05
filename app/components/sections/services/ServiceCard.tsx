'use client'

import Image from 'next/image'
import { IconType } from 'react-icons'
import ReadMoreBtn from '@/components/ui/ReadMoreBtn'

interface ServiceCardProps {
  image: string
  Icon: IconType
  title: string
  description: string
}

export default function ServiceCard({ image, Icon, title, description }: ServiceCardProps) {
  return (
    <div className='bg-surface p-5 w-full max-w-xs border-b-4 border-gray-300'>
      {/* Image wrapper */}
      <div className='relative w-full aspect-3/2'>
        <Image
          src={image}
          alt='Repair Service'
          fill
          className='object-cover'
          sizes='100vw'
        />

        {/* Flair */}
        <div className='absolute bottom-0 left-0 flex items-end'>
          {/* Square */}
          <div className='bg-accent w-20 h-20 flex items-center justify-center translate-y-[29px]'>
            <Icon className='text-white text-4xl' />
          </div>

          {/* Extension */}
          <svg
            width='120'
            height='30'
            viewBox='0 0 120 30'
            className='block translate-y-[29px]'
            aria-hidden
          >
            <path
              d='M0 30 H90 L120 0 H0 Z'
              className='fill-accent'
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 className='font-display text-3xl pt-10 pb-2'>{title}</h3>

      {/* Body */}
      <p className='text-sm pb-5'>{description}</p>

      {/* Button */}
      <ReadMoreBtn onClick={() => {}} />
    </div>
  )
}
