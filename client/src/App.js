import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState('hello');

    fetch('/api/dadjokes')
        .then(response => response.text())
        .then(message => {
            console.log(message);
            setMessage(message);
        });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> {message}.
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
