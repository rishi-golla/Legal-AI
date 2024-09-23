import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import About from './About';
import { useInView } from 'react-intersection-observer';
import translations from '../translations'; // Import translations
import Uses from './Uses';
import Pricing from './Pricing';
import { FaLink } from 'react-icons/fa';

const Home = ({ setActiveSection, language }) => {
  const { ref: goalRef, inView: goalInView } = useInView({ threshold: 0.5 });
  const { ref: hackathonRef, inView: hackathonInView } = useInView({ threshold: 0.5 });

  // Create the text you want to animate
  // const text = translations[language].clickForChat;
  // const [displayedText, setDisplayedText] = useState('');

  // useEffect(() => {
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     setDisplayedText((prev) => prev + text[index]);
  //     index++;
  //     if (index === text.length) {
  //       clearInterval(interval);
  //     }
  //   }, 100); // Adjust the speed (100ms per letter)

  //   return () => clearInterval(interval);
  // }, [text]);

  return (
    <section className="min-h-screen bg-primary text-textPrimary flex flex-col justify-center items-center text-center space-y-8 w-full">

      <div className='flex flex-col lg:flex-row h-auto w-full lg:justify-center lg:items-start'>
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
          <div className='hover:scale-105 duration-150 text-white bg-[#00000080] hover:bg-purple-300 hover:text-black absolute top-0 right-0 rounded-full md:p-4 py-2 px-3 md:text-[16px] text-[14px] cursor-pointer' onClick={() => setActiveSection("questions")}>
            {translations[language].clickForChat}
          </div> 

          <div className='sm:flex hidden duration-150 bg-[#00000080] hover:text-black absolute top-[60px] right-[145px] rounded-full p-4 text-purple-300'>
          </div>
          <div className='sm:flex hidden duration-150 bg-[#00000080] hover:text-black absolute top-[90px] right-[180px] rounded-full p-2 text-purple-300'>
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
              <p className="text-white text-lg">
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
            <div onClick={() => setActiveSection("Template")} className="w-full flex justify-center items-center p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {/* <p className="text-white text-lg">
                {translations[language].goal}
              </p> */}
              <button className='hover:text-purple-300  duration-300 flex flex-row  gap-2 justify-between items-center text-white md:text-[50px] text-[20px] font-black' >
                Documentation Templates <FaLink/>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='w-full flex flex-col gap-5 justify-center'
          >
            <div onClick={() => setActiveSection("documentSum")} className="w-full flex justify-center items-center p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {/* <p className="text-white text-lg">
                {translations[language].join}
              </p> */}

              <button className='hover:text-purple-300  duration-300 flex flex-row  gap-2 justify-between items-center text-white  md:text-[50px] text-[20px] font-black'>
                Documentation Summarizer <FaLink />
              </button>
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
        <p className="text-white text-lg">
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
        <p className="text-white text-lg">
          {translations[language].detailsDescription}
        </p>
      </motion.div>

      <About language={language} />
      <Uses language={language} />
      <Pricing/>
      <div  className='bg-white w-full text-center text-lg-start text-muted'>
        {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='mb-2 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <a className='text-center me-4 flex items-center justify-center w-full  ' href="https://www.instagram.com/legal.ai_" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="w-6 h-6 hover:opacity-75" />
          </a>
            
        </section> */}

        <section className=' bg-white w-full mt-16'>
          <div className='bg-white w-full text-center text-md-start mt-5'>
            <div className='flex flex-row mt-3'>
              <div className=' flex flex-col mx-auto mb-4'>
                <p className='text-uppercase md:text-[50px] text-[30px] font-bold md:mb-4 mb-2'>
                  LegalAI
                </p>
                <p className='text-[14px]'>
                  Innovating Legal Assistance with AI
                </p>
              </div>

              {/* <div className='flex flex-col mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Angular
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    React
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Vue
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Laravel
                  </a>
                </p>
              </div>

              <div className='flex flex-col mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </div> */}

              <div className='flex flex-col mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase text-[17px] font-bold mb-2'>Contact</h6>
                <p className='text-[14px]'>
                  {/* <MDBIcon icon="home" className="me-2" /> */}
                  800 W Campbell Rd, Richardson, TX
                </p>
                <p className='text-[14px]'>
                  {/* <MDBIcon icon="envelope" className="me-3" /> */}
                  awslegalai@gmail.com
                </p>
                <p className='text-[14px]'>
                  {/* <MDBIcon icon="print" className="me-3" />  */}
                  + 1 469 947 4379
                </p>
                <a className='text-center me-4 flex items-center justify-center w-full  ' href="https://www.instagram.com/legal.ai_" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="w-6 h-6 hover:opacity-75" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
