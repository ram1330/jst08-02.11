import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoContextProvider from './components/TodoContextProvider/TodoContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);

