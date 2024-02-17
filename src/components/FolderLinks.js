import React, { useEffect, useState } from 'react';
import { calculateTimePassed, formatDate } from '../utils/dateUtils';
import ActionContainer from './ActionContainer';
import '../style/folderContent.css';
import addIcon from '../images/kebab.svg';
import starIcon from '../images/star.svg';
import noImgIcon from '../images/noCardImg.png';
import FolderCategoryButtons from './FolderCategoryButtons';

const FolderLinks = ({ folders, links, onFolderClick }) => {
  const [selectedFolderName, setSelectedFolderName] = useState('전체');
  const excludeFirstLinks = links.slice(1);

  const allLinks = excludeFirstLinks.map((link) => ({
    ...link,
    timePassed: calculateTimePassed(link.created_at),
    formattedDate: formatDate(link.created_at),
  }));

  useEffect(() => {
    onFolderClick('all');
  }, []);

  const handleFolderClick = (folderId) => {
    onFolderClick(folderId);
    const folderName =
      folderId === 'all'
        ? '전체'
        : folders.find((folder) => folder.id === folderId)?.name || '폴더없음';

    setSelectedFolderName(folderName);
    onFolderClick(folderId);
  };

  const renderLinkCards = () =>
    allLinks.map((link) => (
      <a
        key={link.id}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-card"
      >
        <div className="card-image-container">
          <img
            src={link.image_source || noImgIcon}
            alt={link.title}
            className="card-image"
          />
          <button className="favorite-icon">
            <img src={starIcon} alt="즐겨찾기" />
          </button>
        </div>
        <div className="card-text-container">
          <div className="card-content">
            <span className="time-passed">{link.timePassed}</span>
            <p className="link-description">{link.description}</p>
            <span className="date-number">{link.formattedDate}</span>
          </div>
          <button className="kebab-menu-icon">
            <img src={addIcon} alt="메뉴" />
          </button>
        </div>
      </a>
    ));

  return (
    <div>
      <FolderCategoryButtons
        folders={folders}
        handleFolderClick={handleFolderClick}
      />

      <div className="links-container-box">
        {links.length === 0 ? (
          <div className="links-container-empty">저장된 링크가 없습니다.</div>
        ) : (
          <div className="links-container">
            <ActionContainer folderName={selectedFolderName} />
            {renderLinkCards()}
          </div>
        )}
      </div>
    </div>
  );
};

export default FolderLinks;
