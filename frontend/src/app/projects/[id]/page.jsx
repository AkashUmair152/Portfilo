// app/projects/[id]/page.jsx

import Link from 'next/link';
import Footer from '@/components/Footer';

const ProjectDetail = ({ params }) => {
  const projectId = parseInt(params.id, 10);

  // Simulate fetching project data based on the ID
  const project = {
    id: projectId,
    title: `Project ${projectId}`,
    date: `2023-${String(projectId).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    completionDate: `2023-${String(projectId + 1).padStart(2, '0')}-15`,
    image: `https://picsum.photos/seed/${projectId}/1920/1080`, // Full-width image
    description: `This is the detailed description for Project ${projectId}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    overview: `This is the overall overview of Project ${projectId}. It includes key highlights and objectives.`,
    myRole: `In this project, I was responsible for designing and developing the frontend using Next.js and Tailwind CSS.`,
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    gallery: [
      `https://picsum.photos/seed/${projectId + 1}/600/400`,
      `https://picsum.photos/seed/${projectId + 2}/600/400`,
      `https://picsum.photos/seed/${projectId + 3}/600/400`,
    ],
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Project Name and Date */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div className="text-right">
            <p className="text-lg text-gray-400">{project.date}</p>
          </div>
        </div>

        {/* Image Section: Full-width Image */}
        <div className="mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Project Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300">{project.overview}</p>
          </div>
        </div>

        {/* My Role Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
          </div>
          <div>
            <p className="text-gray-300">{project.myRole}</p>
          </div>
        </div>

        {/* Technologies Used Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          </div>
          <div>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
};

export default ProjectDetail;