import styles from '../styles/FolderList.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { useState, useEffect } from 'react';
import { getFolderLink } from '../api';

import Folder from '../components/Folder';
import CardList from './CardList';

import iconShare from '../assets/icons/share.svg';
import iconPen from '../assets/icons/pen.svg';
import iconDelete from '../assets/icons/delete.svg';
import iconPlus from '../assets/icons/plus.svg';

import Modal from './Modal';
import ModalPortal from './Portal';

const FolderList = ({ folderList }) => {
  const [selected, setSelected] = useState({ id: '', name: '전체' });
  const [folderLink, setFolderLink] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [role, setRole] = useState('');

  const handleOpenModal = (role) => {
    setOpenModal(true);
    setRole(role);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLoad = async (folderId) => {
    try {
      const state = await getFolderLink(folderId);
      setFolderLink(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad(selected.id);
  }, [selected.id]);

  return (
    <>
      <div className={cn('folder-list')}>
        <div className={cn('folder-list-container')}>
          <a className={cn('folder', selected.name === '전체' ? 'folder-selected' : '')}
            onClick={() => setSelected({ id: '', name: '전체' })}>전체</a>
          {folderList && (
            <>
              {folderList.map((folder) => (
                <Folder
                  key={folder.id}
                  folder={folder}
                  onClickFolder={setSelected}
                  isSelected={selected && selected.id === folder.id} />
              ))}
            </>
          )}
        </div>
        <div className={cn('add-folder-container')}>
          <a className={cn('add-folder')} onClick={() => handleOpenModal('edit-add')}>폴더 추가</a>
          <img className={cn('add-folder-icon')} src={iconPlus} alt="폴더 추가하기." />
        </div>
      </div >

      <div className={cn('folder-title')}>
        {openModal && (
          <ModalPortal>
            <Modal onClose={handleCloseModal} role={role} folderInfo={selected} />
          </ModalPortal>
        )}
        <h2 className={cn('folder-title', 'folder-name')}>{selected.name}</h2>
        {selected.name !== '전체' && (
          <>
            <div className={cn('folder-menu')}>
              <img className={cn('folder-menu-icon')} src={iconShare} alt="폴더 공유하기." />
              <a className={cn('folder-menu-text')} onClick={() => handleOpenModal('share')}>공유</a>
              <img className={cn('folder-menu-icon')} src={iconPen} alt="폴더 이름 변경하기." />
              <a className={cn('folder-menu-text')} onClick={() => handleOpenModal('edit-name')}>이름 변경</a>
              <img className={cn('folder-menu-icon')} src={iconDelete} alt="폴더 삭제하기." />
              <a className={cn('folder-menu-text')} onClick={() => handleOpenModal('delete-folder')}>삭제</a>
            </div>
          </>
        )}
      </div>
      <CardList folderInfo={folderLink} isIconVisible={true} />
    </>
  );
};

export default FolderList;
