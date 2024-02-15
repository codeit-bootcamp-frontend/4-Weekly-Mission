import './Card.css';

function Card({ cardData }) {
  const src = cardData.imageSource;
  return (
    <div className="cardimg-wrapper">
      {src ? (
        <img className="cardimg" src={src} alt={`card${cardData.id}`} />
      ) : (
        <img className="cardimg sample" src="" alt={`card${cardData.id}`} />
      )}
    </div>
  );
}

export default Card;
