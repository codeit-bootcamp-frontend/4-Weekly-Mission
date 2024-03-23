/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

// 모달의 상태 저장 - 활성화된 모달 추적
const ModalStateContext = createContext([]);

// 모달 관련 액션 실행하는 함수 저장(열기, 닫기, ...)
const ModalDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

export { ModalStateContext, ModalDispatchContext };
