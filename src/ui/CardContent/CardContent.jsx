import "./CardContent.css";

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
  isFolder,
}) => {
  const className = isHovered
    ? "CardContent CardContent-hovered"
    : "CardContent";

  return (
    <div className={className}>
      <div className="CardContent-top">
        <span className="CardContent-elapsed-time">{elapsedTime}</span>
        {isFolder && (
          <button>
            <img className="kebab" src="images/kebab.png" alt="menu" />
          </button>
        )}
      </div>
      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{createdAt}</span>
    </div>
  );
};
