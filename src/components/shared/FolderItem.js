import { useState } from "react";
import { CalcTime } from "./../../calculator";

function FolderItem({ item }) {
  const [isHovering, setIsHovering] = useState(false);
  const { imageSource, createdAt, description, url, id } = item;

  const time = CalcTime(createdAt);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div
        className="folder"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="imgBox">
          {imageSource ? (
            <img
              src={imageSource}
              alt={id}
              className={isHovering ? "grow" : "folder-img"}
            ></img>
          ) : (
            <p>no image</p>
          )}
        </div>
        <div className="folder-textBox">
          <p id="time">{time}</p>
          <p id="info">{description}</p>
          <p id="date">2023. 3. 15</p>
        </div>
      </div>
    </a>
  );
}

export default FolderItem;