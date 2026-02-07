import { getAllProjects, getFeaturedProjects, getAllCategories } from '@/lib/projects';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';

export default function HomePage() {
  const allProjects = getAllProjects();
  const featured = getFeaturedProjects();
  const categories = getAllCategories();

  return (
    <>
      <HeroSection />
      <StatsSection
        totalProjects={allProjects.length}
        featuredCount={featured.length}
        categoryCount={categories.length}
      />
      <FeaturedProjects projects={featured} />
    </>
  );
}
