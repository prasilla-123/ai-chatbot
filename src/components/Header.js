import React from 'react';

function Header() {
  return (
    <div style={{
      backgroundColor: '#2563EB',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          backgroundColor: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px'
        }}>
          🤖
        </div>
        <div>
          <h2 style={{ color: 'white', margin: 0, fontSize: '16px', fontWeight: '600' }}>
            AI Assistant
          </h2>
          <p style={{ color: '#93C5FD', margin: 0, fontSize: '12px' }}>
            Always here to help
          </p>
        </div>
      </div>
      <div style={{
        width: '8px',
        height: '8px',
        backgroundColor: '#4ADE80',
        borderRadius: '50%'
      }}/>
    </div>
  );
}

export default Header;