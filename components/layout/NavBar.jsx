'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-xs font-bold text-white">
            NK
          </span>
          <div>
            <span className="text-lg font-bold text-text">Nijae King</span>
            <span className="ml-3 hidden text-sm text-muted sm:inline">
              Software Engineer
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'rounded-lg px-4 py-2 text-sm font-medium transition-colors no-underline',
                pathname === link.href
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted hover:bg-white/5 hover:text-text',
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:nking0306@gmail.com"
            className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors no-underline hover:bg-white/5 hover:text-text"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
