import './card.css';
import nonepage from '../../assets/images/folderImgNone.png';
import { getRelativeTime, formatDateString } from '../../utils/timeUtils';

const CardGrid = ({ links }) => {
  const handleClickOpenLink = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card-grid">
      {links.map(link => (
        <article
          key={link.id}
          className="card-link-list"
          onClick={() => handleClickOpenLink(link.url)}
        >
          <img
            src={link.imageSource || nonepage}
            alt={link.title}
            className="card-link-image"
          />
          <section className="card-link-content">
            <time className="card-link-timeago" dateTime={link.createdAt}>
              {getRelativeTime(link.createdAt)}
            </time>
            <p className="card-link-description">{link.description}</p>
            <time className="card-link-datestring" dateTime={link.createdAt}>
              {formatDateString(link.createdAt)}
            </time>
          </section>
        </article>
      ))}
    </div>
  );
};

export default CardGrid;
