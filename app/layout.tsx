import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/animations/SmoothScroll'
import CustomCursor from '@/components/animations/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-canela',
  weight: ['400', '700'],
  display: 'swap',
})

const gtSuper = playfair

export const metadata: Metadata = {
  title: 'Solo Founder Club - When One Becomes Many',
  description: 'A digital sanctuary for the distributed founder.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${gtSuper.variable}`}>
      <body className="font-sans">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
