export function getRelativeTime(createdAt) {
  const currentDate = new Date();
  const createdAtDate = new Date(createdAt);
  const secondsElapsed = (currentDate - createdAtDate) / 1000;

  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 30;
  const YEAR = DAY * 365;

  if (secondsElapsed < 2 * MINUTE) {
    return '1 minute ago';
  }
  if (secondsElapsed < HOUR) {
    const minutes = Math.floor(secondsElapsed / MINUTE);
    return `${minutes} minutes ago`;
  }
  if (secondsElapsed < 2 * HOUR) {
    return '1 hour ago';
  }
  if (secondsElapsed < DAY) {
    const hours = Math.floor(secondsElapsed / HOUR);
    return `${hours} hours ago`;
  }
  if (secondsElapsed < 2 * DAY) {
    return '1 day ago';
  }
  if (secondsElapsed < MONTH) {
    const days = Math.floor(secondsElapsed / DAY);
    return `${days} days ago`;
  }
  if (secondsElapsed < 2 * MONTH) {
    return '1 month ago';
  }
  if (secondsElapsed < YEAR) {
    const months = Math.floor(secondsElapsed / MONTH);
    return `${months} months ago`;
  }
  const years = Math.floor(secondsElapsed / YEAR);
  return years === 1 ? '1 year ago' : `${years} years ago`;
}

export function formatDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}. ${month}. ${day}`;
}
