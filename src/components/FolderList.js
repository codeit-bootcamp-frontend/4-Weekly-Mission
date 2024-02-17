import LinkSearchBar from './LinkSearchBar';
import '../styles/folderList.css';
import { useState } from 'react';
import FolderSortBar from '../pages/FolderPage/components/FolderSortBar';
import FolderOptionBar from '../pages/FolderPage/components/FolderOptionBar';
import { USERS_LINKS_URL } from '../constants/urls';
import Card from './Card';
import useLinksData from '../hooks/useLinksData';
function FolderList() {
  const links = useLinksData(USERS_LINKS_URL);

  return (
    <div className="folders-container">
      <div className="folders">
        <LinkSearchBar></LinkSearchBar>
        {links.length == 0 ? (
          <div className="none-list">
            <p className="none-list__text">저장된 링크가 없습니다</p>
          </div>
        ) : (
          <div className="folder-list">
            <FolderSortBar></FolderSortBar>
            <FolderOptionBar></FolderOptionBar>
            <div>
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
          </div>
        )}
      </div>
    </div>
  );
}
export default FolderList;
