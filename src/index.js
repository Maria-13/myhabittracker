import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const DATA = [
    { id: "habit-0", name: "Read", completed: true },
    { id: "habit-1", name: "Run", completed: false },
    { id: "habit-2", name: "Smile", completed: false }
  ];

  ReactDOM.render(
    <React.StrictMode>
      <App habits={DATA} />
    </React.StrictMode>,
    document.getElementById('root')
  );