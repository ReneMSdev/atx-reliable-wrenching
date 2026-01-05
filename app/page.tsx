import Image from 'next/image'
import Nav from './components/Nav'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <h1>Hello World</h1>
    </>
  )
}
