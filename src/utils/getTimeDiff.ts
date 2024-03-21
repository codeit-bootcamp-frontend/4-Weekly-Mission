const getTimeDiff = (date: string): string => {
  const today: Date = new Date();
  const targetDate: Date = new Date(date);
  const minute: number = Math.floor((today.getTime() - targetDate.getTime()) / (1000 * 60));
  const hour: number = Math.floor(minute / 60);
  const day: number = Math.floor(hour / 24);
  const month: number = Math.floor(day / 30);
  const year: number = Math.floor(month / 12);
  if (minute < 2) {
    return '1 minute ago';
  } else if (minute <= 59) {
    return `${minute} minutes ago`;
  } else if (hour < 2) {
    return '1 hour ago';
  } else if (hour <= 23) {
    return `${hour} hours ago`;
  } else if (day < 2) {
    return '1 day ago';
  } else if (day <= 30) {
    return `${day} days ago`;
  } else if (month < 2) {
    return '1 month ago';
  } else if (month <= 11) {
    return `${month} months ago`;
  } else if (year < 2) {
    return '1 year ago';
  } else {
    return `${year} years ago`;
  }
};

export default getTimeDiff;
