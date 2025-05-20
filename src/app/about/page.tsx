'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { MouseEvent } from 'react';
import { ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

function AnimatedCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 p-1"
    >
      <div 
        className="absolute inset-0 w-full h-full rounded-2xl bg-gray-900"
        style={{
          transform: "translateZ(-50px)",
          transformStyle: "preserve-3d",
        }}
      />
      <div className="w-full h-full relative rounded-xl overflow-hidden bg-gray-900">
        <Image
          src="/Profile_image.jpg" // Replace with your image path
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-2xl font-bold mb-2">John Doe</h2>
          <p className="text-gray-300">Full Stack Developer</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const skills = [
    'Full Stack Development',
    'UI/UX Design',
    'Cloud Architecture',
    'DevOps',
    'Agile Methodologies',
  ];

  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Ratnamace IT Solutions',
      period: 'Sept 2024 - Feb 2025',
      description: [
        'Developed and maintained responsive web interfaces using React.js HTML/CSS and Javascript, resulting in 35% improvement in user load speed and 25% increase in user engagement.',
        'Contributed to the redesign and optimization of both the company website and a client project, improving the UI/UX and reducing the bounce rate by 20%.'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Agrawal Packers and Movers Ltd',
      period: 'Feb 2025 - Present',
      description: [
        'Developed and maintained responsive web interfaces using React.js HTML/CSS and Javascript, resulting in 35% improvement in user load speed and 25% increase in user engagement.',
        'Contributed to the redesign and optimization of both the company website and a client project, improving the UI/UX and reducing the bounce rate by 20%.'
      ]
    }
    // You can add your second experience here
  ];

  const resumeHighlights = [
    'Over 2 years of experience in full-stack development',
    'Led multiple successful project deployments',
    'Strong background in modern web technologies',
    'Excellent problem-solving and communication skills',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile and About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Animated Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] perspective-1000"
          >
            <AnimatedCard />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-4">About Me</h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a passionate Full Stack Developer with over 5 years of experience in creating
                elegant, efficient, and user-friendly web applications. My journey in tech started
                with a curiosity about how things work on the internet, and it has evolved into
                a fulfilling career building digital solutions that make a difference.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Core Competencies</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 p-4 rounded-lg"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/50 rounded-2xl p-8 mb-20"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Resume</h2>
              <p className="text-gray-300">Download my resume or view my experience below</p>
            </div>
            <motion.a
              href="/Sanket_more resume (2).pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
              Download Resume
            </motion.a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Resume Highlights */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <DocumentTextIcon className="w-6 h-6 mr-2" />
                Highlights
              </h3>
              <ul className="space-y-3">
                {resumeHighlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/50 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                    <p className="text-gray-300 mt-2">{exp.description.join('\n')}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 