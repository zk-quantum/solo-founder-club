import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/animations/SmoothScroll'
import CustomCursor from '@/components/animations/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Solo Founder Club - When One Becomes Many',
  description: 'A digital sanctuary for founders who embody the great leverage inversion—individuals who have become distributed systems.',
  keywords: ['solo founder', 'AI', 'leverage', 'distributed systems', 'entrepreneurship'],
  authors: [{ name: 'Solo Founder Club' }],
  creator: 'Solo Founder Club',
  publisher: 'Solo Founder Club',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://solo-founder-club.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://solo-founder-club.vercel.app',
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
