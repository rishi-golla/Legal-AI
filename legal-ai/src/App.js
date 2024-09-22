import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Chatbot from './components/chatbot';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';
import Contact from './components/Contact';
import Questions from './components/Questions';

function App() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [userInfo, setUserInfo] = React.useState(''); // State to store the sentence

  const handleFormSubmit = (sentence) => {
    setUserInfo(sentence); 
    setActiveSection("chatbot");
    console.log(sentence);
  };
  return (
    <div className="relative bg-primary  overflow-y-auto">
      <SpaceBackground />
      <div className='px-3 py-6 min-h-screen'>
        <Header setActiveSection={setActiveSection} />
        <div className="pt-[100px]">
          {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
          {activeSection === "about" && <About />}
          {activeSection === "chatbot" && <Chatbot userInfo={userInfo} />}
          {activeSection === "contact" && <Contact setActiveSection={setActiveSection} />}
          {activeSection === "questions" && <Questions isOpen={true} onClose={() => setActiveSection("home")} handleSubmit={handleFormSubmit} />}
        </div>
        
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
