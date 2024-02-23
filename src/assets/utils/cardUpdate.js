export const upDateStauts = (createdDate) => {
  const currentTime = new Date().getTime();
  const createdTime = new Date(createdDate).getTime();
  const timeDiffMinute = (currentTime - createdTime) / (1000 * 60);
  const { timeLength, timeUnit } = determineTimeUnit(timeDiffMinute);
  const updatedTime = getPluralWord(timeLength, timeUnit);

  return updatedTime;
};

const getPluralWord = (time, unit) => {
  if (time >= 2) {
    return `${time} ${unit}s ago`;
  }
  return `${time} ${unit} ago`;
};

const determineTimeUnit = (minute) => {
  if (minute < 2) {
    return { timeLength: 1, timeUnit: 'minute' };
  }
  if (minute < 60) {
    return { timeLength: minute, timeUnit: 'minute' };
  }
  if (minute < 60 * 24) {
    return { timeLength: parseInt(minute / 60), timeUnit: 'hour' };
  }
  if (minute < 60 * 24 * 30) {
    return { timeLength: parseInt(minute / (60 * 24)), timeUnit: 'day' };
  }
  if (minute < 60 * 24 * 30 * 12) {
    return { timeLength: parseInt(minute / (60 * 24 * 30)), timeUnit: 'month' };
  }
  return {
    timeLength: parseInt(minute / (60 * 24 * 30 * 12)),
    timeUnit: 'year',
  };
};
