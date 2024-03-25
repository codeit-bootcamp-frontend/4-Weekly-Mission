export function getTimeAgo(targetDate: any) {
  const now = new Date();
  const createdDate = new Date(targetDate);

  const timeDiff = now.getTime() - createdDate.getTime();
  const minutes = Math.floor(timeDiff / (1000 * 60));
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

  if (minutes < 2) {
    return "1 minute ago";
  } else if (minutes <= 59) {
    return `${minutes} minutes ago`;
  } else if (hours < 1) {
    return "1 hour ago";
  } else if (hours <= 23) {
    return `${hours} hours ago`;
  } else if (days < 1) {
    return "1 day ago";
  } else if (days <= 30) {
    return `${days} days ago`;
  } else if (months < 1) {
    return "1 month ago";
  } else if (months <= 11) {
    return `${months} months ago`;
  } else if (years < 1) {
    return "1 year ago";
  } else {
    const roundedYears = Math.floor(months / 12);
    return `${roundedYears} years ago`;
  }
}
