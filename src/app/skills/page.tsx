'use client'
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 70 },
  ],
  database: [
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MySQL', level: 70 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'GitHub', level: 85 },
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 80 },
    { name: 'Docker', level: 75 },
  ],
};

export default function Skills() {
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Skills & Expertise</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                  {category}
                </h2>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-blue-600 h-2.5 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 