import clsx from 'clsx';

export default function GradientText({ children, as: Tag = 'span', className = '' }) {
  return (
    <Tag
      className={clsx(
        'bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
