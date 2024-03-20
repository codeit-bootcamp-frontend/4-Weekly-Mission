'use client'

import Image from 'next/image';
import { useState } from 'react';

import shareImg from '@/public/folder/share.svg';

const FOLDER_SHARE_ICON = Object.freeze({
  src: shareImg, name: '공유', modalTitle: '폴더 공유'
});

const FolderShare = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className='folder-edit'>
      <Image src={FOLDER_SHARE_ICON.src} alt={FOLDER_SHARE_ICON.name} />
      <span className='edit-text'>{FOLDER_SHARE_ICON.name}</span>
    </div>
  )
}

export default FolderShare