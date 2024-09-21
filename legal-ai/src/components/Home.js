import React from 'react';
import About from './About';

const Home = ({ setActiveSection }) => {
  return (
    <section className="pt-20 min-h-screen bg-primary text-textPrimary flex flex-col justify-center items-center text-center  space-y-8">
      <div className='flex flex-row'>
        <div className='relative w-1/3 flex items-center justify-center pt-10'>
          <img
            src='lawyer.png'
            alt='Lawyer'
            className='w-auto h-auto max-h-[600px] object-contain'
          />
          <button className='hover:scale-105 duration-150 bg-[#00000080] hover:bg-purple-300 hover:text-black absolute top-5 right-5 rounded-full p-4 text-purple-300' onClick={() => setActiveSection("chatbot")}>
            Click to start!
          </button>
          <button className='duration-150 bg-[#00000080]  hover:text-black absolute top-[50px] right-[145px] rounded-full p-4 text-purple-300'>
          </button>
          <button className='duration-150 bg-[#00000080]  hover:text-black absolute top-[80px] right-[180px] rounded-full p-2 text-purple-300'>
          </button>
        </div>
        <div className='w-2/3 flex flex-col gap-5 justify-center'>
          <div className="animate-fade-in w-full max-w-4xl p-6 bg-primary border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg">
            <h2 className="text-purple-300 text-5xl md:text-6xl font-bold text-accent mb-4 leading-tight">
              Innovating <br /> Legal Assistance with AI
            </h2>
            <p className="text-purple-300 text-lg">
              LegalAI provides cutting-edge AI solutions to answer your legal questions quickly and accurately.
            </p>
          </div>
          <div className="w-full max-w-4xl p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <p className="text-purple-300 text-lg">
              Our goal is to make legal knowledge accessible, reliable, and efficient for everyone, by utilizing the latest advancements in AI technology.
            </p>
          </div>
          <div className="w-full max-w-4xl p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <p className="text-purple-300 text-lg">
              Join us on our mission to revolutionize the legal landscape by providing free access to high-quality legal assistance.
            </p>
          </div>
        </div>
      </div>

      
      {/* New "Our Goal" box */}
      <div className="w-full max-w-4xl p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <h2 className="text-purple-300 text-4xl font-bold mb-4">Our Goal</h2>
        <p className="text-purple-300 text-lg">
          To democratize legal information by providing AI-driven solutions, ensuring that everyone has access to accurate and timely legal assistance, regardless of their background.
        </p>
      </div>
      {/* New "Hackathon Details" box */}
      <div className="w-full max-w-4xl p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <h2 className="text-purple-300 text-4xl font-bold mb-4">Hackathon Details</h2>
        <p className="text-purple-300 text-lg">
          We recently participated in a 48-hour hackathon, developing an AI-powered chatbot designed to provide quick legal advice. This project showcases our commitment to leveraging technology to make legal assistance accessible.
        </p>
      </div>
      <About/>
    </section>
  );
};

export default Home;
