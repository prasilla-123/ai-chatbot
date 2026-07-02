import React from 'react';
import ReactMarkdown from 'react-markdown';

function MessageBubble({ message, isUser }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '12px',
      padding: '0 16px'
    }}>
      {!isUser && (
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#2563EB',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          marginRight: '8px',
          flexShrink: 0
        }}>
          🤖
        </div>
      )}
      <div style={{
        maxWidth: '70%',
        padding: '10px 14px',
        borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        backgroundColor: isUser ? '#2563EB' : '#F0F0F0',
        color: isUser ? 'white' : '#1A1A1A',
        fontSize: '14px',
        lineHeight: '1.5'
      }}>
        {isUser ? message : <ReactMarkdown>{message}</ReactMarkdown>}
      </div>
    </div>
  );
}

export default MessageBubble;