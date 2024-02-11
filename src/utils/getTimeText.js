export const getTimeDifferenceMessage = (timeDiff = 0) => {
  const timeDiffInSeconds = timeDiff / 1000;
  const timeDiffInMinutes = timeDiffInSeconds / 60;
  const timeDiffInHours = timeDiffInMinutes / 60;
  const timeDiffInDays = timeDiffInHours / 24;
  const timeDiffInMonths = timeDiffInDays / 30;

  if (timeDiffInSeconds < 60) {
    return "1 minute ago";
  }
  if (timeDiffInMinutes < 60) {
    return `${Math.floor(timeDiffInMinutes)} minutes ago`;
  }
  if (timeDiffInHours < 2) {
    return "1 hour ago";
  }
  if (timeDiffInHours < 24) {
    return `${Math.floor(timeDiffInHours)} hours ago`;
  }
  if (timeDiffInDays < 2) {
    return "1 day ago";
  }
  if (timeDiffInDays < 31) {
    return `${Math.floor(timeDiffInDays)} days ago`;
  }
  if (timeDiffInMonths < 2) {
    return "1 month ago";
  }
  if (timeDiffInMonths < 12) {
    return `${Math.floor(timeDiffInMonths)} months ago`;
  }
  if (timeDiffInMonths < 24) {
    return "1 year ago";
  }
  if (timeDiffInMonths >= 24) {
    return `${Math.floor(timeDiffInMonths / 12)} years ago`;
  }
};

export const getDateText = (date) => {
  return (
    date.getFullYear() + ". " + (date.getMonth() + 1) + ". " + date.getDate()
  );
};
