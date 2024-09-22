import React, { useState, useCallback } from 'react';
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import Messages from './Messages';
import InputField from './InputField';

const client = new BedrockRuntimeClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "APIHERE",
    secretAccessKey: "APIHERE",
  },
});

const Chatbot = ({userInfo}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = useCallback(async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
  
    try {
      const bodyContent = JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 2048,
        system:"You are 'LegalAI', a very knowledgeable lawyer. You are only able to answer questions related to law and legal stuff. Switch your responses and vocabulary in such a way answer to people. Answer should be in chat form. Only answer questions related to law and legal stuff." + userInfo,
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
  

  return (
    <section className="pt-20 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">LegalAI Chat</h2>
        <p className="text-gray-700 mb-4">Please interact with our chatbot below to ask your legal questions.</p>
        
        <Messages messages={messages} />
        
        <InputField 
          input={input} 
          onInputChange={setInput} 
          onSend={handleSend} 
        />
      </div>
    </section>
  );
};

export default React.memo(Chatbot);
