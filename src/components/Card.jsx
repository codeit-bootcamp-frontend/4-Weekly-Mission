import '../styles/card.css';
import noneImg from '../assets/noneImg.svg';
import starIcon from '../assets/starIcon.svg';
import meatballsIcon from '../assets/meatballsIcon.svg';
import { useState } from 'react';
import PopOver from '../pages/FolderPage/components/PopOver';

function Card({ id, time, imgUrl = noneImg, title, description, date, url }) {
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsPopOverOpen(true);
  };

  return (
    <a className="card" key={id} href={url} target="_blank" rel="noreferrer">
      <div className="card__img">
        <img className="card__img--background" src={imgUrl} alt={title}></img>
        <img className="card__img--star-icon" src={starIcon} alt="Favorites" />
      </div>

      <div className="card__texts">
        <div className="card__texts--time">
          <p>{time}</p>
          <button onClick={handleClick}>
            <img src={meatballsIcon} alt="Menu" />
          </button>
          <PopOver isOpen={isPopOverOpen} />
        </div>
        <p className="card__texts--description">{description}</p>
        <p className="card__texts--date">{date}</p>
      </div>
    </a>
  );
}
export default Card;
