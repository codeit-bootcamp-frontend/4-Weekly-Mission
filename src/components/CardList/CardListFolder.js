import { useRef } from "react";
import { getElapsedTime } from "../../utils/getElapsedTime";
import { AddRemoveButton } from "../AddRemoveButton/AddRemoveButton";
import "./CardList.css";

export const CardListFolder = ({ description, created_at, image_source }) => {
  const elapsedTime = getElapsedTime(created_at);

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
        style={{
          backgroundImage: `url(${image_source ?? "images/card-default.png"})`,
        }}
        alt="card-image"
      ></div>
      <div className="Card-content">
        <div className="Card-content-menu">
          <span className="Card-content-elapsedTime">{elapsedTime}</span>
          <AddRemoveButton />
        </div>
        <p className="Card-content-description">{description}</p>
        <span className="Card-content-createdAt">
          {created_at.split("T", 1)}
        </span>
      </div>
    </div>
  );
};
