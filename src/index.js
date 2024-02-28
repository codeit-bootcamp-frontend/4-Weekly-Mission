import React from 'react';
import ReactDOM from 'react-dom/client';

import ModalProvider from 'context/ModalProvider';

import App from './App';

import 'assets/styles/reset.css';
import 'assets/styles/colors.css';
import 'assets/styles/common.css';
import 'assets/styles/utility.css';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const modalPortal = <div id="modal-portal" />; // 모달을 렌더링할 위치

// ModalProvider로 App을 감싸면 App의 모든 요소에서 ModalProvider에 접근 가능
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
    {modalPortal}
  </React.StrictMode>
);
