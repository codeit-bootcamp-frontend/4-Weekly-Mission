'use client'

import Image from 'next/image';
import { useState } from 'react';

import renameImg from '@/public/folder/pen.svg';

const FOLDER_RENAME_ICON = Object.freeze({
  src: renameImg, name: '이름변경', modalTitle: '폴더 이름 변경'
});

const FolderRename = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className='folder-edit'>
      <Image src={FOLDER_RENAME_ICON.src} alt={FOLDER_RENAME_ICON.name} />
      <span className='edit-text'>{FOLDER_RENAME_ICON.name}</span>
    </div>
  )
}

export default FolderRename