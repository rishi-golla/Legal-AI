// src/components/Chatbot.js
import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);

    // Simulate a chatbot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: `You asked: "${input}". (This is a simulated response.)`, sender: 'bot' },
      ]);
    }, 1000);

    // Clear the input
    setInput('');
  };

  return (
    <section className="pt-20 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">LegalAI Chat</h2>
        <p className="text-gray-700 mb-4">
          Please interact with our chatbot below to ask your legal questions.
        </p>
        
        <div className="bg-gray-200 p-4 rounded-md h-60 overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-gray-500 italic">Send your first message, LegalAI will respond accordingly...</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'bot' ? 'text-purple-600' : 'text-white-600'}`}>
                <strong>{msg.sender === 'bot' ? 'LegalAI:' : 'You:'} </strong>
                {msg.text}
              </div>
            ))
          )}
        </div>

        <form onSubmit={handleSend} className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button type="submit" className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-md">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Chatbot;
