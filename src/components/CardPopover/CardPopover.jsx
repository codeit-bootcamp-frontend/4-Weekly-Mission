import "./CardPopover.css";

function CardPopover({ changeLinkDeleteSelect }) {
  const handleDeleteClick = (e) => {
    e.preventDefault();
    changeLinkDeleteSelect();
  };

  return (
    <div className="CardPopover">
      <div className="each_popover" onClick={handleDeleteClick}>
        삭제하기
      </div>
      <div className="each_popover">폴더에 추가</div>
    </div>
  );
}

export default CardPopover;
