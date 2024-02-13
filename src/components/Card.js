import '../styles/card.css';
import noneImg from '../assets/noneImg.png';

function Card({ id, time, imgUrl = noneImg, title, description, date, url }) {
  return (
    <a className="card" key={id} href={url} target="_blank" rel="noreferrer">
      <img className="card__img" src={imgUrl} alt={title}></img>
      <div className="card__texts">
        <div className="card__texts--time">{time}</div>
        <p className="card__texts--description">{description}</p>
        <p className="card__texts--date">{date}</p>
      </div>
    </a>
  );
}
export default Card;
