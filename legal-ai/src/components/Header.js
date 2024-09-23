import React, { useEffect, useState } from 'react';
import translations from '../translations';

const Header = ({ setActiveSection, language, setLanguage }) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > lastScrollY) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <header className={`bg-black bg-opacity-50 shadow-md fixed w-full top-0 left-0 z-10 flex justify-between items-center px-6 py-4 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="flex items-center space-x-3" onClick={() => setActiveSection("home")}>
        <img
          src="logo.png"
          alt="logo"
          className="h-8 w-8"
        />
        <h1 className="md:flex hidden text-2xl font-bold text-white cursor-pointer">
          {translations[language].legalAI}
        </h1>
      </div>
      <nav className="md:flex hidden space-x-6 mx-auto">
        <button
          className="text-purple-300 hover:opacity-80 duration-300 "
          onClick={() => setActiveSection("home")}
        >
          {translations[language].home}
        </button>
        <button
          className="text-purple-300 hover:opacity-80 duration-300 "
          onClick={() => setActiveSection("about")}
        >

        
          {translations[language].about}
        </button>
        {/* <button
          className="text-purple-300 hover:opacity-80 duration-300 "
          onClick={() => setActiveSection("experience")}
        >
          {translations[language].experience}
        </button> */}
        
        <button
          className="text-purple-300 hover:opacity-80 duration-300 "
          onClick={() => setActiveSection("Template")}
        >
          Document Templates
        </button>
      </nav>
      <div className="flex items-center space-x-2">
        <button
          className='hover:opacity-80 duration-300  bg-gradient-to-r from-purple-800 to-purple-500 text-purple-300 rounded-lg py-2 px-4'
          onClick={() => setActiveSection("chatbot")}
        >
          {translations[language].chatNow}
        </button>
        <button
          className='hover:opacity-80 duration-300 bg-gradient-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent text-purple-300 border-2 border-purple-300 rounded-lg py-2 px-4'
          onClick={() => setActiveSection("contact")}
        >
          {translations[language].contactUs}
        </button>
        <button
          className=" hover:opacity-80 duration-300 translation ml-4 text-purple-300 border-transparent border-b-2 hover:border-purple-300"
          onClick={toggleLanguage}
        >
          {language === 'en' ? 'Español' : 'English'}
        </button>




      </div>
    </header>
  );
};

export default Header;
