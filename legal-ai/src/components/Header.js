// src/components/Header.js
import React from 'react';

const Header = ({ setActiveSection }) => {
  return (
    <header className="bg-gray-800 shadow-md fixed w-full top-0 left-0 z-10 flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold text-purple-300 cursor-pointer" onClick={() => setActiveSection("home")}>
        LegalBot
      </h1>
      <nav className="flex space-x-6">
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
        <div
          className="relative group"
          onClick={() => setActiveSection("chatbot")}
        >
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
      </nav>
    </header>
  );
};

export default Header;