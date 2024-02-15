import '../styles/card.css';
import noneImg from '../assets/noneImg.png';
import starIcon from '../assets/starIcon.svg';
import meatballsIcon from '../assets/meatballsIcon.svg';

function Card({ id, time, imgUrl = noneImg, title, description, date, url }) {
  return (
    <a className="card" key={id} href={url} target="_blank" rel="noreferrer">
      <div className="card__img">
        <img className="card__img--background" src={imgUrl} alt={title}></img>
        <img
          className="card__img--meatsball-icon"
          src={starIcon}
          alt={'Favorites'}
        />
      </div>

      <div className="card__texts">
        <div className="card__texts--time">
          <p>{time}</p>
          <img src={meatballsIcon} alt="Menu"></img>
        </div>
        <p className="card__texts--description">{description}</p>
        <p className="card__texts--date">{date}</p>
      </div>
    </a>
  );
}
export default Card;
