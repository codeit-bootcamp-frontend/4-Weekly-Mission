'use client'

import Image from 'next/image';
import { useState } from 'react';

import deleteImg from '@/public/folder/delete.svg';

const FOLDER_DELETE_ICON = Object.freeze({
  src: deleteImg, name: '삭제', modalTitle: '폴더 삭제'
});

const FolderDelete = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className='folder-edit' >
      <Image src={FOLDER_DELETE_ICON.src} alt={FOLDER_DELETE_ICON.name} />
      <span className='edit-text'>{FOLDER_DELETE_ICON.name}</span>
    </div>
  )
}

export default FolderDelete