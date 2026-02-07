import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllSlugs, getProjectBySlug, getAllProjects } from '@/lib/projects';
import ProjectDetailContent from './ProjectDetailContent';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Not Found' };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const allProjects = getAllProjects();
  const related = allProjects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        (p.category === project.category || p.tags.some((t) => project.tags.includes(t))),
    )
    .slice(0, 3);

  return <ProjectDetailContent project={project} related={related} />;
}
