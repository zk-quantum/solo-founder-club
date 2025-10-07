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

  const text = 'ONE BECOMES MANY'
  const words = text.split(' ')

  return (
    <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Animated dark background */}
      <div
        className="hero-bg absolute inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #1A1A1A 0%, #0A0A0A 100%)',
          backgroundSize: '100% 200%',
          backgroundPosition: '50% 0%',
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 blur-3xl animate-glow"
        style={{
          background: 'radial-gradient(circle, #FF3366 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Overline */}
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-smoke-dark mb-8 animate-fade-in">
          The Solo Founder Club
        </p>

        <h1
          ref={titleRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] leading-[0.9] perspective-1000 text-smoke mb-12"
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

        {/* Subheading */}
        <p className="text-lg md:text-xl text-smoke-dark max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0 }}>
          A digital sanctuary for the distributed founder. Where leverage meets vision.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '2s', opacity: 0 }}>
          <button className="btn-primary">
            Apply for Membership
          </button>
          <button className="btn-outline">
            Explore the Thesis
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0"
        >
          <div className="w-px h-16 bg-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-accent animate-scroll" />
          </div>
          <p className="text-xs text-smoke-dark mt-4 tracking-widest uppercase">
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
