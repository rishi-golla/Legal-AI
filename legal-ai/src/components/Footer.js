import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-textPrimary p-5 opacity-80 fixed bottom-0 left-0 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 LegalAI. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-75" />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="w-6 h-6 hover:opacity-75" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
