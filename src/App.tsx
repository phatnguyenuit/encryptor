import React from 'react';

import Routes from './Routes';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/encryptor">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <a href="/encryptor">
          <b>Encryptor</b>
        </a>
      </header>
      <main className="App-main">
        <Routes />
      </main>
    </div>
  );
}

export default App;
