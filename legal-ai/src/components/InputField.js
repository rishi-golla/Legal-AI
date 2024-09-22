import React from 'react';

const InputField = ({ input, onInputChange, onSend }) => {
  return (
    <form onSubmit={onSend} className="mt-4 flex">
      <input
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-md">
        Send
      </button>
    </form>
  );
};

export default React.memo(InputField);
