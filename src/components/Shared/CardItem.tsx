import logoImg from '../../assets/images/logo.png';
import caculateTime from '../../utils/caculateTime';
import formatDate from '../../utils/formatDate';

interface Link {
  createdAt: string;
  description: string;
  imageSource: string;
  title: string;
  url: string;
}
interface CardItemProps {
  link: Link;
  searchItem: string;
}

const CardItem = ({ link, searchItem }: CardItemProps) => {
  if (!link) return null;
  const { createdAt, description, imageSource, title, url } = link;

  const isSearchedLink = () => {
    if (url && title && description) {
      return (
        url.includes(searchItem) ||
        title.includes(searchItem) ||
        description.includes(searchItem)
      );
    }
  };

  if (searchItem && !isSearchedLink()) {
    return null;
  }
  return (
    <div className="card">
      <a href={url} target="_blank" rel="noreferrer">
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
          <h3 id="card-date">{formatDate(new Date(createdAt))}</h3>
        </div>
      </a>
    </div>
  );
};

export default CardItem;
