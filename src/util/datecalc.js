export function dateDiffCalc(dateString) {
  const currentDate = new Date();
  const givenDate = new Date(dateString);
  const diffTime = Math.abs(currentDate - givenDate);
  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

  if (diffMinutes < 2) {
    return "1 minute ago";
  } else if (diffMinutes <= 59) {
    return `${diffMinutes} minutes ago`;
  } else if (diffHours < 1) {
    return "1 hour ago";
  } else if (diffHours <= 23) {
    return `${diffHours} hours ago`;
  } else if (diffDays < 1) {
    return "1 day ago";
  } else if (diffDays <= 30) {
    return `${diffDays} days ago`;
  } else if (diffMonths < 1) {
    return "1 month ago";
  } else if (diffMonths <= 11) {
    return `${diffMonths} months ago`;
  } else if (diffYears < 1) {
    return "1 year ago";
  } else {
    return `${diffYears} years ago`;
  }
}

export function dateFormatter(dateString) {
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  const formattedDate = `${year}.${month}.${day}`;
  return formattedDate;
}
