import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import 'bulma/css/bulma.css';
import '../src/components/Artikel.css';
import axios from 'axios';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

