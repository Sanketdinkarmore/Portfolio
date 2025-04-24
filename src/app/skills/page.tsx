'use client'
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const skills = {
  languages: [
    { name: 'JavaScript (ES6+)', level: 98, icon: '📜' },
    { name: 'TypeScript', level: 85, icon: '🔷' },
    { name: 'C++', level: 70, icon: '⚡' },
    { name: 'Java', level: 80, icon: '☕' },
    { name: 'SQL', level: 85, icon: '📊' },
    { name: 'Python', level: 88, icon: '🐍' },
  ],
  frameworks: [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '▲' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Express.js', level: 80, icon: '🚂' },
    { name: 'Tailwind CSS', level: 90, icon: '🎨' },
  ],
  database: [
    { name: 'MongoDB', level: 85, icon: '🍃' },
    { name: 'Mongoose', level: 80, icon: '🔋' },
    { name: 'MySQL', level: 80, icon: '🐬' },
    { name: 'PostgreSQL', level: 75, icon: '🐘' },
  ],
  tools: [
    { name: 'Git', level: 90, icon: '📦' },
    { name: 'GitHub', level: 85, icon: '🐙' },
    { name: 'Postman', level: 85, icon: '📬' },
    { name: 'VS Code', level: 90, icon: '💻' },
    { name: 'Netlify', level: 80, icon: '🌐' },
    { name: 'Vercel', level: 85, icon: '▲' },
  ],
  concepts: [
    { name: 'REST APIs', level: 90, icon: '🔌' },
    { name: 'JWT Auth', level: 85, icon: '🔑' },
    { name: 'Responsive Design', level: 90, icon: '📱' },
    { name: 'Debugging', level: 85, icon: '🐛' },
  ],
};

const categoryIcons = {
  languages: CodeBracketIcon,
  frameworks: ServerIcon,
  database: CircleStackIcon,
  tools: WrenchScrewdriverIcon,
  concepts: CodeBracketIcon,
};

export default function Skills() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
            {Object.entries(skills).map(([category, items]) => {
              const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <CategoryIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white ml-3 capitalize">
                      {category}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {items.map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{skill.icon}</span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-blue-600 dark:bg-blue-400"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
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