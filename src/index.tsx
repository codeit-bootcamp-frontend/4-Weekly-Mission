import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
