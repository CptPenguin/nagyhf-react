import React, { useState } from 'react';

export function Chat({ chatOpen, setChatOpen }) {
  const transform = chatOpen ? 'translateY(0)' : 'translateY(190px)';
  return (
    <div
      className="Chat"
      style={{ transform: transform }}
      onClick={() => {
        setChatOpen(true);
      }}
    >
      <input className="ChatInput"></input>
    </div>
  );
}
