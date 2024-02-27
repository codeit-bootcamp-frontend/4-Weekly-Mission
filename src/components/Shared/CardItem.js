import logoImg from '../../assets/images/logo.png';
import caculateTime from '../../utils/caculateTime';
import formatDate from '../../utils/formatDate';

const CardItem = ({ link }) => {
  const { createdAt, description, imageSource, title, url } = link;

  return (
    <div className="card">
      <a href={url} target="_blank">
        {imageSource ? (
          <div className="card-img">
            <img id="img-logo" src={imageSource} alt={title} />
          </div>
        ) : (
          <div className="card-img no-img">
            <img id="no-img-logo" src={logoImg} alt="noImg" />
          </div>
        )}
        <div className="card-contents">
          <h3 id="card-created-time">{caculateTime(createdAt)}</h3>
          <h2 id="card-description">{description}</h2>
          <h3 id="card-date">{formatDate(createdAt)}</h3>
        </div>
      </a>
    </div>
  );
};

export default CardItem;
