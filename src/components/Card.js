import '../styles/card.css';
function Card(time, imgUrl, title, description, date) {
  return (
    <div className="card">
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
