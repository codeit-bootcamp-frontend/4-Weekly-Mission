const milisec = 1000;
const minute = milisec * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

const TIME = {
  milisec,
  minute,
  hour,
  day,
  month,
  year,
};

const processTimeData = (createdAt) => {
  const currentTime = new Date();
  const createdAtDate = new Date(createdAt);
  const passedTime = currentTime - createdAtDate;
  const { minute, hour, day, month, year } = TIME;

  if (year * 2 <= passedTime) {
    return `${Math.floor(passedTime / year)} years ago`;
  }
  if (year <= passedTime) {
    return `1 year ago`;
  }
  if (month * 2 <= passedTime) {
    return `${Math.floor(passedTime / month)} months ago`;
  }
  if (month <= passedTime) {
    return `1 month ago`;
  }
  if (day * 2 <= passedTime) {
    return `${Math.floor(passedTime / day)} days ago`;
  }
  if (day <= passedTime) {
    return `1 day ago`;
  }
  if (hour * 2 <= passedTime) {
    return `${Math.floor(passedTime / hour)} hours ago`;
  }
  if (hour <= passedTime) {
    return `1 hour ago`;
  }
  if (minute * 2 <= passedTime) {
    return `${Math.floor(passedTime / minute)} minutes ago`;
  }
  return `1 minute ago`;
};

export default processTimeData;
