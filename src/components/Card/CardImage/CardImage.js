import "./CardImage.css";

const CardImage = () => {
  return (
    <div
      style={{ backgroundImage: `url(image/thumbnail/card-default.png)` }}
      className="CardImage"
      alt="Card image"
    />
  );
};

export default CardImage;
