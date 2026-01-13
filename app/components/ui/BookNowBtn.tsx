'use client'
import React from 'react'

interface BookNowBtnProps {
  href?: string
  bgClass?: string // e.g., "bg-black", "bg-accent", "bg-white"
  textClass?: string // e.g., "text-white", "text-black"
  className?: string // extra classes to override padding, font, etc.
}

export default function BookNowBtn({
  href = 'https://book.housecallpro.com/book/Atx-Reliable-Wrenching/05d27c29a0e34c4da5426ba6f6d53d3c?v2=true',
  bgClass = 'bg-black',
  textClass = 'text-white',
  className = '',
}: BookNowBtnProps) {
  return (
    <button
      onClick={() => window.open(href, '_blank')}
      className={`${bgClass} ${textClass} px-8 py-3 font-bold text-xs tracking-widest hover:bg-accent transition-all cursor-pointer ${className}`}
    >
      Book Now
    </button>
  )
}
