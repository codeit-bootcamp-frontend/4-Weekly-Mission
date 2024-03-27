const caculateTime = (value: string): string => {
  const createdDate: Date = new Date(value);
  const nowDate: Date = new Date();
  const timeDiff: number = nowDate.getTime() - createdDate.getTime();

  const minDiff: number = Math.floor(timeDiff / 1000 / 60);
  const hourDiff: number = Math.floor(minDiff / 60);
  const dayDiff: number = Math.floor(hourDiff / 24);
  const monthDiff: number = Math.floor(dayDiff / 31);
  if (monthDiff >= 12) {
    return `${Math.floor(monthDiff / 12)} years ago`;
  } else if (monthDiff >= 1) {
    return `${monthDiff} months ago`;
  } else if (dayDiff >= 1) {
    return `${dayDiff} days ago`;
  } else if (hourDiff >= 1) {
    return `${hourDiff} hours ago`;
  } else if (minDiff >= 2) {
    return `${minDiff} minutes ago`;
  } else {
    return '1 minute ago';
  }
};
export default caculateTime;
