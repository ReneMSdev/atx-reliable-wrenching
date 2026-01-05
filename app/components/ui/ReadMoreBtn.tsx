'use client'

import { FaArrowRight } from 'react-icons/fa'

interface ReadMoreBtnProps {
  onClick: () => void
}

export default function ReadMoreBtn({ onClick }: ReadMoreBtnProps) {
  return (
    <button
      className='bg-accent text-white text-sm font-bold tracking-wide px-6 py-2 inline-flex items-center gap-2 hover:bg-accent-hover transition-all duration-200 cursor-pointer'
      onClick={onClick}
    >
      Read More <FaArrowRight className='text-white' />
    </button>
  )
}
