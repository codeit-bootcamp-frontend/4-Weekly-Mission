'use client'

import { useState } from 'react';

import FolderName from "./FolderName"

const TOTAL_LIST_NAME = "전체"

interface DataItem {
  id: number;
  name: string;
}


const FolderList = ({ folderListData}: any) => {
  const [currentFolderName, setCurrentFolderName] = useState(TOTAL_LIST_NAME);

  const handleListClick = (name: string) => {
    setCurrentFolderName(name);
  }

  return (
    <div className='container-folder-and-cards'>
      <div className='container-folder-list'>
        <div className='folder-list'>
          <button className='folder-list_btn' onClick={()=>handleListClick(TOTAL_LIST_NAME)}>{TOTAL_LIST_NAME}</button>
          {folderListData.map(({ id, name }: DataItem) => (
            <button key={id} className='folder-list_btn' onClick={()=>handleListClick(name)}>
              {name}
            </button>
          ))}
        </div>
      </div>
      <FolderName folderName={currentFolderName} />
    </div>
  )
}

export default FolderList