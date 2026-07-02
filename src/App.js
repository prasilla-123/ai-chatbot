import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (userMessage) => {
    const newMessages = [...messages, { text: userMessage, isUser: true }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel(
  { model: 'gemini-2.5-flash' },
  { apiVersion: 'v1beta' }
);
      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const aiReply = response.text();
      setMessages([...newMessages, { text: aiReply, isUser: false }]);
    } catch (error) {
      console.log("Error:", error);
      setMessages([...newMessages, { text: `Error: ${error.message}`, isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#F3F4F6'
    }}>
      <div style={{
        width: '390px',
        height: '844px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '40px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
      }}>
        <Header />
        <ChatWindow messages={messages} isLoading={isLoading} onSend={handleSend} />
        <MessageInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App; 