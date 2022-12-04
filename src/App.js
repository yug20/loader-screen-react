import React from 'react';
import './style.css';
import PreLoader1 from './components/PreLoader1';
import PreLoader2 from './components/PreLoader2';
import PreLoader3 from './components/PreLoader3';

export default function App() {
  return (
    <div>
      <header className="App-header">
        <PreLoader3 />
        {/* <PreLoader2 /> */}
        {/* <PreLoader1 /> */}
      </header>
    </div>
  );
}
