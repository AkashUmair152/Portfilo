import Link from 'next/link';
import Footer from '@/components/Footer';
import React from 'react';

const Projects = () => {
  const projects = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    date: `2023-${String(i + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    image: `https://picsum.photos/seed/${i + 1}/600/800`
  }));

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} passHref>
              <div className="group relative hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                {/* Image Container */}
                <div className="min-h-[80vh] overflow-hidden rounded-lg bg-gray-800 shadow-lg relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center absolute inset-0"
                  />
                </div>
                {/* Title and Date Container */}
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="text-[2vw] opacity-[.7] font-semibold">{project.title}</h3>
                  <p className="text-gray-400 text-lg">{project.date}</p>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg shadow-xl" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Projects;