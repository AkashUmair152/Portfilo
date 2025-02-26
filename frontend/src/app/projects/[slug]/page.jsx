import Footer from '@/components/Footer';
import Image from 'next/image';
import axios from 'axios';
import { notFound } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

// Fetch a single project by slug
async function getProject(slug) {
  try {
    const response = await axios.get(`${API_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0] || null;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }) {
  const project = await getProject(params.slug);
  if (!project) return { title: 'Project Not Found', description: 'No project details available' };

  return {
    title: project.title,
    description: project.project_details,
    openGraph: {
      images: project.hero_image?.url ? [`${API_URL}${project.hero_image.url}`] : [],
    },
  };
}

// Pre-generate static pages for all projects
export async function generateStaticParams() {
  try {
    const response = await axios.get(`${API_URL}/api/projects`);
    return response.data.data.map((project) => ({ slug: project.slug }));
  } catch (error) {
    console.error('Error fetching projects for static params:', error);
    return [];
  }
}

// Component to render the project details page
export default async function ProjectDetail({ params }) {
  const project = await getProject(params.slug);
  if (!project) return notFound();

  const heroImageUrl = project.hero_image?.url ? `${API_URL}${project.hero_image.url}` : null;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Project Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-400">{project.complete_date || 'No Date'}</p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[50vh] rounded-lg overflow-hidden">
          {heroImageUrl ? (
            <Image
              src={heroImageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              No Image Available
            </div>
          )}
        </div>

        {/* Project Overview & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300">{project.project_details}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
            <p className="text-gray-300">{project.my_role}</p>
          </div>
        </div>

        {/* Technologies Used */}
        {project.Technologies && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              {project.Technologies.split(',').map((tech, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Project Gallery */}
        {project.Gallery?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.Gallery.map((image, index) => {
                const imageUrl = image?.url ? `${API_URL}${image.url}` : null;
                return (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        No Image Available
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </section>
  );
}
