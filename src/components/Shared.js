import React, { useEffect, useState } from 'react';
import '../style/Shard.css';
import avatar from '../assets/share/avatar.svg';
import search from '../assets/share/search.svg';
import close from '../assets/share/close.svg';
import Card from './Card';
import { getFolderInfo } from '../apis/api';

const Shared = () => {
  const [folderInfo, setFolderInfo] = useState({
    folderName: null,
    folderOwner: null,
    folderOwnerImg: null,
    folderLinks: [],
  });

  const handleLoadFolderInfo = async () => {
    try {
      const folderInfo = await getFolderInfo();

      if (!folderInfo.folder) return;

      setFolderInfo({
        folderName: folderInfo.folder.name,
        folderOwner: folderInfo.folder.owner.name,
        folderOwnerImg: folderInfo.folder.owner.profileImageSource,
        folderLinks: folderInfo.folder.links,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadFolderInfo();
  }, []);

  return (
    <>
      {folderInfo.folderName !== null ? (
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
      ) : (
        <div className='SharedContainer'>
          <div className='SharedTitle'>
            <div className='SharedProfile'>
              <img src={avatar} alt='avatar img' />
              <span>@코드잇</span>
            </div>
            <h1>⭐️ 즐겨찾기</h1>
          </div>
          <div className='SharedMain'>
            <div className='SharedSeachBarContent'>
              <div className='SeachContent'>
                <img src={search} alt='search img' />
                <input placeholder='링크를 검색해 보세요.' />
              </div>
              <img src={close} alt='close img' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shared;
