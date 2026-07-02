import React, { useState } from 'react';

function MessageInput({ onSend, isLoading }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    onSend(input);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{
      padding: '12px 16px',
      backgroundColor: 'white',
      borderTop: '1px solid #E5E7EB',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        disabled={isLoading}
        rows={1}
        style={{
          flex: 1,
          padding: '10px 14px',
          borderRadius: '24px',
          border: '1px solid #E5E7EB',
          fontSize: '14px',
          resize: 'none',
          outline: 'none',
          backgroundColor: isLoading ? '#F9FAFB' : 'white',
          color: '#1A1A1A',
          fontFamily: 'inherit'
        }}
      />
      <button
        onClick={handleSend}
        disabled={isLoading || input.trim() === ''}
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: isLoading || input.trim() === '' ? '#93C5FD' : '#2563EB',
          border: 'none',
          cursor: isLoading || input.trim() === '' ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px'
        }}
      >
        {isLoading ? '⏳' : '➤'}
      </button>
    </div>
  );
}

export default MessageInput;    