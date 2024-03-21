'use client'

import Image from 'next/image';

import { useOpenModal } from '@/hooks/useOpenModal';
import deleteImg from '@/public/folder/delete.svg';
import ModalDeleteFolder from '@/components/modals/ModalDeleteFolder';

const FOLDER_DELETE_ICON = Object.freeze({
  src: deleteImg, name: '삭제'
});

interface FolderNameProps {
  currentFolderName: null | string;
}

const FolderDelete = ({currentFolderName}: FolderNameProps) => {
  const { isOpenModal, closeModal, openModal } = useOpenModal(false);

  return (
    <>
      <div className='folder-edit' onClick={openModal}>
        <Image src={FOLDER_DELETE_ICON.src} alt={FOLDER_DELETE_ICON.name} />
        <span className='edit-text'>{FOLDER_DELETE_ICON.name}</span>
      </div>
      {isOpenModal && 
        <ModalDeleteFolder onClick={closeModal} currentFolderName={currentFolderName}/>
      }
    </>
  )
}

export default FolderDelete