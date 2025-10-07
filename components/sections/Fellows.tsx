'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Twitter, Globe } from 'lucide-react'

const fellows = [
  {
    name: 'Alex Rivera',
    venture: 'Automate.io',
    tagline: 'Building the automation layer for solo founders',
    philosophy: '"I build systems, not teams. Every workflow is a force multiplier."',
    url: 'https://automate.io',
    twitter: '@alexrivera',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  },
  {
    name: 'Maya Chen',
    venture: 'DesignOS',
    tagline: 'Design systems that scale without designers',
    philosophy: '"One designer with the right tools can outfit an entire company."',
    url: 'https://designos.com',
    twitter: '@mayachen',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
  },
  {
    name: 'Jordan Blake',
    venture: 'CodeCraft AI',
    tagline: 'AI-native development frameworks',
    philosophy: '"The best code is code you never had to write."',
    url: 'https://codecraft.ai',
    twitter: '@jordanblake',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
  },
  {
    name: 'Sam Patel',
    venture: 'MetricMind',
    tagline: 'Analytics for the solo operator',
    philosophy: '"Data should tell you what to do, not what happened."',
    url: 'https://metricmind.io',
    twitter: '@sampatel',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sam',
  },
]

export default function Fellows() {
  return (
    <section className="section-padding bg-obsidian-light noise-overlay">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-4xl mb-20">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-smoke-dark mb-6">
            The Fellows
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-smoke leading-tight mb-6">
            A collective of{' '}
            <span className="text-accent">ones</span>
          </h2>
          <p className="text-lg md:text-xl text-smoke-dark max-w-2xl">
            Solo founders building remarkable companies. Proof that the individual is the ultimate unit of scale.
          </p>
        </div>

        {/* Fellows grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fellows.map((fellow, index) => (
            <motion.div
              key={fellow.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative bg-obsidian border border-border p-10 hover:border-accent transition-all duration-500"
            >
              {/* Top row: Image + Links */}
              <div className="flex items-start justify-between mb-8">
                <div className="w-20 h-20 border-2 border-border overflow-hidden group-hover:border-accent transition-colors duration-300">
                  <img
                    src={fellow.image}
                    alt={fellow.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/${fellow.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:bg-accent transition-all duration-300 group/icon"
                  >
                    <Twitter className="w-4 h-4 text-smoke group-hover/icon:text-obsidian transition-colors" />
                  </a>
                  <a
                    href={fellow.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:bg-accent transition-all duration-300 group/icon"
                  >
                    <Globe className="w-4 h-4 text-smoke group-hover/icon:text-obsidian transition-colors" />
                  </a>
                </div>
              </div>

              {/* Name & Venture */}
              <div className="mb-6">
                <h3 className="text-2xl font-display text-smoke mb-2 group-hover:text-accent transition-colors duration-300">
                  {fellow.name}
                </h3>
                <p className="text-sm text-smoke-dark flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent" />
                  {fellow.venture}
                </p>
              </div>

              {/* Tagline */}
              <p className="text-base text-smoke mb-6">
                {fellow.tagline}
              </p>

              {/* Philosophy */}
              <blockquote className="border-l-2 border-accent pl-6 italic text-sm text-smoke-dark">
                {fellow.philosophy}
              </blockquote>

              {/* Visit venture link */}
              <a
                href={fellow.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-smoke-dark hover:text-accent transition-colors duration-300"
              >
                Visit Venture
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center border-t border-border pt-16">
          <h3 className="text-2xl md:text-3xl font-display text-smoke mb-6">
            Building remarkable solo?
          </h3>
          <button className="btn-primary">
            Apply to Join the Fellows
          </button>
        </div>
      </div>
    </section>
  )
}
