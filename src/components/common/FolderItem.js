import { useState } from "react";
import { CalcTime } from "../../calculator";
import SharedSection from "./../components/shared/SharedSection";
import FolderItem from "../components/shared/FolderItem";
import FolderList from "../components/shared/FolderList"

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
            <div className="folderImageBox">
            <img
              src={imageSource}
              alt={id}
              className={`folderImage ${isHovering ? "grow" : "folder-img"}`}
            ></img>
            <Star className="star" fill="purple" />
          </div>
          ) : (
            <p>no image</p>
          )}
        </div>
        <div className="folder-textBox">
            <div className="time-kebab">
                <p id="time">{time}</p>
                <Kebab />
            </div>
          <p id="info">{description}</p>
          <p id="date">2023. 3. 15</p>
        </div>
      </div>
    </a>
  );
}

export default FolderItem;