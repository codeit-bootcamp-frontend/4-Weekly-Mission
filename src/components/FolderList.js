import LinkSearchBar from './LinkSearchBar';
import '../styles/folderList.css';
import { useState, useEffect } from 'react';
import FolderSortBar from '../pages/FolderPage/components/FolderSortBar';
import FolderOptionBar from '../pages/FolderPage/components/FolderOptionBar';
import { USERS_LINKS_URL, USERS_FOLDERS_URL } from '../constants/urls';
import Card from './Card';
import useLinksData from '../hooks/useLinksData';
import useFoldersData from '../hooks/useFoldersData';
function FolderList() {
  const [selectedFolder, setSelectedFolder] = useState({ id: 1, name: '전체' });
  const [linksFetchUrl, setLinksFetchUrl] = useState(USERS_LINKS_URL);
  const [foldersFetchUrl, setFoldersFetchUrl] = useState(USERS_FOLDERS_URL);
  const links = useLinksData(linksFetchUrl);
  const folders = useFoldersData(foldersFetchUrl);

  const handleSortButtonClick = (newSelectedFolder) => {
    setSelectedFolder(newSelectedFolder);
    const query =
      newSelectedFolder.id == 1 ? '' : `?folderId=${newSelectedFolder.id}`;
    setLinksFetchUrl(USERS_LINKS_URL + query);
  };

  return (
    <div className="folders-container">
      <div className="folders">
        <LinkSearchBar></LinkSearchBar>
        <div className="folder-list">
          <FolderSortBar
            folders={folders}
            handleClick={handleSortButtonClick}
            selectedId={selectedFolder.id}
          ></FolderSortBar>
          <FolderOptionBar text={selectedFolder.name}></FolderOptionBar>
          {links.length == 0 ? (
            <div className="none-list">
              <p className="none-list__text">저장된 링크가 없습니다</p>
            </div>
          ) : (
            <div className="folder-list__links">
              {links.map((card) => (
                <Card
                  key={card.id}
                  time={card.lastTimeString}
                  imgUrl={card.imgUrl}
                  title={card.title}
                  description={card.description}
                  date={card.uploadDate}
                  url={card.url}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default FolderList;
