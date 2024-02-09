import React, { useEffect, useState } from 'react';
import '../style/Shard.css';
import search from '../assets/share/search.svg';
import close from '../assets/share/close.svg';
import Card from './Card';
import { getFolderInfo } from './api';

const Shared = () => {
  const [folderInfo, setFolderInfo] = useState({
    folderName: null,
    folderOwner: null,
    folderOwnerImg: null,
    folderLinks: [],
  });

  const handleLoadFolderInfo = async () => {
    const folderInfo = await getFolderInfo();
    setFolderInfo({
      folderName: folderInfo.folder.name,
      folderOwner: folderInfo.folder.owner.name,
      folderOwnerImg: folderInfo.folder.owner.profileImageSource,
      folderLinks: folderInfo.folder.links,
    });
  };

  useEffect(() => {
    handleLoadFolderInfo();
  }, []);

  return (
    <div className='SharedContainer'>
      <div className='SharedTitle'>
        <div className='SharedProfile'>
          <img src={folderInfo.folderOwnerImg} alt='avatar img' />
          <span>{folderInfo.folderOwner}</span>
        </div>
        <h1>{folderInfo.folderName}</h1>
      </div>
      <div className='SharedMain'>
        <div className='SharedSeachBarContent'>
          <div className='SeachContent'>
            <img src={search} alt='search img' />
            <input placeholder='링크를 검색해 보세요.' />
          </div>
          <img src={close} alt='close img' />
        </div>
        <Card folderLinkInfo={folderInfo.folderLinks} />
      </div>
    </div>
  );
};

export default Shared;
