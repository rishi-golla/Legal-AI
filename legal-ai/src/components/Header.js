import React, { useEffect, useState } from 'react';

const Header = ({ setActiveSection }) => {
  const [hidden, setHidden] = useState(false); // Initially set to false to show the navbar
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > lastScrollY) {
      setHidden(true); // Scrolling down
    } else {
      setHidden(false); // Scrolling up
    }
    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`bg-black bg-opacity-50 shadow-md fixed w-full top-0 left-0 z-10 flex justify-between items-center px-6 py-4 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="flex items-center space-x-3">
        <img
          src="https://cdn.discordapp.com/attachments/1286831898147946639/1286847170938667048/logo.png?ex=66ef6552&is=66ee13d2&hm=5a6f86b8d67930ea0c671e0edab662f06f3f61868b6431567e80f5d128c4f99e&"
          alt="logo"
          className="h-8 w-8"
        />
        <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => setActiveSection("home")}>
          LegalAI
        </h1>
      </div>
      <nav className="flex space-x-6 mx-auto">
        <button
          className="text-purple-300 hover:text-purple-400"
          onClick={() => setActiveSection("home")}
        >
          Home
        </button>
        <button
          className="text-purple-300 hover:text-purple-400"
          onClick={() => setActiveSection("about")}
        >
          About
        </button>
      </nav>
      <div className="flex items-center space-x-2 relative group" onClick={() => setActiveSection("chatbot")}>
        <span className="md:flex hidden text-purple-300 hover:text-purple-400 cursor-pointer">Start Your Chat Here -></span>
        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110">
          <img
            src="https://cdn.discordapp.com/attachments/1286831898147946639/1286847170938667048/logo.png?ex=66ef6552&is=66ee13d2&hm=5a6f86b8d67930ea0c671e0edab662f06f3f61868b6431567e80f5d128c4f99e&"
            alt="logo"
            className="rounded-full"
            style={{ width: '80%', height: '80%' }}
          />
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
      </div>
    </header>
  );
};

export default Header;
