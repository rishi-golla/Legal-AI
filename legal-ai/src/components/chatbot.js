import React from 'react';

const Chatbot = () => {
  return (
    <section className="pt-20 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">LegalAI Chat</h2>
        <p className="text-gray-700 mb-4">
          Please interact with our chatbot below to ask your legal questions.
        </p>
        {/* Placeholder for chatbot functionality */}
        <div className="bg-gray-200 p-4 rounded-md">
          <p className="text-gray-500 italic">Chatbot coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
