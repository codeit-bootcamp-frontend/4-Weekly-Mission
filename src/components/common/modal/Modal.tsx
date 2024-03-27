import styles from './Modal.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { MouseEventHandler, ReactNode } from 'react';

import buttonClose from '../../../assets/icons/button-close.svg';

interface Props {
  role: string;
  children: ReactNode;
  onClose: MouseEventHandler<HTMLDivElement>;
}

const Modal = ({ role, children, onClose }: Props) => {
  return (
    <>
      <div className={cn('modal-mask')} onClick={onClose}></div>
      <div className={cn('modal-container')} onClick={event => event.stopPropagation()}>
        <h2 className={cn('modal-title')}>{role}</h2>
        <a className={cn('modal-button-close')}>
          <img src={buttonClose} onClick={onClose} alt="닫기" />
        </a>
        {children}
      </div>
    </>
  );
};

export default Modal;
