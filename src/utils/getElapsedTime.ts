export default function getElapsedTime(createAt: Date) {
  const currentDate = new Date();
  const createdDate = new Date(createAt);
  const elapsedTimeInMinutes = Math.floor(
    (currentDate.getTime() - createdDate.getTime()) / (1000 * 60)
  );

  if (elapsedTimeInMinutes < 2) {
    return "1 minute ago";
  } else if (elapsedTimeInMinutes <= 59) {
    return `${elapsedTimeInMinutes} minutes ago`;
  }

  const elapsedTimeInHours = Math.floor(elapsedTimeInMinutes / 60);
  if (elapsedTimeInHours === 1) {
    return "1 hour ago";
  } else if (elapsedTimeInHours <= 23) {
    return `${elapsedTimeInHours} hours ago`;
  }

  const elapsedTimeInDays = Math.floor(elapsedTimeInHours / 24);
  if (elapsedTimeInDays === 1) {
    return "1 day ago";
  } else if (elapsedTimeInDays <= 30) {
    return `${elapsedTimeInDays} days ago`;
  }

  const elapsedTimeInMonths = Math.floor(elapsedTimeInDays / 30);
  if (elapsedTimeInMonths === 1) {
    return "1 month ago";
  } else if (elapsedTimeInMonths <= 11) {
    return `${elapsedTimeInMonths} months ago`;
  }

  const elapsedTimeInYears = Math.floor(elapsedTimeInMonths / 12);
  if (elapsedTimeInYears === 1) {
    return "1 year ago";
  } else {
    return `${elapsedTimeInYears} years ago`;
  }
}
