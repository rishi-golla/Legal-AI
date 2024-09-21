import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
import { useInView } from 'react-intersection-observer';

const Home = ({ setActiveSection }) => {
  const { ref: goalRef, inView: goalInView } = useInView({ threshold: 0.5 });
  const { ref: hackathonRef, inView: hackathonInView } = useInView({ threshold: 0.5 });

  return (
    <section className="pt-40 min-h-screen bg-primary text-textPrimary flex flex-col justify-center items-center text-center space-y-8">
      <div className='flex flex-col lg:flex-row h-auto lg:min-h-screen w-full lg:justify-center lg:items-start'>
        {/* Left Section (Image) */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='relative w-full lg:w-1/3 flex justify-center items-center p-5'
        >
          <img
            src='lawyer.png'
            alt='Lawyer'
            className='max-w-full max-h-[600px] object-contain'
          />
          <button className='hover:scale-105 duration-150 bg-[#00000080] hover:bg-purple-300 hover:text-black absolute top-5 right-5 rounded-full p-4 text-purple-300' onClick={() => setActiveSection("chatbot")}>
            Click to start!
          </button>
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
                Innovating <br /> Legal Assistance with AI
              </h2>
              <p className="text-purple-300 text-lg">
                LegalAI provides cutting-edge AI solutions to answer your legal questions quickly and accurately.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='w-full flex flex-col gap-5 justify-center'
          >
            <div className="animate-fade-in w-full p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <p className="text-purple-300 text-lg">
                Our goal is to make legal knowledge accessible, reliable, and efficient for everyone, by utilizing the latest advancements in AI technology.
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
                Join us on our mission to revolutionize the legal landscape by providing free access to high-quality legal assistance.
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
        <h2 className="text-purple-300 text-4xl font-bold mb-4">Our Goal</h2>
        <p className="text-purple-300 text-lg">
          To democratize legal information by providing AI-driven solutions, ensuring that everyone has access to accurate and timely legal assistance, regardless of their background.
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
        <h2 className="text-purple-300 text-4xl font-bold mb-4">Hackathon Details</h2>
        <p className="text-purple-300 text-lg">
          We recently participated in a 48-hour hackathon, developing an AI-powered chatbot designed to provide quick legal advice. This project showcases our commitment to leveraging technology to make legal assistance accessible.
        </p>
      </motion.div>

      <About />
    </section>
  );
};

export default Home;
