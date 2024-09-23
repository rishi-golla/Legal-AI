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
import ExperienceComponent from './components/Experience';
import ChatbotButton from './components/ChatbotButton';
import DocumentSum from './components/DocumentSum';

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
    <div className="relative bg-primary overflow-y-auto w-full">
      <SpaceBackground />
      <ChatbotButton setActiveSection={setActiveSection} activeSection={activeSection}/>
      <div className=' pt-6 min-h-screen w-full'>
        <Header setActiveSection={setActiveSection} language={language} setLanguage={setLanguage} />
        <div className="pt-[100px] w-full flex flex-row justify-center">
          {activeSection === "home" && <Home setActiveSection={setActiveSection} language={language} />}
          {activeSection === "about" && <About language={language} />}
          {activeSection === "chatbot" && <Chatbot userInfo={userInfo} />}
          {activeSection === "contact" && <Contact setActiveSection={setActiveSection} />}
          {activeSection === "questions" && <Questions isOpen={true} onClose={() => setActiveSection("home")} handleSubmit={handleFormSubmit} />}
          {activeSection === "Template" && <Template />}
          {activeSection === "documentSum" && <DocumentSum />}
          {activeSection === "experience" && <ExperienceComponent language={language} />}
        </div>
        <Footer />
        
      </div>
      
    </div>
  );
}

export default App;
