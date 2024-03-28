import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';

import { InputStateContextProvider } from 'context/InputStateProvider';
import ModalProvider from 'context/ModalProvider';

import App from './App';

import 'assets/styles/reset.css';
import 'assets/styles/colors.css';
import 'assets/styles/common.css';
import 'assets/styles/utility.css';

import './index.css';

// ReactModal.setAppElement(appElement)
// 모달이 활성화될 때 애플리케이션의 appElement을 제외한 나머지 부분에 대한 접근을 차단
ReactModal.setAppElement('#modal-root');

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

// React.StrictMode: 개발 단계에서 안전하지 않은 생명주기, 레거시 API 사용, 예상치 못한 부작용 등을 개발 단계에서 미리 발견하고 수정
// React.StrictMode -> render(), shouldComponentUpdate(), setState, ... 등 여러 메서드가 두 번 호출됨
// React.StrictMode -> 모달이 두 번 호출 -> 두 번 렌더링되어 'React-Modal: Cannot register modal instance that's already open' 오류가 발생
// React.StrictMode는 프로덕션 빌드에서는 작동하지 않음
// ModalProvider로 App을 감싸면 App의 모든 요소에서 ModalProvider에 접근 가능
root.render(
  <React.StrictMode>
    <ModalProvider>
      <InputStateContextProvider>
        <App />
      </InputStateContextProvider>
    </ModalProvider>
  </React.StrictMode>
);
