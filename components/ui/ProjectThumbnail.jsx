'use client';

import clsx from 'clsx';

export default function ProjectThumbnail({ thumbnail, title, variant = 'card' }) {
  const isDetail = variant === 'detail';

  if (thumbnail) {
    return (
      <div
        className={clsx(
          'relative w-full overflow-hidden',
          !isDetail && 'aspect-video',
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          alt={title}
          className={clsx(
            'w-full object-cover',
            !isDetail && 'h-full transition-transform duration-300 hover:scale-105',
          )}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'relative w-full overflow-hidden',
        isDetail ? 'aspect-[2/1] rounded-2xl border border-white/10' : 'aspect-video',
      )}
    >
      {/* Blurred gradient blobs */}
      <div className="absolute inset-[-80%] animate-shimmer bg-[length:200%_200%] bg-[radial-gradient(ellipse_at_20%_20%,var(--color-accent)_0%,transparent_40%),radial-gradient(ellipse_at_80%_80%,#1e3a5f_0%,transparent_40%),radial-gradient(ellipse_at_50%_50%,var(--color-accent)_0%,transparent_60%)] opacity-50 blur-3xl" />

      {/* Overlay tinted to page background */}
      <div className="absolute inset-0 bg-bg/60" />

      {/* Title text with animated shine */}
      <div className="relative flex h-full items-center justify-center p-6">
        <span
          className={clsx(
            'animate-text-shine bg-[length:400%_100%] bg-[linear-gradient(90deg,var(--color-text)_0%,var(--color-text)_40%,var(--color-accent)_50%,var(--color-text)_60%,var(--color-text)_100%)] bg-clip-text text-center font-bold text-transparent',
            isDetail ? 'text-4xl sm:text-5xl' : 'text-xl sm:text-2xl',
          )}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
