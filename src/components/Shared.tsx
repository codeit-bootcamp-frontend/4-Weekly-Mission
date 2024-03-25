import React, { useEffect, useState } from 'react';
import '../style/Shard.css';
import avatar from '../assets/share/avatar.svg';
import search from '../assets/share/search.svg';
import close from '../assets/share/close.svg';
import Card from './Card';
import { getSamepleUserInfo } from '../apis/api';
import { useLocation } from 'react-router-dom';

interface folderLinkInfoProps {
  createdAt: Date | undefined;
  created_at: Date | undefined;
  description: string | null;
  imageSource: string | undefined;
  image_source: string | null;
  url: string | null;
}

interface FolderInfo {
  folderName: string;
  folderOwner: string;
  folderOwnerImg: string;
  folderLinks: folderLinkInfoProps[];
}

const Shared = () => {
  const [folderInfo, setFolderInfo] = useState<FolderInfo | null>(null);
  const location = useLocation();

  const handleLoadFolderInfo = async () => {
    try {
      const folderInfo = await getSamepleUserInfo();
      console.log(folderInfo);
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
      {folderInfo ? (
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
            <Card
              folderLinkInfo={folderInfo.folderLinks}
              location={location.pathname}
            />
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
