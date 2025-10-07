'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// Tool categories
const CATEGORIES = [
  'All',
  'AI Agents',
  'Automation',
  'No-Code',
  'Design',
  'Marketing',
  'Analytics',
  'Development'
] as const

type Category = typeof CATEGORIES[number]

interface Tool {
  id: string
  name: string
  category: Category
  description: string
  url: string
  leverage: string
  tags: string[]
}

// Curated tools that enable solo founders
const TOOLS: Tool[] = [
  {
    id: '1',
    name: 'Claude',
    category: 'AI Agents',
    description: 'Your AI coding partner. Writes, debugs, and architects software at enterprise level. The ultimate force multiplier.',
    url: 'https://claude.ai',
    leverage: 'Replace entire dev team',
    tags: ['AI', 'Coding', 'Analysis']
  },
  {
    id: '2',
    name: 'Cursor',
    category: 'AI Agents',
    description: 'AI-first code editor. Pair programming with an AI that knows your entire codebase.',
    url: 'https://cursor.sh',
    leverage: 'Write code 10X faster',
    tags: ['AI', 'IDE', 'Productivity']
  },
  {
    id: '3',
    name: 'v0',
    category: 'Design',
    description: 'Generate UI components from text descriptions. Ship interfaces in minutes, not days.',
    url: 'https://v0.dev',
    leverage: 'Design to code instantly',
    tags: ['AI', 'UI', 'React']
  },
  {
    id: '4',
    name: 'Zapier',
    category: 'Automation',
    description: 'Connect your entire tech stack. Automate workflows without writing code.',
    url: 'https://zapier.com',
    leverage: 'Automate repetitive tasks',
    tags: ['Automation', 'Integration', 'No-Code']
  },
  {
    id: '5',
    name: 'Supabase',
    category: 'Development',
    description: 'Open source Firebase alternative. Backend as a service - database, auth, storage in minutes.',
    url: 'https://supabase.com',
    leverage: 'Backend in 15 minutes',
    tags: ['Database', 'Backend', 'PostgreSQL']
  },
  {
    id: '6',
    name: 'Framer',
    category: 'Design',
    description: 'Design and publish websites with AI. From concept to production without touching code.',
    url: 'https://framer.com',
    leverage: 'Website in hours, not weeks',
    tags: ['Design', 'No-Code', 'Web']
  },
  {
    id: '7',
    name: 'Notion',
    category: 'No-Code',
    description: 'All-in-one workspace. Docs, databases, wikis, and project management in one place.',
    url: 'https://notion.so',
    leverage: 'Replace 5+ tools',
    tags: ['Productivity', 'Database', 'Documentation']
  },
  {
    id: '8',
    name: 'Plausible',
    category: 'Analytics',
    description: 'Privacy-first analytics. All the insights, none of the cookies or compliance headaches.',
    url: 'https://plausible.io',
    leverage: 'Analytics without complexity',
    tags: ['Analytics', 'Privacy', 'Metrics']
  },
]

export default function Arsenal() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter tools
  const filteredTools = TOOLS.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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

            <h1 className="text-h1 mb-6">The Arsenal</h1>
            <p className="text-h3 text-stone-400 mb-8">
              Curated supertools that enable solo founders to scale. Each one is a leverage multiplier.
            </p>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-600
                          font-mono text-sm focus:border-accent focus:outline-none transition-colors"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur-sm border-b border-stone-800">
        <div className="container-brutal py-6">
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2 font-mono text-sm uppercase tracking-wider whitespace-nowrap
                  border transition-all duration-300
                  ${selectedCategory === category
                    ? 'border-accent bg-accent text-stone-950'
                    : 'border-stone-800 text-stone-400 hover:border-stone-600 hover:text-stone-100'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container-brutal">
          {filteredTools.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-stone-500 font-mono">No tools found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          )}

          {/* Add Tool CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-12 border border-stone-800 text-center"
          >
            <h3 className="text-h3 mb-4">Know a leverage multiplier?</h3>
            <p className="text-stone-400 mb-6 max-w-lg mx-auto">
              Members can suggest tools for The Arsenal. Help the community discover new supertools.
            </p>
            <a href="/apply" className="btn-secondary">
              Become a Member
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative p-8 border border-stone-800 hover:border-accent transition-all duration-300
                 bg-stone-900/50 hover:bg-stone-900 flex flex-col"
    >
      {/* Category badge */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-stone-800 text-stone-400 font-mono text-xs uppercase tracking-wider">
        {tool.category}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4">
        <h3 className="text-h3 group-hover:text-accent transition-colors duration-300">
          {tool.name}
        </h3>

        <p className="text-stone-400 text-sm leading-relaxed">
          {tool.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-stone-800/50 text-stone-500 font-mono text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Leverage indicator */}
      <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-accent text-sm font-mono">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          {tool.leverage}
        </div>

        <svg
          className="w-5 h-5 text-stone-600 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </motion.a>
  )
}
