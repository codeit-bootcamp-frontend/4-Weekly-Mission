import { KebabMenu } from "../../Folder/components/KebabMenu/KebabMenu";
import "./CardContent.css";
import { useState } from "react";
import { MouseEvent } from "react";
import { FolderListDataForm } from "interface/DataForm";

interface CardContentProps {
  elapsedTime: string;
  description: string;
  createdAt: string;
  isHovered: boolean;
  currentLocation: string;
  selectURL: string;
  data: FolderListDataForm[];
}

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
  currentLocation,
  selectURL,
  data,
}: CardContentProps) => {
  const [isOpened, setIsClick] = useState(false);
  const className = isHovered
    ? "CardContent CardContent-hovered"
    : "CardContent";

  const handleClickMenu = (e: MouseEvent<HTMLButtonElement>) => {
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
        {isOpened && <KebabMenu selectURL={selectURL} data={data} />}
      </div>

      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{createdAt}</span>
    </div>
  );
};
