import Nav from '@/components/layout/Nav'
import MobileNav from '@/components/layout/MobileNav'
import Hero from '@/components/sections/hero/Hero'
import Services from '@/components/sections/services/Services'
import About from '@/components/sections/about/About'
import Reviews from '@/components/sections/reviews/Reviews'
import Contact from '@/components/sections/contact/Contact'
import Footer from '@/components/sections/footer/Footer'

export default function Home() {
  return (
    <>
      <div className='hidden min-[900px]:block'>
        <Nav />
      </div>
      <div className='block min-[900px]:hidden'>
        <MobileNav />
      </div>
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}
