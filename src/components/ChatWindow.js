import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

function ChatWindow({ messages, isLoading, onSend }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{
      flex: 1,
      overflowY: 'auto',
      padding: '16px 0',
      backgroundColor: '#FFFFFF'
    }}>
      {messages.length === 0 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: '12px',
          color: '#9CA3AF'
        }}>
          <div style={{ fontSize: '48px' }}>🤖</div>
          <p style={{ fontSize: '16px', fontWeight: '600', color: '#1A1A1A' }}>
            Hi! I'm your AI Assistant
          </p>
          <p style={{ fontSize: '14px', textAlign: 'center', padding: '0 32px' }}>
            Ask me anything — I'm here to help!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '80%' }}>
           {['What can you do?', 'Tell me a fun fact!', 'Help me write something'].map((suggestion) => (
  <div key={suggestion} onClick={() => onSend(suggestion)} style={{
    padding: '10px 16px',
    backgroundColor: '#EFF6FF',
    borderRadius: '12px',
    fontSize: '13px',
    color: '#2563EB',
    cursor: 'pointer',
    textAlign: 'center',
    border: '1px solid #BFDBFE'
  }}>
    {suggestion}
  </div>
))}
          </div>
        </div>
      )}

      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          message={msg.text}
          isUser={msg.isUser}
        />
      ))}

      {isLoading && (
        <div style={{ padding: '0 16px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#2563EB',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px'
          }}>
            🤖
          </div>
          <div style={{
            padding: '10px 14px',
            backgroundColor: '#F0F0F0',
            borderRadius: '18px 18px 18px 4px',
            fontSize: '14px',
            color: '#9CA3AF'
          }}>
            Typing...
          </div>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatWindow;