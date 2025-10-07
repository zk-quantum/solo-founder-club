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
  title: 'The Solo Founder Club - When One Becomes Many',
  description: 'An exclusive digital sanctuary for solo founders who believe the individual is the ultimate unit of scale. Join the collective of ones building remarkable companies through leverage, not labor.',
  keywords: 'solo founder, indie hacker, entrepreneur, startup, leverage, automation, AI tools, no-code, one-person business',
  authors: [{ name: 'The Solo Founder Club' }],
  creator: 'The Solo Founder Club',
  publisher: 'The Solo Founder Club',
  metadataBase: new URL('https://solofounder.club'),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solofounder.club',
    title: 'The Solo Founder Club - When One Becomes Many',
    description: 'An exclusive community for solo founders building remarkable companies. Where leverage meets vision.',
    siteName: 'The Solo Founder Club',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'The Solo Founder Club - When One Becomes Many',
    description: 'An exclusive community for solo founders building remarkable companies. Where leverage meets vision.',
    creator: '@solofounderclub',
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

  verification: {
    // Add your verification codes when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
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
