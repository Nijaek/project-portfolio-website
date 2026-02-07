import clsx from 'clsx';

export default function GlassCard({ children, className = '', ...props }) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
