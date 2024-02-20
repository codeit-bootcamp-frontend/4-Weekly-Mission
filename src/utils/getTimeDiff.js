function getTimeDiff(date) {
  const today = new Date();
  const targetDate = new Date(date);
  const minute = Math.floor((today - targetDate) / (1000 * 60));
  const hour = Math.floor((today - targetDate) / (1000 * 60 * 60));
  const day = Math.floor((today - targetDate) / (1000 * 60 * 60 * 24));
  const month = Math.floor((today - targetDate) / (1000 * 60 * 60 * 24 * 30));
  const year = Math.floor((today - targetDate) / (1000 * 60 * 60 * 24 * 30 * 12));
  if (minute < 2) {
    return '1 minute ago';
  } else if (minute <= 59) {
    return `${minute} minutes ago`;
  } else if (hour < 2) {
    return '1 hour ago';
  } else if (hour <= 23) {
    return `${hour} hours ago`;
  } else if (day < 2) {
    return '1 day ago';
  } else if (day <= 30) {
    return `${day} days ago`;
  } else if (month < 2) {
    return '1 month ago';
  } else if (month <= 11) {
    return `${month} months ago`;
  } else if (year < 2) {
    return '1 year ago';
  } else {
    return `${year} years ago`;
  }
}

export default getTimeDiff;
