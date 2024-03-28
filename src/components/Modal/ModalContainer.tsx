import classNames from 'classnames';
import React from 'react';
import ReactModal from 'react-modal';

import CloseIcon from 'assets/images/close.svg';

import Button from 'components/Common/Button';
import styles from 'components/Modal/ModalContainer.module.css';

// ReactModal 주요 Props
//
// --- 기본 Props ---
// isOpen: 모달이 열려있는지 여부를 결정하는 불리언 값입니다. 필수 prop입니다.
// onAfterOpen: 모달이 열린 직후에 실행될 콜백 함수입니다.
// onRequestClose: 모달을 닫으려는 요청이 있을 때 실행될 콜백 함수입니다. 예를 들어, 오버레이 클릭이나 키보드 ESC 키 입력 등이 있습니다.
// closeTimeoutMS: 닫히는 트랜지션을 위한 시간(밀리초)입니다. 이 시간이 지난 후에 onAfterClose 이벤트가 발생합니다.
// style: 모달과 오버레이에 적용할 인라인 스타일을 지정합니다. { content: {}, overlay: {} } 형태로 제공됩니다.
// contentLabel: 모달의 콘텐츠를 설명하는 문자열입니다. 접근성을 위해 필요합니다.
// aria: aria 속성을 객체 형태로 설정할 수 있습니다. 예: { labelledby: "heading", describedby: "full_description" }.
// shouldCloseOnOverlayClick: 오버레이를 클릭했을 때 모달을 닫을지 여부를 결정합니다.
// shouldCloseOnEsc: ESC 키를 눌렀을 때 모달을 닫을지 여부를 결정합니다.
// parentSelector: 모달을 렌더링할 부모 요소를 선택하는 함수입니다.
//
// --- 스타일 관련 Props ---
// className: 모달 콘텐츠에 적용할 CSS 클래스입니다.
// overlayClassName: 모달 오버레이에 적용할 CSS 클래스입니다.
// bodyOpenClassName: 모달이 열릴 때 <body> 태그에 적용할 CSS 클래스입니다.
// htmlOpenClassName: 모달이 열릴 때 <html> 태그에 적용할 CSS 클래스입니다.
// portalClassName: 모달 포털에 적용할 CSS 클래스입니다.
//
// --- 기능 관련 Props ---
// role: 모달 요소의 ARIA role을 지정합니다.
// shouldFocusAfterRender: 모달이 렌더링된 후 포커스를 자동으로 설정할지 여부를 결정합니다.
// shouldReturnFocusAfterClose: 모달이 닫힌 후에 포커스를 반환할지 여부를 결정합니다.
//
// --- 고급 설정 Props ---
// appElement: 모달이 열릴 때 애플리케이션의 나머지 부분에 대한 접근을 차단하는 요소를 설정합니다. 접근성을 위해 중요합니다.
// overlayRef와 contentRef: 오버레이와 콘텐츠에 대한 참조를 직접 제어할 수 있습니다.

// onClose: 모달을 닫을 때 실행하는 콜백 함수

interface ModalContainerProps {
  children: React.ReactNode;
  onClose: () => void;
}

function ModalContainer({ children, onClose }: ModalContainerProps) {
  const handleCloseButtonClick = () => {
    onClose();
  };

  // classNames
  const modalOverlayClasses = classNames(
    styles['modal-overlay'],
    'position-fixed',
    'width-full',
    'height-full',
    'z-top-force'
  );
  const modalContainerClasses = classNames(
    styles['modal-container'],
    'position-absolute',
    'background-white',
    'border-gray20-1px'
  );
  const closeIconClasses = classNames(styles['close-icon'], 'position-absolute', 'border-none', 'background-none');

  // React Portal을 사용하여 DOM의 body에 렌더링되도록 설정
  // ReactModal 사용된 속성
  // _1. isOpen: 모달이 열려있는지 여부를 결정하는 불리언 값입니다. 필수 prop입니다.
  // _2. className: 모달 콘텐츠에 적용할 CSS 클래스입니다.
  // _3. overlayClassName: 모달 오버레이에 적용할 CSS 클래스입니다.
  // _4. onRequestClose: 모달을 닫으려는 요청이 있을 때 실행될 콜백 함수입니다. 예를 들어, 오버레이 클릭이나 키보드 ESC 키 입력 등이 있습니다.
  // _5. shouldCloseOnOverlayClick: 오버레이를 클릭했을 때 모달을 닫을지 여부를 결정합니다.
  // _6. shouldCloseOnEsc: ESC 키를 눌렀을 때 모달을 닫을지 여부를 결정합니다.
  // _7. parentSelector: 모달을 렌더링할 부모 요소를 선택하는 함수입니다.
  return (
    <ReactModal
      isOpen
      className={modalContainerClasses}
      overlayClassName={modalOverlayClasses}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      parentSelector={() => document.querySelector('#modal-root') || document.body}
    >
      <Button className={closeIconClasses} onClick={handleCloseButtonClick}>
        <img src={CloseIcon} alt="close-icon" />
      </Button>
      {children}
    </ReactModal>
  );
}
export default ModalContainer;
