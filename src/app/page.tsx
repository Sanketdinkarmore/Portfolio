'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Hi, I'm <span className="text-blue-400">Sanket More</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl text-gray-300 mb-8"
              >
                Full Stack Developer | Creating elegant, functional web experiences 
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                >
                  About Me
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                >
                  View Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
  );
}
