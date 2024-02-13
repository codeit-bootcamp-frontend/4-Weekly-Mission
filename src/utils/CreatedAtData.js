import { CREATED_TIME } from '../components/constants';

export const uploadedDuration = (createdAt) => {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const diffTime = now - createdDate;
  const minute = Math.floor(diffTime / (1000 * 60));
  const hour = Math.floor(minute / 60);
  const day = Math.floor(minute / (60 * 24));
  const month = Math.floor(minute / (60 * 24 * 30));
  const years = Math.floor(minute / (60 * 24 * 30 * 12));

  const {
    MSG_ONE_MINUTE,
    MSG_MINUTES,
    MSG_ONE_HOUR,
    MSG_HOURS,
    MSG_ONE_DAY,
    MSG_DAYS,
    MSG_ONE_MONTH,
    MSG_MONTHS,
    MSG_ONE_YEAR,
    MSG_YEARS,
  } = CREATED_TIME;

  if (minute < 2) return MSG_ONE_MINUTE;
  if (minute <= 59) return `${minute} ${MSG_MINUTES}`;
  if (minute < 60 * 24)
    return hour === 1 ? MSG_ONE_HOUR : `${hour} ${MSG_HOURS}`;
  if (minute < 60 * 24 * 30)
    return day === 1 ? MSG_ONE_DAY : `${day} ${MSG_DAYS}`;
  if (minute < 60 * 24 * 30 * 12)
    return month === 1 ? MSG_ONE_MONTH : `${month} ${MSG_MONTHS}`;
  if (years === 1) return MSG_ONE_YEAR;
  return `${years} ${MSG_YEARS}`;
};

export const uploadedDate = (createdAt) => {
  const createdDate = new Date(createdAt);
  const year = createdDate.getFullYear();
  const month = (1 + createdDate.getMonth()).toString().padStart(2, '0');
  const day = createdDate.getDate().toString().padStart(2, '0');
  return `${year}. ${month}. ${day}`;
};
