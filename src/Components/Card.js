import "./css/Card.css";

const Card = ({ cardImage }) => {
  return (
    <div className="Card">
      <img src={cardImage} alt="cardImage" className="card-image" />
      <div className="card-txt">
        <div className="font-thin font-13px" style={{ color: "#666666" }}>
          10 minutes ago
        </div>
        <div className="card-contents font-thin font-16px">
          Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
          consequat.
        </div>
        <div className="font-thin font-14px" style={{ color: "#333333" }}>
          2023. 3. 15
        </div>
      </div>
    </div>
  );
};

export default Card;
