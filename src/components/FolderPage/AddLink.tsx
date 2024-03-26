import styles from './AddLink.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { useState } from 'react';
import { FolderList } from '../../types/type';

import iconLink from '../../assets/icons/link.svg';

import Modal from '../common/modal/Modal';
import ModalPortal from '../../utils/Portal';
import ModalAdd from '../common/modal/ModalAdd';

interface Props {
  folderList?: FolderList[];
}

const AddLink = ({ folderList }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [role, setRole] = useState('');

  const handleOpenModal = (role: string) => {
    setOpenModal(true);
    setRole(role);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const ModalRole = {
    Add: '폴더 추가',
  };

  return (
    <div className={cn('add-link')}>
      {openModal && (
        <ModalPortal>
          <Modal onClose={handleCloseModal} role={role}>
            {role === ModalRole.Add && <ModalAdd folderList={folderList} />}
          </Modal>
        </ModalPortal>
      )}
      <div className={cn('add-link-content')}>
        <div className={cn('add-link-container')}>
          <img className={cn('add-link-icon')} src={iconLink} alt="링크를 추가하기." />
          <input className={cn('add-link-input')} type="text" placeholder="링크를 추가해 보세요"></input>
        </div>
        <a className={cn('add-link-button', 'button-gradient')} onClick={() => handleOpenModal(ModalRole.Add)}>
          추가하기
        </a>
      </div>
    </div>
  );
};

export default AddLink;
