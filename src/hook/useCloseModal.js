import { useEffect } from 'react';

/**
 * 외부 영역을 클릭하거나 esc 키를 눌렀을 때 모달을 닫는 훅
 *
 * @hook
 * @param {boolean} showModal 모달의 열림 유무
 * @param {Function} setShowModal 모달의 상태를 관리하는 함수
 * @param {React.RefObject} modalRef 모달에 대한 참조 객체
 */
const useCloseModal = (showModal, handleClose, modalRef) => {
  useEffect(() => {
    const handleOutsideClick = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };
    const handleEscapeKey = e => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showModal, handleClose, modalRef]);
};

export default useCloseModal;
