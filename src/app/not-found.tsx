import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold font-headline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-on-surface mt-4 mb-2">
          Page Not Found
        </h2>
        <p className="text-on-surface-variant mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-medium hover:opacity-90 transition-all active:scale-[0.98]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
