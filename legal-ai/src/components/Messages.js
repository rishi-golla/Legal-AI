import React from 'react';

const Messages = ({ messages }) => {
  return (
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
  );
};

export default React.memo(Messages);
