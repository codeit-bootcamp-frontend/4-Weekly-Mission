import "./CardList.css";

export const CardList = () => {
  return (
    <div className="CardList">
      <div className="Card">
        <div
          style={{ backgroundImage: `url(image/thumbnail/card-default.png)` }}
          className="CardImage"
          alt="Card image"
        />
      </div>
    </div>
  );
};

export default CardList;
