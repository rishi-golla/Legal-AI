import React, { useState, useCallback, useRef, useEffect } from 'react';
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import Messages from './Messages';
import InputField from './InputField';
import { VscDebugRestart } from "react-icons/vsc";
import { FaDownload } from "react-icons/fa";

const client = new BedrockRuntimeClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "APIHERE",
    secretAccessKey: "APIHERE",
  },
});

const Chatbot = ({ userInfo }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null); // Create a ref for the end of messages

  const handleSend = useCallback(async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);

    try {
      const bodyContent = JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 2048,
        system: "You are 'LegalAI', a very knowledgeable lawyer. You are only able to answer questions related to law and legal stuff. Switch your responses and vocabulary in such a way answer to people. Answer should be in chat form. Only answer questions related to law and legal stuff." + userInfo,
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: input }
            ]
          }
        ]
      });

      const command = new InvokeModelCommand({
        modelId: "anthropic.claude-3-5-sonnet-20240620-v1:0",
        contentType: "application/json",
        accept: "application/json",
        body: bodyContent,
      });

      const response = await client.send(command);
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));

      const aiResponseText = responseBody?.content?.map(item => item.text).join(' ') || 'Invalid response from AI model';

      setMessages((prev) => [...prev, { text: aiResponseText, sender: 'bot' }]);

    } catch (error) {
      console.error('Error processing request:', error.message || 'Unknown error');
      setMessages((prev) => [
        ...prev,
        { text: `Error: ${error.message || 'Unknown error occurred'}`, sender: 'bot', isError: true },
      ]);
    }

    setInput('');
  }, [input]);

  const handleDownloadChat = () => {
    const chatContent = messages
      .map((msg) => `${msg.sender === 'user' ? 'You' : 'LegalAI'}: ${msg.text}`)
      .join('\n');
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chat.txt';
    link.click();
  };

  const handleNewConversation = () => {
    setMessages([]);
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <section className="mb-14 flex justify-center items-center w-[90vw]">
      <div className="bg-transparent shadow-lg rounded-lg w-full flex justify-center items-center flex-col">
        <div className="flex w-full items-center justify-center flex-col">
          <img src="/logo.png" alt="logo" className="h-8 w-8" />
          <p className="text-white">Mike</p>
          <p className="text-white opacity-70 text-[12px]">By Shower Champions</p>
        </div>

        <Messages messages={messages} />

        {/* Reference to scroll to the end */}
        <div ref={messagesEndRef} />

        {/* Input and Buttons Container */}
        <div className="flex items-center justify-center mt-4">
          {/* Input Field */}
          <InputField input={input} onInputChange={setInput} onSend={handleSend} />

          {/* Buttons */}
          <div className="ml-4 pt-3 justify-center items-center flex flex-row gap-2">
            <button
              onClick={handleDownloadChat}
              className="text-white bg-transparent text-[20px] rounded hover:bg-purple-500 hover:text-white transition duration-300"
            >
              <FaDownload />
            </button>
            <button
              onClick={handleNewConversation}
              className="ml-2 text-white bg-transparent text-[20px] rounded hover:bg-purple-500 hover:text-white transition duration-300"
            >
              <VscDebugRestart />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Chatbot);
