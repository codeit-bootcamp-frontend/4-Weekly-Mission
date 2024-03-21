export const ALL = "전체";

export const formatCreatedAt = (createdAt) => {
  return new Date(createdAt).toISOString().split("T")[0];
};

export const elapsedTime = (date) => {
  const MINUTE = 60;
  const HOUR = 3600;
  const DAY = 86400;
  const MONTH = 2592000;
  const YEAR = 31536000;

  const SECONDS = Math.floor((new Date() - new Date(date)) / 1000);

  if (SECONDS < MINUTE) {
    return "1 minute ago";
  } else if (SECONDS < HOUR) {
    return `${Math.floor(SECONDS / MINUTE)} minutes ago`;
  } else if (SECONDS < DAY) {
    return `${Math.floor(SECONDS / HOUR)} hours ago`;
  } else if (SECONDS < MONTH) {
    return `${Math.floor(SECONDS / DAY)} days ago`;
  } else if (SECONDS < YEAR) {
    return `${Math.floor(SECONDS / MONTH)} months ago`;
  } else {
    return `${Math.floor(SECONDS / YEAR)} years ago`;
  }
};
