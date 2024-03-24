import styles from '../styles/AddLink.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { useState } from 'react';

import iconLink from '../assets/icons/link.svg';

import Modal from './Modal';
import ModalPortal from './Portal';

const AddLink = ({ folderList }) => {
  const [openModal, setOpenModal] = useState(false);
  const [role, setRole] = useState('');

  const handleOpenModal = (role) => {
    setOpenModal(true);
    setRole(role);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={cn('add-link')}>
      {openModal && (
        <ModalPortal>
          <Modal onClose={handleCloseModal} role={role} folderList={folderList} />
        </ModalPortal>
      )}
      <div className={cn('add-link-content')}>
        <div className={cn('add-link-container')}>
          <img className={cn('add-link-icon')} src={iconLink} alt="링크를 추가하기." />
          <input className={cn('add-link-input')} type="text" placeholder="링크를 추가해 보세요"></input>
        </div>
        <a className={cn('add-link-button', 'button-gradient')} onClick={() => handleOpenModal('add')}>추가하기</a>
      </div>
    </div>
  );
};

export default AddLink;
