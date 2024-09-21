// src/components/Header.js
import React from 'react';

const Header = ({ setActiveSection }) => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-10 flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={() => setActiveSection("home")}>
        LegalBot
      </h1>
      <nav className="flex space-x-6">
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={() => setActiveSection("home")}
        >
          Home
        </button>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={() => setActiveSection("about")}
        >
          About
        </button>
        <div
          className="relative group"
          onClick={() => setActiveSection("chatbot")}
        >
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110">
            🤖
          </div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
