import classNames from 'classnames';
import PropTypes from 'prop-types';

import CloseIcon from 'assets/images/close.svg';

import styles from 'components/Modal/ModalContainer.module.css';

function ModalContainer({ children }) {
  const modalContainerClasses = classNames(
    styles['modal-container'],
    'position-fixed',
    'width-full',
    'height-full',
    'z-top'
  );
  const modalContentClasses = classNames(
    styles['modal-content'],
    'position-absolute',
    'background-white',
    'border-gray20-1px'
  );
  const closeModalClasses = classNames(styles['close-modal'], 'position-absolute');

  return (
    <div className={modalContainerClasses}>
      <div className={modalContentClasses}>
        <img className={closeModalClasses} src={CloseIcon} alt="close-icon" />
        {children}
      </div>
    </div>
  );
}

ModalContainer.propTypes = {
  children: PropTypes.node,
};

ModalContainer.defaultProps = {
  children: null,
};

export default ModalContainer;
