'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Character reveal animation
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char')
        
        gsap.fromTo(
          chars,
          {
            opacity: 0,
            y: 50,
            rotationX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            stagger: 0.03,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2,
          }
        )
      }

      // Scroll indicator animation
      if (scrollIndicatorRef.current) {
        gsap.fromTo(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: -20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          }
        )
      }

      // Background gradient shift
      gsap.to('.hero-bg', {
        backgroundPosition: '50% 100%',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const text = 'When one becomes many.'
  const words = text.split(' ')

  return (
    <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Animated background */}
      <div 
        className="hero-bg absolute inset-0 opacity-100"
        style={{
          background: 'linear-gradient(180deg, #FAFAF8 0%, #F5F5F3 100%)',
          backgroundSize: '100% 200%',
          backgroundPosition: '50% 0%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <h1
          ref={titleRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none perspective-1000"
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              {word.split('').map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="char inline-block transform-3d"
                  style={{ transformOrigin: '50% 100%' }}
                >
                  {char}
                </span>
              ))}
              {wordIndex < words.length - 1 && (
                <span className="char inline-block">&nbsp;</span>
              )}
            </span>
          ))}
        </h1>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-text-secondary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-text-primary animate-scroll" />
          </div>
          <p className="text-xs text-text-secondary mt-4 tracking-widest uppercase">
            Scroll
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
