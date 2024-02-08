import "./FolderList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function formatTimeDifference(value) {
  const now = new Date();
  const diffInMilliseconds = now - new Date(value);

  // Milliseconds in different units
  const minuteInMilliseconds = 60 * 1000;
  const hourInMilliseconds = 60 * minuteInMilliseconds;
  const dayInMilliseconds = 24 * hourInMilliseconds;
  const monthInMilliseconds = 30 * dayInMilliseconds;
  const yearInMilliseconds = 365 * dayInMilliseconds;

  // Calculate differences in different units
  const diffInMinutes = Math.floor(diffInMilliseconds / minuteInMilliseconds);
  const diffInHours = Math.floor(diffInMilliseconds / hourInMilliseconds);
  const diffInDays = Math.floor(diffInMilliseconds / dayInMilliseconds);
  const diffInMonths = Math.floor(diffInMilliseconds / monthInMilliseconds);
  const diffInYears = Math.floor(diffInMilliseconds / yearInMilliseconds);

  // Format the time difference based on the rules
  if (diffInMinutes < 2) {
    return "1 minute ago";
  } else if (diffInMinutes <= 59) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 1) {
    return "1 hour ago";
  } else if (diffInHours <= 23) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays < 1) {
    return "1 day ago";
  } else if (diffInDays <= 30) {
    return `${diffInDays} days ago`;
  } else if (diffInMonths < 1) {
    return "1 month ago";
  } else if (diffInMonths <= 11) {
    return `${diffInMonths} months ago`;
  } else if (diffInYears < 1) {
    return "1 year ago";
  } else {
    const yearsAgo = Math.floor(diffInMonths / 12);
    return `${yearsAgo} years ago`;
  }
}

function FolderListItem({ item }) {
  const { title, createdAt, url, description, imageSource } = item;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={imageSource} className="card-box-img" />
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
