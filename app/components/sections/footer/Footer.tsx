export default function Footer() {
  return (
    <footer className='bg-surface-dark text-white py-10 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-sm space-y-4 text-center text-ink-inverse'>
          <p className=''>Quality Service Delivered to Your Door</p>
          <p className=''>
            © {new Date().getFullYear()} ATX Reliable Wrenching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
