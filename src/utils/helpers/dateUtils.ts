export function formatDate(date: Date) {
  const options = { year: "numeric", month: "numeric", day: "numeric" } as const
  return new Date(date).toLocaleDateString(undefined, options);
}

export function getTimeDifference(createdAt: Date) {
  const currentDate = +new Date();
  const createdDate = +new Date(createdAt);

  const timeDifference = currentDate - createdDate;
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const monthsDifference = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24 * 30)
  );
  const yearsDifference = Math.floor(monthsDifference / 12);

  if (minutesDifference < 2) {
    return "1 minute ago";
  }
  if (minutesDifference <= 59) {
    return `${minutesDifference} minutes ago`;
  }
  if (hoursDifference === 1) {
    return "1 hour ago";
  }
  if (hoursDifference <= 23) {
    return `${hoursDifference} hours ago`;
  }
  if (daysDifference === 1) {
    return "1 day ago";
  }
  if (daysDifference <= 30) {
    return `${daysDifference} days ago`;
  }
  if (monthsDifference === 1) {
    return "1 month ago";
  }
  if (monthsDifference <= 11) {
    return `${monthsDifference} months ago`;
  }
  if (yearsDifference === 1) {
    return "1 year ago";
  }
  return `${yearsDifference} years ago`;
}
