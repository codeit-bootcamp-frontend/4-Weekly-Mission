import "./CardWrapper.css";

const Card = ({ children, onMouseOver, onMouseLeave }) => {
  return (
    <div className="card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};

export default Card;
