import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import About from './About';
import { useInView } from 'react-intersection-observer';
import translations from '../translations'; // Import translations

const Home = ({ setActiveSection, language }) => {
  const { ref: goalRef, inView: goalInView } = useInView({ threshold: 0.5 });
  const { ref: hackathonRef, inView: hackathonInView } = useInView({ threshold: 0.5 });

  // Create the text you want to animate
  const text = translations[language].clickForChat;
  const [displayedText, setDisplayedText] = useState('');

  // Typing effect logic
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust the speed (100ms per letter)

    return () => clearInterval(interval);
  }, [text]);

  return (
    <section className=" min-h-screen bg-primary text-textPrimary flex flex-col justify-center items-center text-center space-y-8">

      <div className='flex flex-col lg:flex-row h-auto lg:min-h-screen w-full lg:justify-center lg:items-start'>
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='left relative lg:w-1/3 w-full flex items-center justify-center pt-10'
        >
          <img
            src='lawyer.png'
            alt='Lawyer'
            className='w-auto h-auto max-h-[600px] object-contain cursor-pointer hover:scale-110 duration-150'
            onClick={() => setActiveSection("questions")}
          />

          {/* Motion div for the typewriter effect */}
          {/* <motion.div
            className='hover:scale-105 duration-150 bg-[#00000080] hover:bg-purple-300 hover:text-black absolute top-0 right-0 rounded-full md:p-4 py-2 px-3 md:text-[16px] text-[14px] text-purple-300'
            onClick={() => setActiveSection("questions")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {displayedText}
          </motion.div> */}
          <div className='hover:scale-105 duration-150 bg-[#00000080] hover:bg-purple-300 hover:text-black absolute top-0 right-0 rounded-full md:p-4 py-2 px-3 md:text-[16px] text-[14px] text-purple-300'>
            {displayedText}
          </div> 

          <div className='duration-150 bg-[#00000080] hover:text-black absolute top-[60px] right-[145px] rounded-full p-4 text-purple-300'>
          </div>
          <div className='duration-150 bg-[#00000080] hover:text-black absolute top-[90px] right-[180px] rounded-full p-2 text-purple-300'>
          </div>
        </motion.div>

        <div className='flex flex-col gap-5 w-full lg:w-2/3 p-5'>
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='w-full flex flex-col gap-5 justify-center'
          >
            <div className="animate-fade-in w-full p-6 bg-primary border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg">
              <h2 className="text-purple-300 text-4xl md:text-5xl font-bold text-accent mb-4 leading-tight">
                {translations[language].innovatingLegal} 
              </h2>
              <p className="text-purple-300 text-lg">
                {translations[language].legalGoal}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='w-full flex flex-col gap-5 justify-center'
          >
            <div className="w-full p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <p className="text-purple-300 text-lg">
                {translations[language].goal}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='w-full flex flex-col gap-5 justify-center'
          >
            <div className="w-full p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <p className="text-purple-300 text-lg">
                {translations[language].join}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

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
          {translations[language].goalDescription}
        </p>
      </motion.div>

      <motion.div
        ref={hackathonRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: hackathonInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <h2 className="text-purple-300 text-4xl font-bold mb-4">{translations[language].detailsHead}</h2>
        <p className="text-purple-300 text-lg">
          {translations[language].detailsDescription}
        </p>
      </motion.div>

      <About language={language} />
    </section>
  );
};

export default Home;
