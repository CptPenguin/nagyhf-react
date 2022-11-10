import React, { useState } from 'react';

export function Chat({ chatOpen, setChatOpen }) {
  const transform = chatOpen ? 'translateY(0)' : 'translateY(290px)';
  const [arrayOfMessages, setArrayOfMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  console.log(arrayOfMessages);
  return (
    <div
      className="Chat"
      style={{ transform: transform }}
      onClick={() => {
        setChatOpen(true);
      }}
    >
      <ul className="Ultype">
        {arrayOfMessages.map((item) => {
          return (
            <li className="ChatList">
              <div className="SentMessage">{item.text}</div>
            </li>
          );
        })}
      </ul>

      <input
        className="ChatInput"
        value={inputValue}
        onChange={(eventObj) => {
          setInputValue(eventObj.target.value);
        }}
      ></input>
      <button
        className="ChatButton"
        onClick={() => {
          setArrayOfMessages([
            ...arrayOfMessages,
            { ID: new Date().getTime(), text: inputValue },
          ]);
          setInputValue('');
        }}
      >
        »
      </button>
    </div>
  );
}
