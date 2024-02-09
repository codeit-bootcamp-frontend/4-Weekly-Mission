import "./css/Card.css";

const Card = ({ cardImage = null, cardCreated, cardDescription }) => {
  return (
    <div className="Card">
      <img
        src={cardImage ? cardImage : "images/sample_image.png"}
        alt="cardImage"
        className="card-image"
      />
      <div className="card-txt">
        <div className="font-thin font-13px" style={{ color: "#666666" }}>
          10 minutes ago
        </div>
        <div className="card-contents font-thin font-16px">
          {cardDescription}
        </div>
        <div className="font-thin font-14px" style={{ color: "#333333" }}>
          {cardCreated}
        </div>
      </div>
    </div>
  );
};

export default Card;
