import "./CardTagButton.css";
import { useState } from "react";

export const CardTagButton = ({ isSelected, name, onClick }) => {
  const [clicked, setClicked] = useState(isSelected);

  const handleClick = () => {
    setClicked(!clicked);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={isSelected ? "tagButtonClicked" : "tagButton"}
    >
      {name}
    </button>
  );
};
