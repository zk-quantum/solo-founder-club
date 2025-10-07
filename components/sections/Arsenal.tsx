'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, Code, Palette, Bot, Database, MessageSquare } from 'lucide-react'

const categories = ['All', 'AI', 'Automation', 'No-Code', 'Design', 'Marketing', 'Development']

const tools = [
  {
    name: 'Claude',
    category: 'AI',
    description: 'The AI coding partner that scales your engineering capacity from one to many.',
    icon: Bot,
    url: 'https://claude.ai',
  },
  {
    name: 'Cursor',
    category: 'Development',
    description: 'AI-powered code editor that writes, edits, and debugs alongside you.',
    icon: Code,
    url: 'https://cursor.sh',
  },
  {
    name: 'Vercel',
    category: 'Development',
    description: 'Deploy instantly with zero config. The platform for solo founders who ship.',
    icon: Zap,
    url: 'https://vercel.com',
  },
  {
    name: 'Framer',
    category: 'Design',
    description: 'Design and publish stunning websites without code. Design to production in minutes.',
    icon: Palette,
    url: 'https://framer.com',
  },
  {
    name: 'Supabase',
    category: 'Development',
    description: 'Open source Firebase alternative. Backend as a service with real-time capabilities.',
    icon: Database,
    url: 'https://supabase.com',
  },
  {
    name: 'Zapier',
    category: 'Automation',
    description: 'Connect your apps and automate workflows. Your personal automation army.',
    icon: MessageSquare,
    url: 'https://zapier.com',
  },
]

export default function Arsenal() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTools = activeCategory === 'All'
    ? tools
    : tools.filter(tool => tool.category === activeCategory)

  return (
    <section className="section-padding bg-obsidian noise-overlay">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-4xl mb-20">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-smoke-dark mb-6">
            The Arsenal
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-smoke leading-tight mb-6">
            Supertools for the{' '}
            <span className="text-stroke-accent">unbounded</span> founder
          </h2>
          <p className="text-lg md:text-xl text-smoke-dark max-w-2xl">
            Curated leverage-multipliers. Each tool chosen for its ability to turn one into many.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-border pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-obsidian'
                  : 'bg-transparent text-smoke-dark border border-border hover:border-smoke hover:text-smoke'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-obsidian-light border border-border p-8 hover:border-accent transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                    <Icon className="w-6 h-6 text-smoke group-hover:text-obsidian transition-colors duration-300" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-smoke-dark group-hover:text-accent transition-colors duration-300" />
                </div>

                {/* Category tag */}
                <p className="text-xs uppercase tracking-wider text-smoke-dark mb-3">
                  {tool.category}
                </p>

                {/* Name */}
                <h3 className="text-2xl font-display text-smoke mb-3 group-hover:text-accent transition-colors duration-300">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-smoke-dark leading-relaxed">
                  {tool.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              </motion.a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-smoke-dark mb-6">
            Have a tool that multiplies leverage?
          </p>
          <button className="btn-ghost">
            Suggest a Tool
          </button>
        </div>
      </div>
    </section>
  )
}
