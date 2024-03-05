import { KebabMenu } from "ui/KebabMenu/KebabMenu";
import "./CardContent.css";
import { useState } from "react";

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
  currentLocation,
}) => {
  const [isClick, setIsClick] = useState(false);
  const className = isHovered
    ? "CardContent CardContent-hovered"
    : "CardContent";

  const handleClickMenu = () => {
    setIsClick(true);
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
        {isClick && <KebabMenu />}
      </div>

      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{createdAt}</span>
    </div>
  );
};
