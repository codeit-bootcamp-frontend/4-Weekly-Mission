import React from "react";
import "./CardPopover.css";

interface Props {
  changeLinkDeleteSelect: () => void;
  changeFolderAddSelect: () => void;
}

function CardPopover({ changeLinkDeleteSelect, changeFolderAddSelect }: Props) {
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    changeLinkDeleteSelect();
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    changeFolderAddSelect();
  };

  return (
    <div className="CardPopover">
      <div className="each_popover" onClick={handleDeleteClick}>
        삭제하기
      </div>
      <div className="each_popover" onClick={handleAddClick}>
        폴더에 추가
      </div>
    </div>
  );
}

export default CardPopover;
