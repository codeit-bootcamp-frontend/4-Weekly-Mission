import useFetchCardsData from '../hooks/useFetchCardsData';
import noCardImg from '../images/no-image.svg';
// import loadingImg from '../images/loading-spinner.svg';

function CardListItem() {
  const data = useFetchCardsData();
  const handleImageError = (e) => {
    e.target.src = { noCardImg };
  };

  return (
    <div className="cards-container">
      {data.map((cardData) => (
        <a
          key={cardData.id}
          href={cardData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
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
        </a>
      ))}
    </div>
  );
}

export default CardListItem;
