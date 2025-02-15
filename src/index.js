import React from 'react';
import ReactDOM from 'react-dom/client'; // Use client API
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Your main app component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Wrap your App with BrowserRouter */}
    <App />
  </BrowserRouter>
);