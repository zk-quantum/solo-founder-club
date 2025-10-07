'use client'

import { motion } from 'framer-motion'

interface Article {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  slug: string
}

// Sample articles - in production, this would come from a CMS
const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Death of the Traditional Startup',
    excerpt: 'Why the VC-funded, team-building playbook is becoming obsolete. The solo founder with AI achieves in months what took teams years.',
    author: 'The Editor',
    date: '2025-10-01',
    readTime: '8 min',
    category: 'Philosophy',
    slug: 'death-of-traditional-startup'
  },
  {
    id: '2',
    title: 'Building $1M ARR Solo: A Case Study',
    excerpt: 'How Alex Chen built Pixelsmith to $2M ARR without hiring a single employee. Lessons on leverage, automation, and AI.',
    author: 'Alex Chen',
    date: '2025-09-28',
    readTime: '12 min',
    category: 'Case Study',
    slug: 'building-1m-arr-solo'
  },
  {
    id: '3',
    title: 'The AI Toolkit for Solo Founders',
    excerpt: 'From code generation to customer support, a comprehensive guide to the AI tools that let you operate at team scale.',
    author: 'The Editor',
    date: '2025-09-25',
    readTime: '10 min',
    category: 'Tools',
    slug: 'ai-toolkit-solo-founders'
  },
  {
    id: '4',
    title: 'Leverage over Headcount: The New Paradigm',
    excerpt: 'Why hiring is the last resort, not the first. How to think about scale when the individual is the platform.',
    author: 'Jordan Lee',
    date: '2025-09-20',
    readTime: '6 min',
    category: 'Philosophy',
    slug: 'leverage-over-headcount'
  },
  {
    id: '5',
    title: 'Automating Everything: My $85K/mo MRR Setup',
    excerpt: 'The exact automation stack that runs my SaaS while I sleep. From payments to support to deployment.',
    author: 'Sam Rivera',
    date: '2025-09-15',
    readTime: '15 min',
    category: 'Technical',
    slug: 'automating-everything'
  },
  {
    id: '6',
    title: 'The Psychology of Building Alone',
    excerpt: 'On loneliness, decision fatigue, and the mental game of solo entrepreneurship. How to stay sane without a co-founder.',
    author: 'Maya Patel',
    date: '2025-09-10',
    readTime: '9 min',
    category: 'Mindset',
    slug: 'psychology-building-alone'
  },
]

export default function Ledger() {
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

            <h1 className="text-h1 mb-6">The Ledger</h1>
            <p className="text-h3 text-stone-400">
              Essays, case studies, and deep dives on the solo founder path.
              Philosophy, tactics, and truth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 border-b border-stone-800">
        <div className="container-brutal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Image placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-stone-800 to-stone-900 border border-stone-800 relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-sm text-stone-600">Featured Image</span>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-stone-950 font-mono text-xs uppercase tracking-wider">
                Featured
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 font-mono text-sm text-stone-500">
                <span className="uppercase">{ARTICLES[0].category}</span>
                <span>·</span>
                <span>{ARTICLES[0].readTime} read</span>
              </div>

              <h2 className="text-h1 hover:text-accent transition-colors cursor-pointer">
                {ARTICLES[0].title}
              </h2>

              <p className="text-stone-300 text-lg leading-relaxed">
                {ARTICLES[0].excerpt}
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 font-mono text-sm">
                    E
                  </div>
                  <div>
                    <div className="text-stone-300 text-sm font-medium">{ARTICLES[0].author}</div>
                    <div className="text-stone-600 text-xs">{ARTICLES[0].date}</div>
                  </div>
                </div>
              </div>

              <a
                href={`/ledger/${ARTICLES[0].slug}`}
                className="btn-primary inline-flex"
              >
                Read Article →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container-brutal">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.slice(1).map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button className="btn-secondary">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 border-t border-stone-800">
        <div className="container-brutal max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-h2">Never Miss a Post</h2>
            <p className="text-stone-400 text-lg">
              Join 10,000+ solo founders getting our weekly insights on leverage,
              automation, and building alone.
            </p>

            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 bg-stone-900 border border-stone-800 text-stone-100
                          placeholder-stone-600 font-mono text-sm focus:border-accent focus:outline-none"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>

            <p className="text-stone-600 text-xs">
              No spam. Unsubscribe anytime. Members-only content included.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.a
      href={`/ledger/${article.slug}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group block space-y-4"
    >
      {/* Image placeholder */}
      <div className="aspect-[16/9] bg-stone-900 border border-stone-800 relative overflow-hidden
                      group-hover:border-accent transition-colors duration-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-sm text-stone-700">Article Image</span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 font-mono text-xs text-stone-500 uppercase">
        <span>{article.category}</span>
        <span>·</span>
        <span>{article.readTime}</span>
      </div>

      {/* Title */}
      <h3 className="text-h3 group-hover:text-accent transition-colors duration-300">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-stone-400 text-sm leading-relaxed line-clamp-3">
        {article.excerpt}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2">
        <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center text-stone-500 font-mono text-xs">
          {article.author.charAt(0)}
        </div>
        <div>
          <div className="text-stone-400 text-sm">{article.author}</div>
          <div className="text-stone-600 text-xs">{article.date}</div>
        </div>
      </div>
    </motion.a>
  )
}
