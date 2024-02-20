import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getElapsedTime } from "../../../utils/getElapsedTime";
import { formatDate } from "../../../utils/formatDate";
import "./CardContent.css";

export const CardContent = ({ items, isZoomedIn, handleLinkClick }) => {
  const [showOptions, setShowOptions] = useState(false);

  const location = useLocation();

  const isFolderPage = location.pathname === "/folder";
  const kebabClassName = isFolderPage
    ? "card-text-kebabIcon"
    : "none-card-text-kebabIcon";

  const { createdAt, created_at, description } = items;
  const createdAtValue = createdAt || created_at;
  const className = isZoomedIn ? "card-text card-text-hovered" : "card-text";

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    console.log(showOptions);
  };

  return (
    <div className={className}>
      <div className="card-text-top">
        <p className="card-text-time-ago">{getElapsedTime(createdAtValue)}</p>
        <div
          className={kebabClassName}
          onClick={(e) => {
            handleLinkClick(e);
            toggleOptions();
          }}
        ></div>
      </div>
      {showOptions && (
        <div className="card-options">
          <button className="card-options-deleteButton" onClick={toggleOptions}>
            삭제하기
          </button>
          <button className="card-options-AddButton" onClick={toggleOptions}>
            폴더에 추가
          </button>
        </div>
      )}
      <p className="card-text-description">{description}</p>
      <p className="card-text-date">{formatDate(createdAtValue)}</p>
    </div>
  );
};
