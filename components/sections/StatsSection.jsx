'use client';

import ScrollReveal from '@/components/animation/ScrollReveal';
import CountUp from '@/components/animation/CountUp';
import GlassCard from '@/components/ui/GlassCard';
import { scaleIn } from '@/lib/animations';

export default function StatsSection({ totalProjects, featuredCount, categoryCount }) {
  const stats = [
    { label: 'Projects', value: totalProjects },
    { label: 'Featured', value: featuredCount },
    { label: 'Categories', value: categoryCount },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <ScrollReveal
            key={stat.label}
            variants={{
              hidden: scaleIn.hidden,
              visible: {
                ...scaleIn.visible,
                transition: { ...scaleIn.visible.transition, delay: i * 0.1 },
              },
            }}
          >
            <GlassCard className="text-center">
              <CountUp
                target={stat.value}
                className="text-4xl font-bold text-accent"
              />
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
