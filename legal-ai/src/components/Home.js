// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section className="pt-20 min-h-screen bg-primary text-textPrimary flex flex-col justify-center items-center text-center px-6 space-y-8">
      <div className="animate-fade-in w-full max-w-4xl p-6 bg-primary border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg">
        <h2 className="text-5xl md:text-6xl font-bold text-accent mb-4 leading-tight">
          Innovating <br /> Legal Assistance with AI
        </h2>
        <p className="text-lg">
          LegalAI provides cutting-edge AI solutions to answer your legal questions quickly and accurately.
        </p>
      </div>
      <div className="animate-slide-in w-full max-w-4xl p-6 bg-primary border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg">
        <p className="text-lg">
          Our goal is to make legal knowledge accessible, reliable, and efficient for everyone, by utilizing the latest advancements in AI technology.
        </p>
      </div>
      <div className="animate-bounce-in w-full max-w-4xl p-6 bg-primary border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg">
        <p className="text-lg">
          Join us on our mission to revolutionize the legal landscape by providing free access to high-quality legal assistance.
        </p>
      </div>
    </section>
  );
};

export default Home;
