'use client';

import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const socialLinks = [
  'https://github.com/Sanketdinkarmore',
  'https://www.linkedin.com/in/sanket-more-654a1a301/',
  'https://x.com/SanketMore_00',
];

export function SocialLinks() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4"
    >
      {socialLinks.map((url) => (
        <motion.div
          key={url}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <SocialIcon
            url={url}
            className="hover:opacity-80 transition-opacity"
            target="_blank"
            fgColor="currentColor"
            bgColor="transparent"
          />
        </motion.div>
      ))}
    </motion.div>
  );
} 