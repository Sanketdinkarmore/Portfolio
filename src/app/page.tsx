'use client';

import { motion } from 'framer-motion';
import { SocialLinks } from './components/SocialLinks';
import { Section } from './components/Section';
import Link from 'next/link';
import About from './about/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Contact from './contact/page';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-16">
      <Section id="hero" className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Sanket More
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Developer | Creating elegant, functional web experiences
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/about"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <SocialLinks />
          </motion.div>

          <motion.button
            className="mt-16 text-gray-500 hover:text-gray-400 transition-colors duration-200"
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓ Scroll to explore
          </motion.button>
        </motion.div>
      </Section>

      <Section id="about" className="bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          {<About/>}
        </div>
      </Section>

      <Section id="skills" className="bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          {<Skills/>}
        </div>
      </Section>

      <Section id="projects" className="bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          {<Projects/>}
        </div>
      </Section>

      <Section id="contact" className="bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          {<Contact/>}
        </div>
      </Section>
    </main>
  );
}
