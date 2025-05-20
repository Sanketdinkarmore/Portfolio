'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CodeBracketIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

type Project = {
  title: string;
  description: string[];
  image: string;
  link: string;
  liveDemo?: string;
  tech: string[];
  icon: typeof CodeBracketIcon | typeof RocketLaunchIcon;
  color: string;
};

const projects: Project[] = [
  {
    title: "NASA APOD Dashboard",
    description: [
      "A React dashboard that displays NASA's Astronomy Picture of the Day.",
      "Features include date selection, image details, and responsive design."
    ],
    image: "/projects/nasa-apod.png",
    tech: ["React.js", "Tailwind CSS", "NASA API", "GitHub"],
    link: "https://github.com/Sanketdinkarmore/Nasa-apod-react-dashboard.git",
    icon: CodeBracketIcon,
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Pump Up Bro",
    description: [
      "A fitness tracking application for workout enthusiasts.",
      "Features include exercise tracking, progress monitoring, and workout history."
    ],
    image: "/projects/pump-up-bro.png",
    tech: ["React.js", "Tailwind CSS", "LocalStorage", "GitHub"],
    link: "https://github.com/Sanketdinkarmore/Gym-app.git",
    icon: CodeBracketIcon,
    color: "from-green-500 to-blue-500"
  },
  {
    title: "Student Management System",
    description: [
      "A full-stack application for managing student records, courses, and grades.",
      "Features include student registration, course management, and grade tracking."
    ],
    image: "/projects/sms.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/RayhaanHowlader/Student-Management-System.git",
    icon: CodeBracketIcon,
    color: "from-orange-500 to-pink-500"
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Here are some of my recent projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.liveDemo && (
                        <Link
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                          title="Live Demo"
                        >
                          <RocketLaunchIcon className="w-5 h-5" />
                        </Link>
                      )}
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                        title="View Code"
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {project.description.map((desc: string, i: number) => (
                        <p key={i} className="text-gray-300 text-sm">
                          {desc}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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