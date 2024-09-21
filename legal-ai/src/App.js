// src/App.js
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
    <div className="relative bg-primary min-h-screen overflow-hidden">
      <SpaceBackground />
      <Header setActiveSection={setActiveSection} />
      {activeSection === "home" && <Home />}
      {activeSection === "about" && <About />}
      {activeSection === "chatbot" && <Chatbot />}
      <Footer />
    </div>
  );
}

export default App;
