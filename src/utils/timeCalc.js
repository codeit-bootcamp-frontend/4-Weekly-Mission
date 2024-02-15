export function timeCalculate(createdAt) {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const timeDiffInSeconds = Math.floor((now - createdDate) / 1000);
  const timeDiffInMinutes = Math.floor(timeDiffInSeconds / 60);
  const timeDiffInHours = Math.floor(timeDiffInMinutes / 60);
  const timeDiffInDays = Math.floor(timeDiffInHours / 24);
  const timeDiffInMonths = Math.floor(timeDiffInDays / 30);
  const timeDiffInYears = Math.floor(timeDiffInMonths / 12);

  if (timeDiffInSeconds < 120) {
    return "1 minute ago";
  }

  if (timeDiffInMinutes < 60) {
    return `${timeDiffInMinutes} minutes ago`;
  }

  if (timeDiffInHours < 2) {
    return "1 hour ago";
  }

  if (timeDiffInHours < 24) {
    return `${timeDiffInHours} hours ago`;
  }

  if (timeDiffInDays < 2) {
    return "1 day ago";
  }

  if (timeDiffInDays < 31) {
    return `${timeDiffInDays} days ago`;
  }

  if (timeDiffInMonths < 2) {
    return "1 month ago";
  }

  if (timeDiffInMonths < 12) {
    return `${timeDiffInMonths} months ago`;
  }

  if (timeDiffInYears < 2) {
    return "1 year ago";
  }

  if (timeDiffInYears >= 2) {
    return `${Math.floor(timeDiffInMonths / 12)} years ago`;
  }
}

export function getDateText(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return year + ". " + month + ". " + day;
}
