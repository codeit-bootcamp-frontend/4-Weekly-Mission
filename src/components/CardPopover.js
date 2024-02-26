import '../styles/CardPopover.css';

const CardPopover = () => {

  return (
    <div className="card-popover">
      <div className="card-popover-menu">
        <p>삭제하기</p>
      </div>
      <div className="card-popover-menu">
        <p>폴더에 추가</p>
      </div>
    </div>
  );
}

export default CardPopover;