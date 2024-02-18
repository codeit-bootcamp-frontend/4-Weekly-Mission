import { useState, useEffect } from 'react';

import { getLink, getLinkDetail } from './apis/api';

import SearchBar from './components/SearchBar';
import Card from './components/Card';
import FolderEdit from './components/FolderEdit';
import FolderList from './components/FolderList';
import FolderAddBtn from './components/FolderAddBtn';
import './Folder.css';

const TOTAL_LIST = '전체';

const Folder = ({folderLists}) => {
  const [folders, setFolders] = useState([]);
  const [currentfolderList, setCurrrentFolderList] = useState();

  const handleTotalListClick = async () => {
    const { data } = await getLink();

    setFolders(data);
    setCurrrentFolderList(TOTAL_LIST);
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
      <div className='container-folder-and-cards'>
        <FolderList 
          folderLists={folderLists}
          totalHandler={handleTotalListClick}
          listHandler={handleListClick}
        />
        <div className='container-folder-edit'>
          <span>{currentfolderList}</span>
          <FolderEdit folderList={currentfolderList} />
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