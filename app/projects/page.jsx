import { getAllProjects, getAllTags, getAllCategories } from '@/lib/projects';
import ProjectFilters from '@/components/sections/ProjectFilters';

export const metadata = {
  title: 'Projects',
  description: 'Browse all projects by Nijae Ray King.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const allTags = getAllTags();
  const allCategories = getAllCategories();

  return (
    <ProjectFilters
      projects={projects}
      allTags={allTags}
      allCategories={allCategories}
    />
  );
}
