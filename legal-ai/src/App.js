import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Chatbot from './components/chatbot';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = React.useState("home");

  return (
    <div className="relative bg-primary  overflow-y-auto">
      <SpaceBackground />
      <div className='px-3 py-6 min-h-screen'>
        <Header setActiveSection={setActiveSection} />
        {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
        {activeSection === "about" && <About />}
        {activeSection === "chatbot" && <Chatbot />}
        {activeSection === "contact" && <Contact setActiveSection={setActiveSection}/>}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
