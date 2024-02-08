import "./FolderList.css";
import noImage from "../assets/noImage.svg";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function formatTimeDifference(value) {
  const now = new Date();
  const diffInMilliseconds = now - new Date(value);

  const units = [
    { label: "year", duration: 365 * 24 * 60 * 60 * 1000 },
    { label: "month", duration: 30 * 24 * 60 * 60 * 1000 },
    { label: "day", duration: 24 * 60 * 60 * 1000 },
    { label: "hour", duration: 60 * 60 * 1000 },
    { label: "minute", duration: 60 * 1000 },
  ];

  for (const unit of units) {
    const diffInUnit = Math.floor(diffInMilliseconds / unit.duration);

    if (diffInUnit === 1) {
      return `1 ${unit.label} ago`;
    } else if (diffInUnit > 1) {
      return `${diffInUnit} ${unit.label}s ago`;
    }
  }
}

function FolderListItem({ item }) {
  const { title, createdAt, url, description, imageSource } = item;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {imageSource ? (
        <img src={imageSource} className="card-box-img" alt="" />
      ) : (
        <img src={noImage} className="card-box-img" alt="" />
      )}
      <div className="text-container">
        <p className="time-difference">{formatTimeDifference(createdAt)}</p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="date"> {formatDate(createdAt)}</p>
      </div>
    </a>
  );
}

function FolderList({ items }) {
  return (
    <div className="card-container-center">
      <div className="card-container">
        {items.map((item) => (
          <div key={item.id} className="card-box">
            <FolderListItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FolderList;
