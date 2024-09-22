"use client"; 
import translations from '../translations'; 

const ExperienceComponent = ({ language }) => {

  return (
    <div className='w-full'>
      <h2 className="text-purple-300 text-4xl font-bold mb-4">{translations[language].goalHead}</h2>
      <p className="text-purple-300 text-lg">
        Our Experience at the AWS Hackathon.
      </p>
    </div>
  );
};

export default ExperienceComponent;
