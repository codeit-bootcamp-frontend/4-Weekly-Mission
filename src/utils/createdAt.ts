import dayjs from "dayjs";

export const updatedDate = (createdAt: string) => {
  const date = dayjs(createdAt);
  return date.format("YYYY-MM-DD");
};

export const updatedDuration = (createdAt: string) => {
  const updatedDate = dayjs(createdAt);
  const nowDate = dayjs();
  const diff = nowDate.diff(updatedDate, "minute");

  if (diff < 2) {
    return "1 minute ago";
  } else if (diff <= 59) {
    return `${diff} minutes ago`;
  } else if (diff < 60 * 24) {
    const hours = Math.floor(diff / 60);
    if (hours === 1) {
      return "1 hour ago";
    } else {
      return `${hours} hours ago`;
    }
  } else if (diff < 60 * 24 * 30) {
    const days = Math.floor(diff / (60 * 24));
    if (days === 1) {
      return "1 day ago";
    } else {
      return `${days} days ago`;
    }
  } else if (diff < 60 * 24 * 30 * 12) {
    const months = Math.floor(diff / (60 * 24 * 30));
    if (months === 1) {
      return "1 month ago";
    } else {
      return `${months} months ago`;
    }
  } else if (diff >= 60 * 24 * 30 * 12) {
    const years = Math.floor(diff / (60 * 24 * 30 * 12));
    if (years === 1) {
      return "1 year ago";
    } else {
      return `${years} years ago`;
    }
  }
};
