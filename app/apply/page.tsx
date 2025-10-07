'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  website: string
  venture: string
  leveragePhilosophy: string
  automationExample: string
  whyJoin: string
  revenue: string
  twitter: string
}

export default function Apply() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    venture: '',
    leveragePhilosophy: '',
    automationExample: '',
    whyJoin: '',
    revenue: '',
    twitter: '',
  })

  const totalSteps = 3

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to a backend
    console.log('Application submitted:', formData)
    setStep(4) // Success step
  }

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen bg-stone-950">
      {/* Header */}
      <section className="relative py-24 border-b border-stone-800">
        <div className="container-brutal max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 mb-8 font-mono text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </a>

            <h1 className="text-h1 mb-6">The Gate</h1>
            <p className="text-h3 text-stone-400 mb-8">
              Membership is curated. We filter for mindset, not just metrics.
            </p>

            {/* Progress Indicator */}
            {step < 4 && (
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 transition-colors duration-300 ${
                      i + 1 <= step ? 'bg-accent' : 'bg-stone-800'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container-brutal max-w-2xl">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-h2 mb-4">Step 1: About You</h2>
                <p className="text-stone-400">Let's start with the basics.</p>
              </div>

              <FormField
                label="Full Name"
                value={formData.name}
                onChange={(v) => updateFormData('name', v)}
                required
              />

              <FormField
                label="Email"
                type="email"
                value={formData.email}
                onChange={(v) => updateFormData('email', v)}
                required
              />

              <FormField
                label="Personal Website / Portfolio"
                value={formData.website}
                onChange={(v) => updateFormData('website', v)}
                placeholder="https://"
              />

              <FormField
                label="Twitter / X (optional)"
                value={formData.twitter}
                onChange={(v) => updateFormData('twitter', v)}
                placeholder="@yourusername"
              />

              <button
                onClick={() => setStep(2)}
                disabled={!formData.name || !formData.email}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-h2 mb-4">Step 2: Your Venture</h2>
                <p className="text-stone-400">Tell us what you're building.</p>
              </div>

              <FormField
                label="What are you building?"
                value={formData.venture}
                onChange={(v) => updateFormData('venture', v)}
                multiline
                rows={3}
                required
                placeholder="Brief description of your venture..."
              />

              <FormField
                label="Current Revenue Stage"
                value={formData.revenue}
                onChange={(v) => updateFormData('revenue', v)}
                select
                options={[
                  'Pre-revenue',
                  '$0 - $1K MRR',
                  '$1K - $10K MRR',
                  '$10K - $50K MRR',
                  '$50K+ MRR',
                  'Not revenue-focused'
                ]}
                required
              />

              <FormField
                label="Describe a system you've built to automate part of your business"
                value={formData.automationExample}
                onChange={(v) => updateFormData('automationExample', v)}
                multiline
                rows={4}
                required
                placeholder="Be specific about the problem, solution, and impact..."
              />

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="btn-secondary flex-1"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!formData.venture || !formData.revenue || !formData.automationExample}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-h2 mb-4">Step 3: Philosophy</h2>
                <p className="text-stone-400">These questions determine fit.</p>
              </div>

              <FormField
                label='What does "leverage" mean to you as a solo founder?'
                value={formData.leveragePhilosophy}
                onChange={(v) => updateFormData('leveragePhilosophy', v)}
                multiline
                rows={4}
                required
                placeholder="Share your perspective on scaling as an individual..."
              />

              <FormField
                label="Why do you want to join The Solo Founder Club?"
                value={formData.whyJoin}
                onChange={(v) => updateFormData('whyJoin', v)}
                multiline
                rows={4}
                required
                placeholder="What are you hoping to gain? What can you contribute?"
              />

              <div className="p-6 bg-stone-900 border border-stone-800">
                <h3 className="font-mono text-sm uppercase tracking-wider text-stone-400 mb-3">
                  What Happens Next
                </h3>
                <ul className="space-y-2 text-stone-400 text-sm">
                  <li className="flex gap-3">
                    <span className="text-accent">→</span>
                    <span>We review every application personally</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">→</span>
                    <span>Expect a response within 7 days</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">→</span>
                    <span>Accepted members get access to The Circle and exclusive resources</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="btn-secondary flex-1"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.leveragePhilosophy || !formData.whyJoin}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Application
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8 py-16"
            >
              <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-stone-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <h2 className="text-h1 mb-4">Application Submitted</h2>
                <p className="text-stone-400 max-w-lg mx-auto">
                  Thank you for applying to The Solo Founder Club. We'll review your application
                  and get back to you within 7 days.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="btn-primary">
                  Return Home
                </a>
                <a href="/arsenal" className="btn-secondary">
                  Explore The Arsenal
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}

function FormField({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  multiline = false,
  rows = 3,
  placeholder = '',
  select = false,
  options = [],
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  required?: boolean
  multiline?: boolean
  rows?: number
  placeholder?: string
  select?: boolean
  options?: string[]
}) {
  const baseClasses = `w-full px-6 py-4 bg-stone-900 border border-stone-800 text-stone-100
                       placeholder-stone-600 focus:border-accent focus:outline-none transition-colors`

  return (
    <div className="space-y-3">
      <label className="block font-mono text-sm uppercase tracking-wider text-stone-400">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>

      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={`${baseClasses} resize-none`}
        />
      ) : select ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={baseClasses}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
    </div>
  )
}
