"use client";
import React from 'react';
import Photo from './Photo';
import translations from '../translations'; 

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
      </motion.div>
