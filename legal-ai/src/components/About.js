"use client";
import React from 'react';
import Photo from './Photo';

const teamMembers = [
  { name: 'Rishi Golla', role: 'Fullstack Developer + PM', image: 'rishi.jpeg', linkedin: 'https://www.linkedin.com/in/rishi-golla/', instagram: 'https://www.instagram.com/rishi.golla_/?hl=en' },
  { name: 'Vladislav Kondratyev', role: 'Fullstack Developer + AI + PM', image: 'logo_vlad.png', linkedin: 'https://www.linkedin.com/in/vladislav-kondratyev/', instagram: 'https://www.instagram.com/ch1kim0n1/?hl=en'},
  { name: 'Arnab Dev', role: 'Frontend Developer', image: '/arnab-t.png', linkedin: 'https://www.linkedin.com/in/arnabdev/', instagram: 'https://www.instagram.com/arnabdev8/?hl=en' },
  { name: 'Ankith Ganji', role: 'Backend Developer', image: 'ank.PNG', linkedin: 'https://www.linkedin.com/in/ankith-ganji-34068525b/', instagram: 'https://www.instagram.com/ankith_ganji/?hl=en'},
  { name: 'Aryav Rastogi', role: 'Backend Developer', image: 'aryav.jpeg', linkedin: 'https://www.linkedin.com/in/aryavrastogi/', instagram: 'https://www.instagram.com/aryavrasto/?hl=en' },
];

const About = () => {
  return (
    <section className=" min-h-screen bg-primary text-textPrimary flex flex-col justify-center items-center px-6">
      <div className="mb-10 w-full max-w-4xl p-6 border border-accent rounded-lg transform transition duration-500 hover:scale-105 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <h2 className="text-purple-300 text-4xl font-bold text-accent mb-4">About LegalAI</h2>
        <p className="text-purple-300 mb-4">
          This project, born out of a Hackathon initiative, aims to revolutionize legal assistance by making it more accessible and efficient through the power of AI.
          </p>
      </div>
      <h3 className="text-purple-300 text-3xl font-semibold text-accent mb-8">Meet the Team</h3>
      <div className="flex items-center justify-center flex-wrap gap-4 w-[95%]">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center justify-center  flex-col p-4 bg-black border rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <Photo imgSrc={member.image} />
            <h4 className="text-purple-300 text-xl font-bold text-accent">{member.name}</h4>
            <p className="text-purple-300">{member.role}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-75" />
            </a>
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
