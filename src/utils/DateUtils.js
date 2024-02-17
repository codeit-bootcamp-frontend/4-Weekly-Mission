export const getTimeDifference = (createdDate, currentDate) => {
  const differenceInSeconds = Math.floor((currentDate - createdDate) / 1000);
  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInMonth = 2592000;
  const secondsInYear = 31536000;

  if (differenceInSeconds < secondsInMinute) {
    return "1 minute ago";
  }
  if (differenceInSeconds <= secondsInHour) {
    const minutes = Math.floor(differenceInSeconds / secondsInMinute);
    return `${minutes} minutes ago`;
  }
  if (differenceInSeconds < secondsInDay) {
    const hours = Math.floor(differenceInSeconds / secondsInHour);
    return `${hours} hours ago`;
  }
  if (differenceInSeconds < secondsInMonth) {
    const days = Math.floor(differenceInSeconds / secondsInDay);
    return `${days} days ago`;
  }
  if (differenceInSeconds < secondsInYear) {
    const months = Math.floor(differenceInSeconds / secondsInMonth);
    return `${months} months ago`;
  }
  const years = Math.floor(differenceInSeconds / secondsInYear);
  const remainingMonths = Math.floor(
    (differenceInSeconds % secondsInYear) / secondsInMonth,
  );
  if (remainingMonths > 0) {
    return `${years} years ago`;
  }
  return `${years} years ago`;
};

export const formatDate = (createdDate) => {
  return `${createdDate.getFullYear()}. ${
    createdDate.getMonth() + 1
  }. ${createdDate.getDate()}`;
};
