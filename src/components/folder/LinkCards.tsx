import React, { useState } from 'react';

import addIcon from '../../images/kebab.svg';
import starIcon from '../../images/star.svg';
import noImgIcon from '../../images/noCardImg.png';
import '../../style/folderContent.css';
import KebabMenu from './KebabMenu';

interface Link {
  id: string;
  title: string;
  url: string;
  image_source?: string;
  description: string;
  created_at: Date;
  timePassed: string;
  formattedDate: string;
}

interface LinkCardProps {
  link: Link;
  setModalState: any; 
}


const LinkCard = ({ link, setModalState }: LinkCardProps) => {
  const [kebabVisible, setKebabVisible] = useState<boolean>(false);

  const toggleKebab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setKebabVisible(!kebabVisible);
  };

  const handleLinkClick = () => {
    window.open(link.url, '_blank');
  };
  return (
    <div className="link-card" onClick={handleLinkClick}>
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
        <button className="kebab-menu-icon" onClick={toggleKebab}>
          <img src={addIcon} alt="메뉴" />
        </button>
        {kebabVisible && (
          <KebabMenu setModalState={setModalState} link={link} />
        )}
      </div>
    </div>
  );
};

interface LinkCardsProps {
  allLinks: Link[];
  setModalState: any;
}

const LinkCards = ({ allLinks, setModalState }: LinkCardsProps) => {
  return allLinks.map((link) => (
    <LinkCard key={link.id} link={link} setModalState={setModalState} />
  ));
};

export default LinkCards;
