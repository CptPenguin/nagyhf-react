import React from 'react';

export function TodoPopup({ setIsOpen, tempArray }) {
  return (
    <div className="Modal">
      <div className="ModalDisplay">
        <div className="Button">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="Row">{tempArray.id}</div>
        <div className="Row">{tempArray.userid}</div>
        <div className="Row">{tempArray.title}</div>
        <div className="Row">{tempArray.completed}</div>
      </div>
    </div>
  );
}
