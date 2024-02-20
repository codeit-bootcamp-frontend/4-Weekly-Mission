import '../styles/LinkCard.css';
import star from '../assets/star.svg';
import kebab from '../assets/kebab.svg';
import { dateFormat, getElapsedTimeMessage } from '../util/date';

function LinkCard({ url, createdAt, desc, imgUrl }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-card-area">
      <div className="img-group">
        {imgUrl ? <img src={imgUrl} alt="미리보기" className="img-card" /> : <div className="img-card no-img" />}
        <button className="btn-star">
          <img src={star} alt="별모양" />
        </button>
      </div>
      <div className="card-info-group">
        <div className="time-info-group">
          <p className="elapsed-time">{getElapsedTimeMessage(createdAt)}</p>
          <button className="more">
            <img src={kebab} alt="더보기" />
          </button>
        </div>
        <p className="desc">{desc}</p>
        <p className="date">{dateFormat(createdAt)}</p>
      </div>
    </a>
  );
}

export default LinkCard;
