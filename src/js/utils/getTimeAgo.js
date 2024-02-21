export function getTimeAgo(createdAt) {
  const createdAtDate = new Date(createdAt);
  const now = new Date();
  const diff = Math.floor((now - createdAtDate) / 1000);
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (diff < 2 * minute) {
    return "1 minute ago";
  }
  if (diff < hour) {
    return `${Math.floor(diff / minute)} minutes ago`;
  }
  if (diff < day) {
    return `${Math.floor(diff / hour)} hours ago`;
  }
  if (diff < month) {
    return `${Math.floor(diff / day)} days ago`;
  } else if (diff < year) {
    return `${Math.floor(diff / month)} months ago`;
  } else {
    const years = Math.floor(diff / year);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
}
