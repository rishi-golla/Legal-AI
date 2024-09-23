import React, { useState, useCallback, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';
import { AiOutlineUpload, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";

// Initialize the BedrockRuntimeClient
const client = new BedrockRuntimeClient({
    region: "us-east-1",
    credentials: {
      accessKeyId: "API_HERE",
      secretAccessKey: "API_HERE",
    },
  });

const DocumentSum = () => {
  const [pdfUploaded, setPdfUploaded] = useState(false);
  const [pdfText, setPdfText] = useState('');
  const [pdfFileName, setPdfFileName] = useState('');
  const [summary, setSummary] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isSummarizing, setIsSummarizing] = useState(false);

  const abortControllerRef = useRef(null);

  // Function to handle PDF upload
  const handlePdfUpload = async (file) => {
    if (file && file.type === 'application/pdf') {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let textContent = '';

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const text = await page.getTextContent();
          const pageText = text.items.map((item) => item.str).join(' ');
          textContent += pageText + '\n';
        }

        setPdfText(textContent);
        setPdfUploaded(true);
        setPdfFileName(file.name);

        // Summarize the document using Claude AI
        await summarizeDocument(textContent);
      } catch (error) {
        console.error('Error processing PDF:', error);
        alert('Failed to process PDF. Please try again.');
      }
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const summarizeDocument = async (documentText) => {
    setIsSummarizing(true);
  
    try {
      const systemPrompt = `You are 'LegalAI', a knowledgeable lawyer with a friendly and approachable demeanor. You provide clear, concise, and casual explanations related to law and legal matters. Summarize the following document.`;
  
      // Include the document text as a message from the user
      const conversation = [
        {
          role: 'user',
          content: [{ type: 'text', text: documentText }],
        },
      ];
  
      const bodyContent = JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 4000,
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
  
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));
      console.log('Response Body:', responseBody); // Add this line to inspect the response
  
      // Attempt to extract the assistant's reply
      let aiResponseText = '';
  
      if (responseBody?.completion) {
        aiResponseText = responseBody.completion;
      } else if (responseBody?.result) {
        aiResponseText = responseBody.result;
      } else if (responseBody?.content) {
        aiResponseText = responseBody.content.map((item) => item.text).join(' ');
      } else if (responseBody?.errors) {
        aiResponseText = `Error from AI model: ${responseBody.errors.map(e => e.message).join(', ')}`;
      } else {
        aiResponseText = 'Unable to summarize the document.';
      }
  
      setSummary(aiResponseText);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Request was aborted');
      } else {
        console.error('Error processing request:', error.message || 'Unknown error');
        setSummary(`Error: ${error.message || 'Unknown error occurred'}`);
      }
    } finally {
      setIsSummarizing(false);
    }
  };
  

  // Drag and drop event handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    handlePdfUpload(file);
  };

  const handleRemovePdf = () => {
    setPdfUploaded(false);
    setPdfText('');
    setPdfFileName('');
    setSummary('');
  };

  return (
    <div
      className={`flex items-center justify-center w-screen h-screen text-white ${isDragging ? 'bg-gray-800 bg-opacity-60' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center w-[80%] h-[60%] border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-900">
        {!pdfUploaded ? (
          <div className="flex flex-col items-center justify-center h-full">
            <label htmlFor="pdf-upload" className="cursor-pointer flex flex-col items-center">
              <AiOutlineUpload className={`text-[60px] ${isDragging ? 'text-purple-500 animate-bounce' : ''}`} />
              <span className="text-center mt-2">Drag and drop a PDF here or click to upload</span>
            </label>
            <input
              id="pdf-upload"
              type="file"
              accept="application/pdf"
              onChange={(e) => handlePdfUpload(e.target.files[0])}
              style={{ display: 'none' }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <AiOutlineCheckCircle className="text-green-500" />
              <span className="ml-2">{pdfFileName}</span>
              <button onClick={handleRemovePdf} className="ml-2 text-red-500">
                <AiOutlineCloseCircle />
              </button>
            </div>
            <h3 className="text-lg text-center">PDF Summary:</h3>
            <p className="mt-2 text-center">{isSummarizing ? "Summarizing..." : summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentSum;
