export default function Loading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Nav skeleton */}
      <div className="h-16 border-b border-outline-variant/20" />
      {/* Hero skeleton */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="h-4 w-32 bg-surface-container rounded mb-6" />
        <div className="h-12 w-3/4 bg-surface-container rounded mb-4" />
        <div className="h-12 w-1/2 bg-surface-container rounded mb-8" />
        <div className="h-6 w-2/3 bg-surface-container-high rounded mb-8" />
        <div className="flex gap-4">
          <div className="h-12 w-40 bg-surface-container rounded-xl" />
          <div className="h-12 w-40 bg-surface-container rounded-xl" />
        </div>
      </div>
    </div>
  );
}
