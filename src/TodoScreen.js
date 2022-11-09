import React, { useState } from 'react';

export function TodoScreen({ todoOpen, setTodoOpen }) {
  const transform = todoOpen ? 'translateX(0px)' : 'translateX(-100%)';
  return (
    <div className="Todo" style={{ transform: transform }}>
      <button
        onClick={() => {
          setTodoOpen(false);
        }}
      >
        X
      </button>
    </div>
  );
}
