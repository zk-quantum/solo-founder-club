import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary noise-overlay">
      <div className="container-custom max-w-2xl text-center">
        <h1 className="font-display text-6xl md:text-8xl mb-8">
          404
        </h1>
        
        <p className="text-2xl md:text-3xl font-serif text-text-secondary mb-4">
          Page not found.
        </p>

        <p className="text-lg text-text-secondary mb-12">
          The page you are looking for does not exist.
        </p>

        <Link href="/" className="btn-primary inline-flex">
          Return Home
        </Link>
      </div>
    </div>
  )
}
