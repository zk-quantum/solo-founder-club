'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-bg-primary">
          <div className="max-w-2xl text-center p-8">
            <h1 className="text-6xl md:text-8xl mb-8 font-bold">
              Error
            </h1>
            
            <p className="text-2xl md:text-3xl mb-12">
              Something went wrong.
            </p>

            <button
              onClick={reset}
              className="px-8 py-4 bg-black text-white"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
