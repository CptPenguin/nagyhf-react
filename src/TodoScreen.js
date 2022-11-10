import React, { useState, useEffect } from 'react';
import { TodoPopup } from './TodoPopup.js';

export function TodoScreen({
  todoOpen,
  setTodoOpen,
  arrayOfTodos,
  setArrayOfTodos,
}) {
  const transform = todoOpen ? 'translateX(0px)' : 'translateX(-100%)';
  const [isOpen, setIsOpen] = useState(false);
  const [tempArray, setTempArray] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos') //useEffectben kell
      .then((response) => response.json())
      //.then((json) => console.log(json));
      .then((json) => setArrayOfTodos(json)); //usestate arrayben tárolom az adatokat
  }, []);

  return (
    <div className="Todo" style={{ transform: transform }}>
      <button
        onClick={() => {
          setTodoOpen(false);
        }}
      >
        X
      </button>

      <div>
        {isOpen && (
          <TodoPopup
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            tempArray={tempArray}
          />
        )}
      </div>

      <div>
        <ul>
          {arrayOfTodos.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  setIsOpen(true);
                  tempArray.id = item.id;
                  tempArray.userid = item.userId;
                  tempArray.title = item.title;
                  tempArray.completed = item.completed;
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
