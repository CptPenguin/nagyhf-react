import React, { useState } from 'react';

export function Vertical({
  verticalOpen,
  setVerticalOpen,
  todoOpen,
  setTodoOpen,
}) {
  const transform = verticalOpen ? 'translateX(0px)' : 'translateX(-110px)';
  return (
    <div className="Vertical" style={{ transform: transform }}>
      <button
        onClick={() => {
          setVerticalOpen(false);
          setTodoOpen(false);
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          setTodoOpen(!todoOpen);
        }}
      >
        Todos
      </button>
      <button> Chat
      </button>
    </div>
  );
}
