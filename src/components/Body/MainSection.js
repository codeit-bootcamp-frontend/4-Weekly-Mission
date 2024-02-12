function changeDateFormat(date) {
  const newDate = new Date(date);
  return newDate.toDateString();
}

function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 31536000; // 60 * 60 * 24 * 365

  if (interval > 1) {
    const years = Math.floor(interval);
    return years <= 1 ? "1 year ago" : `${Math.floor(years / 12)} years ago`;
  }
  interval = seconds / 2592000; // 60 * 60 * 24 * 30
  if (interval > 1) {
    return interval <= 1 ? "1 month ago" : `${Math.floor(interval)} months ago`;
  }
  interval = seconds / 86400; // 60 * 60 * 24
  if (interval > 1) {
    return interval <= 1 ? "1 day ago" : `${Math.floor(interval)} days ago`;
  }
  interval = seconds / 3600; // 60 * 60
  if (interval > 1) {
    return interval <= 1 ? "1 hour ago" : `${Math.floor(interval)} hours ago`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return `${Math.floor(interval)} minutes ago`;
  }
  return "1 minute ago";
}

function CardData({ data }) {
  const { description, imageSource, createdAt } = data;
  return (
    <div className="card-frame">
      <img className="card-image-size" src={imageSource} alt={imageSource} />
      <div className="card-description-frame">
        <p>{description}</p>
        <p>{changeDateFormat(createdAt)}</p>
        <p>{timeSince(createdAt)}</p>
      </div>
    </div>
  );
}

export function MainSection({ data }) {
  return (
    <div className="main-website-section">
      {data.map((data) => (
        <CardData key={data.id} data={data} />
      ))}
    </div>
  );
}
