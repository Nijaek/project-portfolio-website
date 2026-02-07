import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-2 text-6xl font-bold text-accent">404</h1>
      <p className="mb-6 text-lg text-muted">Page not found</p>
      <Link
        href="/"
        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors no-underline hover:bg-accent/90"
      >
        Go Home
      </Link>
    </div>
  );
}
