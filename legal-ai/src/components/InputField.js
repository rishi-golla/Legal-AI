import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const InputField = ({ input, onInputChange, onSend }) => {
  return (
    <form onSubmit={onSend} className="mt-4 flex w-full justify-center items-center">
      <div className='md:w-[700px] w-full rounded-full border-[4px] justify-between flex'>
        <input
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Type your message..."
          className=" border-none outline-none bg-transparent pl-4 w-full text-white"
        />
        <button type="submit" className="ml-2 bg-purple-500 text-white p-2 rounded-full">
          <FaArrowUp />
        </button>
      </div>
      
    </form>
  );
};

export default React.memo(InputField);
