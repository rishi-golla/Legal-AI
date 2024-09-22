"use client"; // If using Next.js or similar

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Ensure you have framer-motion installed
import Photo from './Photo';
import translations from '../translations'; 

const ExperienceComponent = ({ language }) => {
  const goalRef = useRef(null);
  const [goalInView, setGoalInView] = useState(false);

  // Use effect to handle visibility
  useEffect(() => {
    const handleScroll = () => {
      const rect = goalRef.current.getBoundingClientRect();
      setGoalInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      ref={goalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: goalInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <h2 className="text-purple-300 text-4xl font-bold mb-4">{translations[language].goalHead}</h2>
      <p className="text-purple-300 text-lg">
        Our Experience at the AWS Hackathon.
      </p>
      {/* Include the Photo component if needed */}
      <Photo />
    </motion.div>
  );
};

export default ExperienceComponent;
