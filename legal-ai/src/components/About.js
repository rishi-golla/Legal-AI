import React from 'react';

const teamMembers = [
  { name: 'Member #1', role: 'Lead Developer', image: '../pic/' },
  { name: 'Member #2', role: 'Project Manager', image: '../pic/' },
  { name: 'Member #3', role: 'UI/UX Designer', image: '../pic/' },
  { name: 'Member #4', role: 'AI Specialist', image: '../pic/' },
  { name: 'Member #4', role: 'AI Specialist', image: '../pic/' },
];

const About = () => {
  return (
    <section className="pt-20 min-h-screen bg-primary text-textPrimary flex flex-col justify-center items-center px-6">
      <div className="w-full max-w-3xl mb-10 p-6 bg-black border border-accent rounded-lg shadow-md text-center">
        <h2 className="text-purple-300 text-4xl font-bold text-accent mb-4">About LegalAI</h2>
        <p className="text-purple-300 mb-4">
          This project is a Hackathon initiative aiming to make legal assistance more accessible and efficient using AI.
        </p>
      </div>
      
      <h3 className="text-purple-300 text-3xl font-semibold text-accent mb-8">Meet the Team</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4 bg-gray-900 border border-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h4 className="text-purple-300 text-xl font-bold text-accent">{member.name}</h4>
            <p className="text-purple-300">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
