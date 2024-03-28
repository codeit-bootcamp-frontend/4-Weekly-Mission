/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';

type PropList = {
  onSubmit: () => Promise<void> | void;
};

export interface ModalState {
  ModalComponent: React.ElementType;
  propList: PropList;
}

export interface ModalDispatch {
  open: (ModalComponent: React.ElementType, propList: PropList) => void;
  close: () => void;
}

// 모달의 상태 저장 - 활성화된 모달 추적
export const ModalStateContext = createContext<ModalState | null>(null);

// 모달 관련 액션 실행하는 함수 저장(열기, 닫기, ...)
export const ModalDispatchContext = createContext<ModalDispatch>({
  open: () => {},
  close: () => {},
});
