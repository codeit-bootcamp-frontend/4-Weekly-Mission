import React, { useEffect, useState } from 'react';
import '../style/Folder.css';
import close from '../assets/folder/close.svg';
import Card from './Card';
import { getFolderInfo } from '../apis/api';

const Folder = () => {
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
    <div className='FolderContainer'>
      <div className='FolderTitle'>
        <form className='FolderLinkAddContent'>
          <div>
            <input placeholder='링크를 추가해 보세요' />
          </div>
          <button>추가하기</button>
        </form>
      </div>
      <div className='FolderMain'>
        <form className='FolderLinkSerachContent'>
          <div>
            <input placeholder='링크를 검색해 보세요' />
          </div>
          <img src={close} alt='close img' />
        </form>
        {/* <div className='FolderLinkNoneList'>
          <p>저장된 링크가 없습니다</p>
        </div> */}
        <div className='FolderLinkSaveList'>
          <div className='LinkSaveListCategory'>
            <div className='CategoryContent'>
              <button>전체</button>
              <button>⭐️ 즐겨찾기</button>
              <button>코딩 팁</button>
              <button>채용 사이트</button>
              <button>유용한 글</button>
              <button>나만의 장소</button>
            </div>
            <button>폴더 추가</button>
          </div>
          <div className='LinkSaveListTitle'>
            <h1>유용한 글</h1>
            <div className='OptionContent'>
              <button>공유</button>
              <button>이름 변경</button>
              <button>삭제</button>
            </div>
          </div>
          <div className='LinkSaveListContent'>
            <Card folderLinkInfo={folderInfo.folderLinks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
