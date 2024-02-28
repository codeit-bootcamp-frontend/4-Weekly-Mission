import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';

import ModalProvider from 'context/ModalProvider';

import App from './App';

import 'assets/styles/reset.css';
import 'assets/styles/colors.css';
import 'assets/styles/common.css';
import 'assets/styles/utility.css';

import './index.css';

// ReactModal
ReactModal.setAppElement('#modal-root');

const root = ReactDOM.createRoot(document.getElementById('root'));

// ModalProvider로 App을 감싸면 App의 모든 요소에서 ModalProvider에 접근 가능
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
      {/* 모달 위치 */}
      <div id="modal-root" />
    </ModalProvider>
  </React.StrictMode>
);
