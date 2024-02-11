import '../styles/card.css';
function Card({ id, time, imgUrl, title, description, date }) {
  return (
    <div className="card" key={id}>
      <img className="card__img" src={imgUrl} alt={title}></img>
      <div className="card__texts">
        <div className="card__texts--time">{time}</div>
        <p className="card__texts--description">{description}</p>
        <p className="card__texts--date">{date}</p>
      </div>
    </div>
  );
}
export default Card;
