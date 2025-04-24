'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CommandLineIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

type Project = {
  title: string;
  description: string[];
  link: string;
  liveDemo?: string; // Optional live demo link
  tech: string[];
  icon: typeof CodeBracketIcon;
  color: string;
};

const projects: Project[] = [
  {
    title: "NASA APOD React Dashboard",
    description: [
      "Developed a React.js dashboard that fetched and displayed daily images from NASA's APOD API, with support for viewing 100+ past entries based on user-selected dates.",
      "Activated insights and interactive UI, increasing user engagement by 45% based on session analytics.",
      "Tech used: React.js, Tailwind CSS, NASA Open API, GitHub."
    ],
    tech: ["React.js", "Tailwind CSS", "NASA API", "GitHub"],
    link: "https://github.com/Sanketdinkarmore/Nasa-apod-react-dashboard.git",
    liveDemo: "https://stellar-apod-vision.netlify.app/",
    icon: RocketLaunchIcon,
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Pump Up Bro",
    description: [
      "Built a comprehensive fitness app using React.js and Tailwind CSS, allowing users to create unique and monitor custom workout plans.",
      "Added features such as exercise log/rest timer that improve user interaction time by more than 40%.",
      "Tech used: React.js, Tailwind CSS, GitHub."
    ],
    tech: ["React.js", "Tailwind CSS", "LocalStorage", "GitHub"],
    link: "https://github.com/Sanketdinkarmore/Gym-app.git",
    liveDemo: "https://pumpupbro.netlify.app/",
    icon: RocketLaunchIcon,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Student-Management-System",
    description: [
      "Student registration/login system with authentication.",
      "The backend was built using Node.js, Express, and MongoDB.",
      "Added a dummy payment portal for fees payment."
    ],
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
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Content Container */}
                  <div className="relative p-6">
                    {/* Header with Links */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        {project.liveDemo && (
                          <Link
                            href={project.liveDemo}
                            target="_blank"
                            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            title="Live Demo"
                          >
                            <RocketLaunchIcon className="w-5 h-5" />
                          </Link>
                        )}
                        <Link
                          href={project.link}
                          target="_blank"
                          className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                          title="View Code"
                        >
                          <CodeBracketIcon className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 mb-6">
                      {project.description.map((desc, i) => (
                        <p key={i} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          className={`px-3 py-1 text-xs font-medium rounded-full 
                            bg-gradient-to-r ${project.color} text-white
                            shadow-sm`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
} 