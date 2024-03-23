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

  const differenceTime = {
    seconds: Math.floor((now - createdDate) / 1000),
    minute: Math.floor((now - createdDate) / (1000 * 60)),
    hour: Math.floor((now - createdDate) / (1000 * 60 * 60)),
    day: Math.floor((now - createdDate) / (1000 * 60 * 60 * 24)),
    month: Math.floor((now - createdDate) / (1000 * 60 * 60 * 24 * 30)),
    year: Math.floor((now - createdDate) / (1000 * 60 * 60 * 24 * 30 * 12)),
  };

  const getTimeAgoString = (time, unit) => {
    if (time === 1) {
      return `1 ${unit} ago`;
    }
    return `${time} ${unit}s ago`;
  };

  if (differenceTime.seconds < 60 * 2) {
    return getTimeAgoString(1, 'minute');
  }
  if (differenceTime.minute < 60) {
    return getTimeAgoString(differenceTime.minute, 'minute');
  }
  if (differenceTime.hour < 2) {
    return getTimeAgoString(1, 'hour');
  }
  if (differenceTime.hour < 24) {
    return getTimeAgoString(differenceTime.hour, 'hour');
  }
  if (differenceTime.day < 2) {
    return getTimeAgoString(1, 'day');
  }
  if (differenceTime.day < 31) {
    return getTimeAgoString(differenceTime.day, 'day');
  }
  if (differenceTime.month < 2) {
    return getTimeAgoString(1, 'month');
  }
  if (differenceTime.month < 12) {
    return getTimeAgoString(differenceTime.month, 'month');
  }
  if (differenceTime.year < 2) {
    return getTimeAgoString(1, 'year');
  }
  return getTimeAgoString(Math.floor(differenceTime.month / 12), 'year');
}
