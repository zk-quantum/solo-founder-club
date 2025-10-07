'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="container-custom max-w-2xl text-center">
        <h1 className="font-display text-6xl md:text-8xl mb-8">
          Error
        </h1>
        
        <p className="text-2xl md:text-3xl font-serif text-text-secondary mb-12">
          Something went wrong.
        </p>

        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
