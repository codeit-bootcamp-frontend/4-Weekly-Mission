import "./Card.css";

const Card = ({ children, onMouseOver, onMouseLeave }) => {
  return (
    <div className="Card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};

export default Card;
