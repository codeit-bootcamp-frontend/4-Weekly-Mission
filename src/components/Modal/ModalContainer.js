import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import CloseIcon from 'assets/images/close.svg';

import Button from 'components/Common/Button';
import styles from 'components/Modal/ModalContainer.module.css';

// onClose: 모달을 닫을 때 실행하는 콜백 함수
function ModalContainer({ children, isModalOpen, setIsModalOpen, onClose }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (onClose) onClose();
  };

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const handleCloseButtonClick = (e) => {
    e.stopPropagation();
    closeModal();
  };

  const handleCloseByEscape = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleCloseByEscape);

    return () => {
      document.removeEventListener('keydown', handleCloseByEscape);
    };
  }, [isModalOpen]);

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

  const closeModalClasses = classNames('display-none');

  // React Portal을 사용하여 DOM의 body에 렌더링되도록 설정
  return ReactDOM.createPortal(
    <div
      className={`${modalOverlayClasses} ${!isModalOpen ? closeModalClasses : ''}`}
      onClick={handleOverlayClick}
      onKeyDown={handleCloseByEscape}
      role="button"
      tabIndex={-1}
    >
      <div
        className={modalContainerClasses}
        onClick={stopPropagation}
        onKeyDown={handleCloseByEscape}
        role="button"
        tabIndex={-1}
      >
        <Button className={closeIconClasses} onClick={handleCloseButtonClick} onKeyDown={handleCloseByEscape}>
          <img src={CloseIcon} alt="close-icon" />
        </Button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-portal')
  );
}

ModalContainer.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
  onClose: PropTypes.func,
};

ModalContainer.defaultProps = {
  children: null,
  onCloseModal: null,
  onClose: null,
};

export default ModalContainer;
