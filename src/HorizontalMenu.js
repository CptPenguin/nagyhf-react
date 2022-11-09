import React, { useState } from 'react';

export function Horizontal({ setLoginScreen, setVerticalOpen, verticalOpen }) {
  return (
    <div className="HorizontalMenu">
      <button
        onClick={() => {
          setVerticalOpen(!verticalOpen);
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          setLoginScreen(true);
        }}
      >
        Log out
      </button>
    </div>
  );
}
