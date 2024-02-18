const MILLI_SECONDS = 1000;
const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

function timeSince(date) {
  const timeDiff = Math.trunc((new Date() - new Date(date)) / MILLI_SECONDS);

  if (timeDiff < 2 * MINUTE) {
    return "1 minute ago";
  } else if (timeDiff < HOUR) {
    return `${Math.trunc(timeDiff / MINUTE)} minutes ago`;
  } else if (timeDiff < 2 * HOUR) {
    return "1 hour age";
  } else if (timeDiff < DAY) {
    return `${Math.trunc(timeDiff / HOUR)} hours ago`;
  } else if (timeDiff < 2 * DAY) {
    return "1 day ago";
  } else if (timeDiff <= MONTH) {
    return `${Math.trunc(timeDiff / DAY)} days ago`;
  } else if (timeDiff < 2 * MONTH) {
    return "1 month ago";
  } else if (timeDiff < YEAR) {
    return `${Math.trunc(timeDiff / MONTH)} months ago`;
  } else if (timeDiff < 2 * YEAR) {
    return "1 year ago";
  } else {
    return `${Math.trunc(timeDiff / YEAR)} years ago`;
  }
}
