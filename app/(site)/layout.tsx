import type { Metadata } from 'next'
import { Inter, Roboto_Condensed, Squada_One } from 'next/font/google'
import '@/styles/globals.css'
import { Bounce, ToastContainer } from 'react-toastify'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const robotoCondensed = Roboto_Condensed({
  variable: '--font-condensed',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const squadaOne = Squada_One({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mobile Mechanic in Austin - ATX Reliable Wrenching',
  description:
    'Expert mobile mechanic in Austin offering brake repair, coolant leak repair, suspension diagnostics, and more. Fast, reliable, and at your location!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${robotoCondensed.variable} ${squadaOne.variable} antialiased`}
      >
        {children}
        <ToastContainer
          position='top-center'
          autoClose={3000}
          pauseOnHover={true}
          transition={Bounce}
          closeOnClick={true}
        />
      </body>
    </html>
  )
}
