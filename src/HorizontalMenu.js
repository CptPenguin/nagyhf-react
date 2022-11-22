import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion.styled';

export function Horizontal({
  setLoginScreen,
  setVerticalOpen,
  verticalOpen,
  setChatOpen,
  chatOpen,
}) {
  const Div = styled.div`  
  position: fixed;
  height: 40px;
  width: 95%;
  border: 3px solid black;
  display: flex;
  justify-content: end;`
  return (
    <div classname="HorizontalMenu">
      <button
        onClick={() => {
          setVerticalOpen(!verticalOpen);
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          setChatOpen(!chatOpen);
        }}
      >
        Chat
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
