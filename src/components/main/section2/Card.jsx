import './Card.css';

function Card({ cardData }) {
  const src = cardData.imageSource;
  return (
    <div className="cardimg-wrapper">
      <img className="cardimg" src={src} alt={`card${cardData.id}`} />
    </div>
  );
}

export default Card;
