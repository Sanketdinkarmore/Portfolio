'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    demoLink: 'https://ecommerce-demo.vercel.app',
    image: '/project1.jpg',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
    githubLink: 'https://github.com/yourusername/task-manager',
    demoLink: 'https://task-manager-demo.vercel.app',
    image: '/project2.jpg',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing my projects and skills with a clean, responsive design.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/yourusername/portfolio',
    demoLink: 'https://portfolio-demo.vercel.app',
    image: '/project3.jpg',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Some of my recent work and personal projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 