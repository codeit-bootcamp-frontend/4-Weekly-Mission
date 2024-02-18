import { useState, useEffect } from 'react';

import { getFolderList, getLink, getLinkDetail } from './apis/api';
import shareImg from './assets/folder/share.svg';
import renameImg from './assets/folder/pen.svg';
import deleteImg from './assets/folder/delete.svg';

import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Folder.css';

const FOLDER_EDITS = Object.freeze([
  { src: shareImg, name: "공유" },
  { src: renameImg, name: "이름변경" },
  { src: deleteImg, name: "삭제" },
]);

const Folder = () => {
  const [folderLists, setFolderLists] = useState([]); // 이건 부모 컴포넌트에서 넘겨주는 게 좋을 듯
  const [folders, setFolders] = useState([]);
  const [curfolderList, setCurFolderList] = useState();

  const handleTotalListClick = async () => {
    const { data } = await getLink();

    setFolders(data);
    setCurFolderList('전체');
  }

  const handleListClick = async (folderName, folderId) => {
    const { data } = await getLinkDetail(folderId);

    setFolders(data);
    setCurFolderList(folderName);
  }

  useEffect(() => {
    const fetchFolderList = async () => {
      const { data } = await getFolderList();

      setFolderLists(data);
    };

    fetchFolderList();
  }, []);

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
            <span>{curfolderList}</span>
            {curfolderList === '전체' ? (
            <></>
            ) : (
              <div className='folder-edits'>
                {FOLDER_EDITS.map(({ src, name }) => (
                  <div className='folder-edit'>
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
    </div>
  )
}

export default Folder;