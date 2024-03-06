import { KebabMenu } from "ui/KebabMenu/KebabMenu";
import "./CardContent.css";
import { useState } from "react";

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
  currentLocation,
  deleteURL,
}) => {
  const [isOpened, setIsClick] = useState(false);
  const className = isHovered
    ? "CardContent CardContent-hovered"
    : "CardContent";

  const handleClickMenu = (e) => {
    e.preventDefault();
    setIsClick(isOpened === false ? true : false);
  };

  return (
    <div className={className}>
      <div className="CardContent-time-kebab">
        <span className="CardContent-elapsed-time">{elapsedTime}</span>
        {currentLocation === "/folder" && (
          <button
            type="button"
            className="CardContent-kebab-button"
            onClick={handleClickMenu}
          />
        )}
        {isOpened && <KebabMenu deleteURL={deleteURL} />}
      </div>

      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{createdAt}</span>
    </div>
  );
};
