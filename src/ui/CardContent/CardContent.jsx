import "./CardContent.css";

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
}) => {
  const className = isHovered
    ? "CardContent CardContent-hovered"
    : "CardContent";

  return (
    <div className={className}>
      <div className="CardContent-time-kebab">
        <span className="CardContent-elapsed-time">{elapsedTime}</span>
        <button type="button">
          <div className="CardContent-kebab-button" />
        </button>
        <div className="CardContent-kebab-menu">
          <div className="CardContent-kebab-menu-delete">삭제하기</div>
          <div className="CardContent-kebab-menu-addFolder">폴더에 추가</div>
        </div>
      </div>

      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{createdAt}</span>
    </div>
  );
};
