import React, { useState } from 'react';

export function Vertical({ verticalOpen }) {
  const transform = verticalOpen ? 'translateX(0px)' : 'translateX(-110px)';
  return <div className="Vertical" style={{ transform: transform }}></div>;
}
