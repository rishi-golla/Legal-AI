// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section className="pt-20 min-h-screen bg-primary text-textPrimary flex flex-col justify-center items-center text-center px-6 space-y-8">
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
    </section>
  );
};

export default Home;
