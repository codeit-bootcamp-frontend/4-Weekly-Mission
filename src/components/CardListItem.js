import useFetchCardsData from '../hooks/useFetchCardsData';
import noCardImg from '../images/no-image.svg';
import { Link } from 'react-router-dom';
// import loadingImg from '../images/loading-spinner.svg';

function CardListItem() {
  const data = useFetchCardsData();
  const handleImageError = (e) => {
    e.target.src = { noCardImg };
  };

  return (
    <div className="cards-container">
      {data.map((cardData) => (
        <Link to={cardData.url}>
          <div key={cardData.id} className="card">
            <img
              src={cardData.imageSource || noCardImg}
              alt={cardData.title}
              className="card-image"
              onError={handleImageError}
            />
            <p className="text-container">
              <span>{cardData.timePassed}</span>
              <p>{cardData.description}</p>
              <p className="date-number">{cardData.formattedDate}</p>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardListItem;
