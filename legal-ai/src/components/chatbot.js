import React, { useState, useCallback, useRef } from 'react';
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import Messages from './Messages';
import InputField from './InputField';
import { VscDebugRestart } from "react-icons/vsc";
import { FaDownload } from "react-icons/fa";
import { AiOutlineUpload, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import * as pdfjsLib from 'pdfjs-dist/webpack';

const client = new BedrockRuntimeClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "API_HERE",
    secretAccessKey: "API_HERE",
  },
});

const Chatbot = ({ userInfo }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pdfUploaded, setPdfUploaded] = useState(false);
  const [pdfText, setPdfText] = useState('');
  const [pdfFileName, setPdfFileName] = useState('');
  const abortControllerRef = useRef(null);

  // Function to handle PDF upload
  const handlePdfUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let textContent = '';

        // Extract text from each page
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const text = await page.getTextContent();
          const pageText = text.items.map((item) => item.str).join(' ');
          textContent += pageText + '\n';
        }

        setPdfText(textContent);
        setPdfUploaded(true);
        setPdfFileName(file.name);
        // Remove any alert or confirmation; we'll use a visual indicator instead
      } catch (error) {
        console.error('Error processing PDF:', error);
        alert('Failed to process PDF. Please try again.');
      }
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  // Function to remove uploaded PDF
  const handleRemovePdf = () => {
    setPdfUploaded(false);
    setPdfText('');
    setPdfFileName('');
  };

  const handleSend = useCallback(
    async (e) => {
      e.preventDefault();
      if (!input.trim() && !pdfUploaded) return;

      const userMessageText = input;

      const userMessage = { text: userMessageText, sender: 'user' };
      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setIsTyping(true);

      try {
        // Prepare the conversation history for context
        const conversation = messages.concat(userMessage).map((msg) => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: [{ type: 'text', text: msg.text }],
        }));

        // Include PDF text in the system prompt if uploaded
        let systemPrompt = `You are 'LegalAI', a knowledgeable lawyer with a friendly and approachable demeanor. You provide clear, concise, and casual explanations related to law and legal matters. Engage with users in a human-like manner without listing things out. ${userInfo}`;
        if (pdfUploaded && pdfText) {
          systemPrompt += `\n\nThe user has provided the following document for analysis:\n${pdfText}`;
        }        

        const bodyContent = JSON.stringify({
          anthropic_version: "bedrock-2023-05-31",
          max_tokens: 2048,
          system: systemPrompt,
          messages: conversation,
        });

        const command = new InvokeModelCommand({
          modelId: "anthropic.claude-3-5-sonnet-20240620-v1:0",
          contentType: "application/json",
          accept: "application/json",
          body: bodyContent,
        });

        abortControllerRef.current = new AbortController();
        const response = await client.send(command, {
          abortSignal: abortControllerRef.current.signal,
        });

        const responseBody = JSON.parse(
          new TextDecoder().decode(response.body)
        );
        const aiResponseText =
          responseBody?.content?.map((item) => item.text).join(' ') ||
          'Invalid response from AI model';

        setMessages((prev) => [...prev, { text: aiResponseText, sender: 'bot' }]);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Request was aborted');
        } else {
          console.error('Error processing request:', error.message || 'Unknown error');
          setMessages((prev) => [
            ...prev,
            {
              text: `Error: ${error.message || 'Unknown error occurred'}`,
              sender: 'bot',
              isError: true,
            },
          ]);
        }
      } finally {
        setIsTyping(false);
      }
    },
    [input, messages, userInfo, pdfUploaded, pdfText]
  );

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
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setMessages([]);
    // Do not reset PDF state here to keep the PDF uploaded until the user removes it
  };

  return (
    <section className="mb-14 flex justify-center items-center w-[90vw]">
      <div className="bg-transparent shadow-lg rounded-lg w-full flex justify-center items-center flex-col">
        <div className="flex w-full items-center justify-center flex-col">

          <img src="/logo.png" alt="logo" className="h-8 w-8" />
          <p className="text-white">Mike</p>
          <p className="text-white opacity-70 text-[12px]">By Shower Champions</p>
        </div>

        <Messages messages={messages} isTyping={isTyping} />

        {/* Input and Buttons Container */}
        <div className="flex items-center justify-center mt-4">
          {/* Input Field */}
          <InputField input={input} onInputChange={setInput} onSend={handleSend} />

          {/* Buttons */}
          <div className="ml-4 pt-3 justify-center items-center flex flex-row gap-2">
          {!pdfUploaded && (
            <>
              <label htmlFor="pdf-upload" className="cursor-pointer text-white text-[30px]">
                <AiOutlineUpload className="...styles..." />
              </label>
              <input
                id="pdf-upload"
                type="file"
                accept="application/pdf"
                onChange={handlePdfUpload}
                style={{ display: 'none' }}
              />
            </>
          )}
          {pdfUploaded && (
              <div className="flex items-center text-white ">
              <AiOutlineCheckCircle className="...styles..." />
                <span className="text-white ml-1 text-[15px] mr-2">{pdfFileName}</span>
                <button onClick={handleRemovePdf} className='text-[30px]'>
                <AiOutlineCloseCircle className="...styles..." />
              </button>
            </div>
          )}
            {/* Download Chat Button */}
            <button
              onClick={handleDownloadChat}
              className="text-white bg-transparent text-[20px] rounded hover:bg-purple-500 hover:text-white transition duration-300"
            >
              <FaDownload />
            </button>

            {/* New Conversation Button */}
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
