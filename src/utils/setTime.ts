export function setTime(date: string) {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  if (minutes < 2) {
    return "1 minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 2) {
    return "1 hour ago";
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 2) {
    return "1 day ago";
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 2) {
    return "1 month ago";
  } else if (months < 12) {
    return `${months} months ago`;
  } else if (years < 2) {
    return "1 year ago";
  } else {
    return `${years} years ago`;
  }
}
