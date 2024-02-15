import "./CardContent.css";
import { getElapsedTime } from "../../../utils/getElapsedTime";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export const CardContent = ({ items, isZoomedIn }) => {
  const { createdAt, description } = items;
  const className = isZoomedIn ? "card-text card-text-hovered" : "card-text";

  return (
    <div className={className}>
      <p className="card-text-time-ago">{getElapsedTime(createdAt)}</p>
      <p className="card-text-description">{description}</p>
      <p className="card-text-date">{formatDate(createdAt)}</p>
    </div>
  );
};
