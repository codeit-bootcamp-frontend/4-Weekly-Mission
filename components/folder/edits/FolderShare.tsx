'use client'

import Image from 'next/image';

import { useOpenModal } from '@/hooks/useOpenModal';
import shareImg from '@/public/folder/share.svg';
import ModalFolderShare from '@/components/modals/ModalFolderShare';

const FOLDER_SHARE_ICON = Object.freeze({
  src: shareImg, name: '공유'
});

interface FolderNameProps {
  currentFolderName: null | string;
}

const FolderShare = ({currentFolderName}: FolderNameProps) => {
  const {isOpenModal, closeModal, openModal} = useOpenModal(false);

  return (
    <>
      <div className='folder-edit' onClick={openModal}>
        <Image src={FOLDER_SHARE_ICON.src} alt={FOLDER_SHARE_ICON.name}/>
        <span className='edit-text'>{FOLDER_SHARE_ICON.name}</span>
      </div>
      {isOpenModal && 
        <ModalFolderShare onClick={closeModal} currentFolderName={currentFolderName}/>
      }
    </>
  )
}

export default FolderShare