import React from 'react';
import logo from './logo.svg';
import styled from './App.module.scss';

function App() {
  return (
    <div className={styled.App}>
      <header className="App-header">
        <img src={logo} className={styled.Applogo}  alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
