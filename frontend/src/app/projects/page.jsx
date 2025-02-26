import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

async function getProjects() {
  try {
    const response = await axios.get(`${API_URL}/api/projects?populate=*`);
    console.log("Projects Data:", response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            // Access project attributes directly from the project object
            const imageUrl = project.hero_image?.url
              ? `${API_URL}${project.hero_image.url}`
              : null;

            return (
              <Link 
                key={project.id} 
                href={`/projects/${project.slug}`} 
                passHref
              >
                <div className="group relative hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                  <div className="min-h-[80vh] overflow-hidden rounded-lg bg-gray-800 shadow-lg relative">
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={project.title || 'Untitled'}
                        fill
                        className="object-cover object-center absolute inset-0"
                        priority
                      />
                    )}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <h3 className="text-[2vw] opacity-[.7] font-semibold">
                      {project.title || 'Untitled'}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {project.complete_date || 'No Date'}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg shadow-xl" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
}