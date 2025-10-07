'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Fellow {
  id: string
  name: string
  venture: string
  website: string
  description: string
  philosophy: string
  metrics: {
    label: string
    value: string
  }[]
  imageUrl?: string
}

// Sample fellows - in production, this would come from a database
const FELLOWS: Fellow[] = [
  {
    id: '1',
    name: 'Alex Chen',
    venture: 'Pixelsmith',
    website: 'https://pixelsmith.io',
    description: 'AI-powered design tool for developers. $2M ARR, 50K users, zero employees.',
    philosophy: 'A great product is a force multiplier. I built the tools I needed, then realized others needed them too.',
    metrics: [
      { label: 'ARR', value: '$2M' },
      { label: 'Users', value: '50K' },
      { label: 'Team Size', value: '1' },
    ]
  },
  {
    id: '2',
    name: 'Jordan Lee',
    venture: 'CodeFlow',
    website: 'https://codeflow.dev',
    description: 'Developer productivity suite. Bootstrapped to $1.5M ARR through automation and AI.',
    philosophy: 'Every hour spent building automation is worth ten hours of manual work. Leverage compounds.',
    metrics: [
      { label: 'ARR', value: '$1.5M' },
      { label: 'Customers', value: '2.3K' },
      { label: 'Years Solo', value: '3' },
    ]
  },
  {
    id: '3',
    name: 'Sam Rivera',
    venture: 'Datawise',
    website: 'https://datawise.co',
    description: 'Analytics platform for SMBs. Built entirely with no-code tools and AI assistance.',
    philosophy: 'The best code is no code. I focus on solving problems, not writing boilerplate.',
    metrics: [
      { label: 'MRR', value: '$85K' },
      { label: 'Churn Rate', value: '2.1%' },
      { label: 'Founded', value: '2023' },
    ]
  },
  {
    id: '4',
    name: 'Maya Patel',
    venture: 'WriteSmart',
    website: 'https://writesmart.ai',
    description: 'AI writing assistant for technical content. Profitable in month 6.',
    philosophy: "Solo doesn't mean isolated. I leverage AI, automation, and community while maintaining full ownership.",
    metrics: [
      { label: 'MRR', value: '$42K' },
      { label: 'Growth', value: '25% MoM' },
      { label: 'Runway', value: 'Infinite' },
    ]
  },
  {
    id: '5',
    name: 'Chris Taylor',
    venture: 'ShipFast SaaS',
    website: 'https://shipfast.dev',
    description: 'Boilerplate for indie hackers. $100K in first year, all automated.',
    philosophy: 'Build once, sell infinitely. Digital products are the ultimate leverage.',
    metrics: [
      { label: 'Revenue', value: '$100K' },
      { label: 'Time Investment', value: '~10h/week' },
      { label: 'Margin', value: '95%' },
    ]
  },
  {
    id: '6',
    name: 'Priya Singh',
    venture: 'NoCodeOps',
    website: 'https://nocodeops.io',
    description: 'Operations automation for startups. Solo since day one, scaled to 7 figures.',
    philosophy: 'If you can automate it, you should. My business runs while I sleep.',
    metrics: [
      { label: 'ARR', value: '$1.2M' },
      { label: 'Customers', value: '450' },
      { label: 'Support Tickets/mo', value: '~5' },
    ]
  },
]

export default function Fellows() {
  const [selectedFellow, setSelectedFellow] = useState<Fellow | null>(null)

  return (
    <main className="min-h-screen bg-stone-950">
      {/* Header */}
      <section className="relative py-24 border-b border-stone-800">
        <div className="container-brutal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <a href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 mb-8 font-mono text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </a>

            <h1 className="text-h1 mb-6">The Fellows</h1>
            <p className="text-h3 text-stone-400">
              Solo founders proving that one determined individual can rival any team.
              Each fellow demonstrates the power of leverage over headcount.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fellows Grid */}
      <section className="py-16">
        <div className="container-brutal">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FELLOWS.map((fellow, index) => (
              <FellowCard
                key={fellow.id}
                fellow={fellow}
                index={index}
                onClick={() => setSelectedFellow(fellow)}
              />
            ))}
          </div>

          {/* Membership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 border border-stone-800 text-center"
          >
            <h3 className="text-h2 mb-4">Join The Fellows</h3>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              Building something remarkable as a solo founder? Showcase your venture and
              connect with like-minded individuals who understand the power of one.
            </p>
            <a href="/apply" className="btn-primary">
              Apply for Membership
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fellow Detail Modal */}
      {selectedFellow && (
        <FellowDetailModal
          fellow={selectedFellow}
          onClose={() => setSelectedFellow(null)}
        />
      )}
    </main>
  )
}

function FellowCard({
  fellow,
  index,
  onClick
}: {
  fellow: Fellow
  index: number
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onClick}
      className="group relative p-8 border border-stone-800 hover:border-accent transition-all duration-300
                 bg-stone-900/50 hover:bg-stone-900 cursor-pointer"
    >
      {/* Profile */}
      <div className="mb-6">
        <div className="w-20 h-20 mb-4 bg-gradient-to-br from-accent to-accent-dark rounded-full
                        flex items-center justify-center text-stone-950 font-serif text-2xl font-bold">
          {fellow.name.charAt(0)}
        </div>
        <h3 className="text-h3 mb-1 group-hover:text-accent transition-colors duration-300">
          {fellow.name}
        </h3>
        <div className="flex items-center gap-2 text-stone-500 font-mono text-sm">
          <span>{fellow.venture}</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Description */}
      <p className="text-stone-400 text-sm mb-6 leading-relaxed">
        {fellow.description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800">
        {fellow.metrics.map((metric) => (
          <div key={metric.label}>
            <div className="text-accent font-mono font-bold">
              {metric.value}
            </div>
            <div className="text-stone-600 text-xs uppercase tracking-wider">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-stone-600 font-mono text-xs">View Profile →</span>
      </div>
    </motion.div>
  )
}

function FellowDetailModal({
  fellow,
  onClose
}: {
  fellow: Fellow
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-stone-900 border border-stone-800 p-12"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-500 hover:text-stone-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-h1 mb-2">{fellow.name}</h2>
            <a
              href={fellow.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-mono text-sm"
            >
              {fellow.venture}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-h3 mb-3 text-stone-400">About</h3>
            <p className="text-stone-300 leading-relaxed">{fellow.description}</p>
          </div>

          {/* Philosophy */}
          <div className="p-6 bg-stone-800/50 border-l-4 border-accent">
            <h3 className="text-sm font-mono uppercase tracking-wider text-stone-400 mb-3">
              Solo Founder Philosophy
            </h3>
            <p className="text-stone-100 leading-relaxed italic">
              "{fellow.philosophy}"
            </p>
          </div>

          {/* Metrics */}
          <div>
            <h3 className="text-h3 mb-4 text-stone-400">Metrics</h3>
            <div className="grid grid-cols-3 gap-6">
              {fellow.metrics.map((metric) => (
                <div key={metric.label} className="text-center p-4 border border-stone-800">
                  <div className="text-2xl text-accent font-mono font-bold mb-1">
                    {metric.value}
                  </div>
                  <div className="text-stone-500 text-xs uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visit Site */}
          <div className="pt-6 border-t border-stone-800">
            <a
              href={fellow.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Visit {fellow.venture} →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
