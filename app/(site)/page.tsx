import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/hero/Hero'
import Services from '@/components/sections/services/Services'
import About from '@/components/sections/about/About'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
    </>
  )
}
