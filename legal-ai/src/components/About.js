"use client";
import React from 'react';
import Photo from './Photo';

const teamMembers = [
  { name: 'Rishi Golla', role: 'Fullstack Developer + PM', image: '../pic/' },
  { name: 'Vladislav Kondratyev', role: 'Fullstack Developer + AI + PM', image: '../pic/' },
  { name: 'Arnab Dev', role: 'Frontend Developer', image: '/arnab-t.png' },
  { name: 'Ankith Ganji', role: 'Backend Developer', image: '../pic/' },
  { name: 'Aryav Rastogi', role: 'Backend Developer', image: '../pic/' },
];

const About = () => {
  return (
    <section className=" min-h-screen bg-primary text-textPrimary flex flex-col justify-center items-center px-6">
      <div className="w-full max-w-3xl mb-10 p-6 bg-black bg-opacity-50 border border-accent rounded-lg shadow-md text-center">
        <h2 className="text-purple-300 text-4xl font-bold text-accent mb-4">About LegalAI</h2>
        <p className="text-purple-300 mb-4">
          This project is a Hackathon initiative aiming to make legal assistance more accessible and efficient using AI.
        </p>
      </div>
      <h3 className="text-purple-300 text-3xl font-semibold text-accent mb-8">Meet the Team</h3>
      <div className="flex items-center justify-center flex-wrap gap-4 w-[95%]">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center justify-center  flex-col p-4 bg-black border rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <Photo imgSrc={member.image} />
            <h4 className="text-purple-300 text-xl font-bold text-accent">{member.name}</h4>
            <p className="text-purple-300">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
