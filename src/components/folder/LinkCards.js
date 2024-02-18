import React from 'react';
import addIcon from '../../images/kebab.svg';
import starIcon from '../../images/star.svg';
import noImgIcon from '../../images/noCardImg.png';
import '../../style/folderContent.css';

const LinkCard = ({ link }) => {
  return (
    <a
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
  );
};

const LinkCards = ({ allLinks }) => {
  return allLinks.map((link) => <LinkCard key={link.id} link={link} />);
};

export default LinkCards;
