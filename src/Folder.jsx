import { useState, useEffect } from 'react';

import { getLink, getLinkDetail } from './apis/api';

import SearchBar from './components/SearchBar';
import Card from './components/Card';
import FolderEdit from './components/FolderEdit';
import FolderList from './components/FolderList';
import FolderAddBtn from './components/FolderAddBtn';
import './Folder.css';

const TOTAL_LIST_NAME = '전체';

const Folder = ({folderList}) => {
  const [folders, setFolders] = useState([]);
  const [currentfolderName, setCurrrentFolderName] = useState(TOTAL_LIST_NAME);

  const handleTotalListClick = async () => {
    const { data } = await getLink();

    setFolders(data);
    setCurrrentFolderName(TOTAL_LIST_NAME);
  }

  const handleListClick = async (folderName, folderId) => {
    const { data } = await getLinkDetail(folderId);

    setFolders(data);
    setCurrrentFolderName(folderName);
  }

  useEffect(() => {
    handleTotalListClick();
  }, []);

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      <div className='container-folder-and-cards'>
        <FolderList 
          folderList={folderList}
          totalHandler={handleTotalListClick}
          listHandler={handleListClick}
        />
        <div className='container-folder-edit'>
          <span>{currentfolderName}</span>
          <FolderEdit folderName={currentfolderName} />
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
      <FolderAddBtn />
    </div>
  )
}

export default Folder;