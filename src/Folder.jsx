import { useState } from 'react';

import { getLink, getLinkDetail } from './apis/api';
import { useFetchFolder } from './hooks/useFetchFolder';

import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import FolderEdit from './components/FolderEdit';
import FolderList from './components/FolderList';
import FolderAddBtn from './components/FolderAddBtn';

import './Folder.css';

import { TOTAL_LIST_NAME } from './constants/folder';

const Folder = () => {
  const [folderList, links, setLinks] = useFetchFolder();
  const [currentfolderName, setCurrrentFolderName] = useState(TOTAL_LIST_NAME);

  const handleTotalListClick = async () => {
    const { data } = await getLink();

    setLinks(data);
    setCurrrentFolderName(TOTAL_LIST_NAME);
  }

  const handleListClick = async (folderName, folderId) => {
    const { data } = await getLinkDetail(folderId);

    setLinks(data);
    setCurrrentFolderName(folderName);
  }

  return (
    <div className='container-folder'>
      <SearchBar className='search-bar_ly'/>
      <div className='container-folder-and-cards'>
        <FolderList
          folderList={folderList}
          onTotalListClick={handleTotalListClick}
          onListClick={handleListClick}
        />
        <div className='container-folder-edit'>
          <span>{currentfolderName}</span>
          <FolderEdit folderName={currentfolderName} />
        </div>
        <CardList links={links} folderName={currentfolderName} folderList={folderList}/>
      </div>
      <FolderAddBtn />
    </div>
  )
}

export default Folder;
