import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import SmoothScroll from '@/components/animations/SmoothScroll'
import CustomCursor from '@/components/animations/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const canela = localFont({
  src: [
    {
      path: '../public/fonts/Canela-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Canela-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-canela',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

const gtSuper = localFont({
  src: [
    {
      path: '../public/fonts/GTSuper-Display-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-gt-super',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

export const metadata: Metadata = {
  title: 'Solo Founder Club - When One Becomes Many',
  description: "A digital sanctuary for founders who embody the great leverage inversion—individuals who've become distributed systems.",
  keywords: ['solo founder', 'AI', 'leverage', 'distributed systems', 'entrepreneurship'],
  authors: [{ name: 'Solo Founder Club' }],
  creator: 'Solo Founder Club',
  publisher: 'Solo Founder Club',
  metadataBase: new URL('https://solofoundclub.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solofoundclub.com',
    title: 'Solo Founder Club - When One Becomes Many',
    description: 'A digital sanctuary for founders who embody the great leverage inversion.',
    siteName: 'Solo Founder Club',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solo Founder Club - When One Becomes Many',
    description: 'A digital sanctuary for founders who embody the great leverage inversion.',
    creator: '@solofoundclub',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${canela.variable} ${gtSuper.variable}`}
    >
      <body className="font-sans">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
