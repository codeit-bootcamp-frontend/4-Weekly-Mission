import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'assets/styles/reset.css';
import 'assets/styles/colors.css';
import 'assets/styles/common.css';
import 'assets/styles/utility.css';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
