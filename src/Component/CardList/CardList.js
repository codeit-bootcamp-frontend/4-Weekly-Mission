import { useRef } from "react";
import { getElapsedTime } from "../../util/getElapsedTime";
import "./CardList.css";

export const CardList = ({ description, createdAt, imageSource }) => {

  const elapsedTime = getElapsedTime(createdAt);

  const cardRef = useRef();

  const handleMouseOver = () => {
    cardRef.current.classList.add("hover");
  };

  const handleMouseOut = () => {
    cardRef.current.classList.remove("hover");
  };

  return (
    <div
      className="Card"
      ref={cardRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div 
        className="Card-image"
        style={{ backgroundImage: `url(${imageSource ?? "images/card-default.png"})` }}
        alt="card-image"
      >
      </div>
      <div className="Card-content">
        <span className="Card-content-elapsedTime">{elapsedTime}</span>
        <p className="Card-content-description">{description}</p>
        <span className="Card-content-createdAt">{createdAt.split("T", 1)}</span>
      </div>
    </div>
  );
};
