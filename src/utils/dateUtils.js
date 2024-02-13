export function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().substr(2, 2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day}`;
}

export function calculateTimePassed(createdAt) {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const differenceInSeconds = Math.floor((now - createdDate) / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInMonths / 12);

  const getTimeAgoString = (time, unit) => {
    if (time === 1) {
      return `1 ${unit} ago`;
    }
    return `${time} ${unit}s ago`;
  };

  if (differenceInSeconds < 60 * 2) {
    return getTimeAgoString(1, 'minute');
  }
  if (differenceInMinutes < 60) {
    return getTimeAgoString(differenceInMinutes, 'minute');
  }
  if (differenceInHours < 2) {
    return getTimeAgoString(1, 'hour');
  }
  if (differenceInHours < 24) {
    return getTimeAgoString(differenceInHours, 'hour');
  }
  if (differenceInDays < 2) {
    return getTimeAgoString(1, 'day');
  }
  if (differenceInDays < 31) {
    return getTimeAgoString(differenceInDays, 'day');
  }
  if (differenceInMonths < 2) {
    return getTimeAgoString(1, 'month');
  }
  if (differenceInMonths < 12) {
    return getTimeAgoString(differenceInMonths, 'month');
  }
  if (differenceInYears < 2) {
    return getTimeAgoString(1, 'year');
  }
  return getTimeAgoString(Math.floor(differenceInMonths / 12), 'year');
}
