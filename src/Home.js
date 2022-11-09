import React, { useState } from 'react';
import { Horizontal } from './HorizontalMenu.js';
import { Vertical } from './VerticalMenu.js';

export function Home({ setLoginScreen }) {
  const [verticalOpen, setVerticalOpen] = useState(false);
  return (
    <div>
      <Horizontal
        setLoginScreen={setLoginScreen}
        setVerticalOpen={setVerticalOpen}
        verticalOpen={verticalOpen}
      />
      <Vertical verticalOpen={verticalOpen}/>
    </div>
  );
}
