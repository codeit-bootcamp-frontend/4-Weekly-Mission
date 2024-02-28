/**
 * 날짜를 받아 경과시간 계산
 * @param  date
 * @returns '{n} {timeType} ago'
 */

const elapsedTime = (date) => {
  const milliSeconds = new Date() - new Date(date);
  const seconds = milliSeconds / 1000;

  const diffNum = (value) => Math.floor(value);

  if (seconds < 120) return `1 minute ago`;

  const minutes = seconds / 60;
  if (minutes < 60) return `${diffNum(minutes)} minutes ago`;

  const hours = minutes / 60;
  if (hours < 24) return `${diffNum(hours)} hour ago`;

  const days = hours / 24;
  if (days < 30) return `${diffNum(days)} day ago`;

  const months = days / 30;
  if (months < 12) return `${diffNum(months)} months ago`;

  const years = days / 365;
  return `${diffNum(years)} years ago`;
};

export default elapsedTime;
