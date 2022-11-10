import React, { useState } from 'react';
import { Horizontal } from './HorizontalMenu.js';
import { Vertical } from './VerticalMenu.js';
import { TodoScreen } from './TodoScreen.js';
import { Chat } from './Chat.js';

export function Home({ setLoginScreen }) {
  const [verticalOpen, setVerticalOpen] = useState(false);
  const [todoOpen, setTodoOpen] = useState(false);
  const [arrayOfTodos, setArrayOfTodos] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div>
      <Horizontal
        setLoginScreen={setLoginScreen}
        setVerticalOpen={setVerticalOpen}
        verticalOpen={verticalOpen}
        setChatOpen={setChatOpen}
        chatOpen={chatOpen}
      />
      <Vertical
        verticalOpen={verticalOpen}
        setVerticalOpen={setVerticalOpen}
        todoOpen={todoOpen}
        setTodoOpen={setTodoOpen}
      />

      <TodoScreen
        todoOpen={todoOpen}
        setTodoOpen={setTodoOpen}
        arrayOfTodos={arrayOfTodos}
        setArrayOfTodos={setArrayOfTodos}
      />

      <Chat chatOpen={chatOpen} setChatOpen={setChatOpen} />
    </div>
  );
}
