import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/hero/Hero'
import Services from '@/components/sections/services/Services'
import About from '@/components/sections/about/About'
import Reviews from '@/components/sections/reviews/Reviews'
import Contact from '@/components/sections/contact/Contact'
import Footer from '@/components/sections/footer/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}
