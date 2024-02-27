import "./CardPopover.css";

function CardPopover({ changeLinkDeleteSelect, changeFolderAddSelect }) {
  const handleDeleteClick = (e) => {
    e.preventDefault();
    changeLinkDeleteSelect();
  };

  const handleAddClick = (e) => {
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
