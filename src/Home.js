import React, { useState } from 'react';
import { Horizontal } from './HorizontalMenu.js';
import { Vertical } from './VerticalMenu.js';
import { TodoScreen } from './TodoScreen.js';

export function Home({ setLoginScreen }) {
  const [verticalOpen, setVerticalOpen] = useState(false);
  const [todoOpen, setTodoOpen] = useState(false);
  return (
    <div>
      <Horizontal
        setLoginScreen={setLoginScreen}
        setVerticalOpen={setVerticalOpen}
        verticalOpen={verticalOpen}
      />
      <Vertical
        verticalOpen={verticalOpen}
        setVerticalOpen={setVerticalOpen}
        todoOpen={todoOpen}
        setTodoOpen={setTodoOpen}
      />

      <TodoScreen todoOpen={todoOpen} setTodoOpen={setTodoOpen}/>
    </div>
  );
}
