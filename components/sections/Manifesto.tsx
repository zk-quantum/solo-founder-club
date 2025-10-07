'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = document.querySelectorAll('.manifesto-line')
      lines.forEach((line) => {
        gsap.fromTo(line, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: line, start: 'top 80%' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-custom max-w-4xl space-y-6">
        <p className="manifesto-line text-4xl font-serif">At the logical extreme</p>
        <p className="manifesto-line text-4xl font-serif">of the great leverage inversion,</p>
      </div>
    </section>
  )
}
