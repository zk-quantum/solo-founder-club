'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main ref={containerRef} className="relative min-h-screen">
      {/* Hero Section - Full viewport with scroll hint */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="container-brutal text-center space-y-12"
        >
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-sm uppercase tracking-[0.3em] text-stone-500"
          >
            The Solo Founder Club
          </motion.div>

          {/* Main headline - Brutalist typography */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-display font-serif font-bold text-balance"
          >
            <span className="block">One</span>
            <span className="block text-accent">Becomes</span>
            <span className="block">Many</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-h3 text-stone-400 max-w-3xl mx-auto text-balance"
          >
            The definitive hub for founders who scale through leverage,
            not headcount. The individual is the platform.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#thesis" className="btn-primary group">
              Explore the Thesis
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#apply" className="btn-secondary">
              Apply for Membership
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-stone-600">
            <span className="font-mono text-xs uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-stone-600 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Thesis Section */}
      <section id="thesis" className="relative py-section bg-stone-950">
        <div className="container-brutal">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left: Core principles */}
            <div className="space-y-12">
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-h1"
              >
                The Thesis
              </motion.h2>

              <div className="space-y-8">
                <ThesisPoint
                  number="01"
                  title="The Individual is the Platform"
                  description="We reject the notion that scale requires a large team. A single, determined individual with the right tools rivals any collective."
                />

                <ThesisPoint
                  number="02"
                  title="Leverage over Labor"
                  description="Amplify output through AI, automation, and intelligent systems. Scale internally. Execute at enterprise level without enterprise overhead."
                />

                <ThesisPoint
                  number="03"
                  title="A Community of Ones"
                  description="A network of self-reliant founders who connect for intellectual sparring and shared wisdom, not dependency."
                />
              </div>
            </div>

            {/* Right: Stats or visual element */}
            <div className="space-y-8">
              <StatsCard
                metric="$1M+"
                label="ARR achieved solo"
                description="Members running 7-figure businesses without employees"
              />
              <StatsCard
                metric="10X"
                label="Productivity multiplier"
                description="Through AI agents and automation systems"
              />
              <StatsCard
                metric="100%"
                label="Ownership retained"
                description="No dilution, no co-founders, pure vision"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-section bg-stone-900">
        <div className="container-brutal max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-h2 text-center mb-16">Who This Is For</h2>

            <div className="prose prose-invert prose-lg max-w-none space-y-6 text-stone-300">
              <p className="text-h3 font-serif text-stone-100 leading-relaxed">
                You believe a single person with leverage beats a team without it.
              </p>

              <p>
                You're not building a startup to hire dozens of people. You're building
                to solve problems, create value, and maintain creative control. You see
                AI as a force multiplier, not a threat.
              </p>

              <p>
                You're a developer who ships products. A designer who codes. A strategist
                who executes. You're tech-savvy, design-conscious, and philosophically
                aligned with the idea of individual leverage.
              </p>

              <p>
                This is for the ambitious solo founder who refuses to scale the traditional way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="relative py-section bg-stone-950">
        <div className="container-brutal max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-h1">Join the Club</h2>
            <p className="text-h3 text-stone-400">
              Membership is curated. We filter for mindset, not metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="/apply" className="btn-primary">
                Apply Now
              </a>
              <a href="/arsenal" className="btn-secondary">
                Explore the Arsenal
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-stone-800 py-12">
        <div className="container-brutal">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-stone-500 font-mono text-sm">
              © 2025 The Solo Founder Club
            </div>
            <div className="flex gap-8">
              <a href="/arsenal" className="link-underline text-stone-400 hover:text-stone-100">
                The Arsenal
              </a>
              <a href="/circle" className="link-underline text-stone-400 hover:text-stone-100">
                The Circle
              </a>
              <a href="/fellows" className="link-underline text-stone-400 hover:text-stone-100">
                The Fellows
              </a>
              <a href="/ledger" className="link-underline text-stone-400 hover:text-stone-100">
                The Ledger
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Thesis Point Component
function ThesisPoint({
  number,
  title,
  description
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative pl-16 border-l-2 border-stone-800 hover:border-accent transition-colors duration-300"
    >
      <div className="absolute left-0 top-0 -translate-x-1/2 font-mono text-sm text-stone-600 bg-stone-950 px-2">
        {number}
      </div>
      <h3 className="text-h3 mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-stone-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

// Stats Card Component
function StatsCard({
  metric,
  label,
  description
}: {
  metric: string
  label: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative p-8 border border-stone-800 hover:border-accent transition-all duration-300"
    >
      <div className="space-y-4">
        <div className="text-hero font-serif font-bold text-accent group-hover:scale-105 transition-transform duration-300">
          {metric}
        </div>
        <div className="text-h3 font-mono uppercase tracking-wider">
          {label}
        </div>
        <p className="text-stone-400 text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
