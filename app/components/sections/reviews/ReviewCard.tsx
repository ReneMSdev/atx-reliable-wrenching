import Image from 'next/image'

export default function ReviewCard() {
  return (
    <div className='relative w-full max-w-lg aspect-video'>
      <Image
        src='/images/review-frame.svg'
        alt='Review Frame'
        fill
        className='object-contain'
      />

      {/* Text overlay */}
      <div className='absolute inset-0 p-4 flex flex-col justify-between'>
        {/* Review text */}
        <p className='text-sm leading-snug'>
          This is a placeholder review. Short and readable inside the frame.
        </p>

        {/* Bottom row */}
        <div className='flex items-center justify-between text-sm'>
          <span className='font-medium'>Jane Doe</span>
          <span>★★★★★</span>
        </div>
      </div>
    </div>
  )
}
