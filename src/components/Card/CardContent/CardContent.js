import "./CardContent.css";
import { getElapsedTime } from "../../../utils/getElapsedTime";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export const CardContent = ({ items, isZoomedIn }) => {
  const { createdAt: created_at, created_at: createdAt, description } = items;
  const createdAtValue = createdAt || created_at;
  const className = isZoomedIn ? "card-text card-text-hovered" : "card-text";

  return (
    <div className={className}>
      <p className="card-text-time-ago">{getElapsedTime(createdAtValue)}</p>
      <p className="card-text-description">{description}</p>
      <p className="card-text-date">{formatDate(createdAtValue)}</p>
    </div>
  );
};
