import styles from '../styles/Modal.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import buttonClose from '../assets/icons/button-close.svg';

import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';
import ModalShare from './ModalShare';
import ModalAdd from './ModalAdd';

const Modal = ({ onClose, role, folderInfo = '', folderList }) => {
  const modalTitle = {
    'edit-name': '폴더 이름 변경', 'edit-add': '폴더 추가', 'share': '폴더 공유',
    'delete-folder': '폴더 삭제', 'delete-link': '링크 삭제', 'add': '폴더에 추가'
  };

  return (
    <>
      <div className={cn('modal-mask')} onClick={onClose}></div>
      <div className={cn('modal-container')} onClick={(event) => event.stopPropagation()}>
        <h2 className={cn('modal-title')}>{modalTitle[role]}</h2>
        <a className={cn('modal-button-close')}>
          <img src={buttonClose} onClick={onClose} alt='닫기' />
        </a>
        {role === 'edit-name' && <ModalEdit />}
        {role === 'edit-add' && <ModalEdit />}
        {role === 'share' && <ModalShare subTitle={folderInfo?.name} />}
        {role === 'delete-folder' && <ModalDelete subTitle={folderInfo?.name} />}
        {role === 'delete-link' && <ModalDelete />}
        {role === 'add' && <ModalAdd folderList={folderList} />}
      </div>
    </>
  );
};

export default Modal;