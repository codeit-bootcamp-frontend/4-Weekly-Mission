import "./CardDetail.css";

const CardDetail = ({ passedTime, description, createdAt, isHovered }) => {
  const className = isHovered ? "CardDetail CardDetailHover" : "CardDetail";

  return (
    <div className={className}>
      <span className="CardDetailPassedTime">{passedTime}</span>
      <p className="CardDetailDescription">{description}</p>
      <span className="CardDetailCreatedAt">{createdAt}</span>
    </div>
  );
};

export default CardDetail;
