import "./CardDescription.css";

const CardText = ({ time, text, date }) => {
  return (
    <div className="CardDescription">
      <span className="Card-time">{time}</span>
      <p className="Card-text">{text}</p>
      <span className="Card-date">{date}</span>
    </div>
  );
};

export default CardText;
