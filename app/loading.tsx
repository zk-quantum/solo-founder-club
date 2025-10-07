export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="container-custom max-w-2xl text-center">
        <div className="inline-block">
          <div className="w-16 h-16 border-4 border-text-primary border-t-transparent rounded-full animate-spin" />
        </div>
        
        <p className="mt-8 text-sm text-text-secondary tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  )
}
