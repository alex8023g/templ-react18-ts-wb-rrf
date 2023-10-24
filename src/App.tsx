import React, { lazy, Suspense } from 'react';
import './main.global.css';
import { Component1 } from './Component1';
import { Component2 } from './Component2';

function App() {
  return (
    <div>
      <Component1 />
      <Component2 />
    </div>
  );
}

export default App;
