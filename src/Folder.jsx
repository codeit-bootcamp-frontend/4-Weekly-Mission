import { useState, useEffect } from 'react';

import { getLink, getLinkDetail } from './apis/api';
import shareImg from './assets/folder/share.svg';
import renameImg from './assets/folder/pen.svg';
import deleteImg from './assets/folder/delete.svg';

import FolderAddBtn from './components/FolderAddBtn';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Folder.css';

const FOLDER_EDITS = Object.freeze([
  { src: shareImg, name: "공유" },
  { src: renameImg, name: "이름변경" },
  { src: deleteImg, name: "삭제" },
]);

const Folder = ({folderLists}) => {
  const [folders, setFolders] = useState([]);
  const [currentfolderList, setCurrrentFolderList] = useState();

  const handleTotalListClick = async () => {
    const { data } = await getLink();

    setFolders(data);
    setCurrrentFolderList('전체');
  }

  const handleListClick = async (folderName, folderId) => {
    const { data } = await getLinkDetail(folderId);

    setFolders(data);
    setCurrrentFolderList(folderName);
  }

  useEffect(() => {
    handleTotalListClick();
  }, []);

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      {folderLists ? (
        <div className='container-folder-and-cards'>
          <div className='container-folder-list'>
            <div className='folder-list'>
              <button className='folder-list_btn' onClick={handleTotalListClick}>전체</button>
              {folderLists.map(({ id, name }) => (
                  <button key={id} className='folder-list_btn' onClick={() => handleListClick(name, id)}>
                    {name}
                  </button>
              ))}
            </div>
          </div>
          <div className='container-folder-edit'>
            <span>{currentfolderList}</span>
            {currentfolderList === '전체' ? (
            <></>
            ) : (
              <div className='folder-edits'>
                {FOLDER_EDITS.map(({ src, name }) => (
                  <div className='folder-edit' key={name}>
                    <img src={src} alt={name}></img>
                    <span className='edit-text'>{name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {folders.length ? (
            <ul className='card-frame_ly'> 
              {folders.map(({ created_at, image_source, title, description, url, id }) => (
                <Card key={id} 
                  imgSrc={image_source}
                  title={title}
                  description={description}
                  createdAt={created_at}
                  url={url}
                />
              ))}
            </ul>
          ) : (
            <div className='card-empty'>저장된 링크가 없습니다</div>
          )}
        </div>
      ) : (
        <div className='card-and-list-empty'>저장된 링크가 없습니다</div>
      )}
      <FolderAddBtn />
    </div>
  )
}

export default Folder;