import './Card.css';

function Card({ item = {} }) {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__image__container">
          <img
            className="card__image"
            src={item.imageSource}
            alt={item.title}
          />
        </div>
        <div className="card__info">
          <div className="info">
            <header className="info__header">
              <div className="info__time">{item.createdAt}</div>
            </header>
            <div className="info__content">
              <div className="info__description">{item.description}</div>
            </div>
            <footer className="info__footer">{item.createdAt}</footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
