'use client'

import Image from 'next/image';

import { useOpenModal } from '@/hooks/useOpenModal';
import renameImg from '@/public/folder/pen.svg';
import ModalRenameFolder from '@/components/modals/ModalRename';

const FOLDER_RENAME_ICON = Object.freeze({
  src: renameImg, name: '이름변경'
});

const FolderRename = () => {
  const { isOpenModal, closeModal, openModal } = useOpenModal(false);

  return (
    <>
      <div className='folder-edit' onClick={openModal}>
        <Image src={FOLDER_RENAME_ICON.src} alt={FOLDER_RENAME_ICON.name}/>
        <span className='edit-text'>{FOLDER_RENAME_ICON.name}</span>
      </div>
      {isOpenModal && 
        <ModalRenameFolder onClick={closeModal} />
      }
    </>
  )
}

export default FolderRename