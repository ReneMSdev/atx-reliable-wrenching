import type { Metadata } from 'next'
import { Inter, Roboto_Condensed, Squada_One } from 'next/font/google'
import './globals.css'

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
  title: 'ATX Reliable Wrenching',
  description: 'Providing mobile mechanic services to the Austin area.',
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
      </body>
    </html>
  )
}
