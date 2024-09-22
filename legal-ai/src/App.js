import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Chatbot from './components/chatbot';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';
import Contact from './components/Contact';
import Questions from './components/Questions';
import Template from './components/Template';
import translations from './translations'; // Import the translations

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [userInfo, setUserInfo] = useState('');
  const [language, setLanguage] = useState('en'); // Language state

  const handleFormSubmit = (sentence) => {
    setUserInfo(sentence);
    setActiveSection("chatbot");
    console.log(sentence);
  };

  return (
    <div className="relative bg-primary overflow-y-auto">
      <SpaceBackground />
      <div className='px-3 py-6 min-h-screen'>
        <Header setActiveSection={setActiveSection} language={language} setLanguage={setLanguage} />
        <div className="pt-[100px]">
          {activeSection === "home" && <Home setActiveSection={setActiveSection} language={language} />}
          {activeSection === "about" && <About language={language} />}
          {activeSection === "chatbot" && <Chatbot userInfo={userInfo} />}
          {activeSection === "contact" && <Contact setActiveSection={setActiveSection} />}
          {activeSection === "questions" && <Questions isOpen={true} onClose={() => setActiveSection("home")} handleSubmit={handleFormSubmit} />}
          {activeSection === "Template" && <Template />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
