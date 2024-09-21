import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Chatbot from './components/chatbot';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';

function App() {
  const [activeSection, setActiveSection] = React.useState("home");

  return (
    <div className="relative bg-primary min-h-screen overflow-y-auto">
      <SpaceBackground />
      <div className='px-3 py-6'>
        <Header setActiveSection={setActiveSection} />
        {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
        {activeSection === "about" && <About />}
        {activeSection === "chatbot" && <Chatbot />}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
