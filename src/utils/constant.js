const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

export const TIME_TO_MILLISECONDS = {
  second,
  minute,
  hour,
  day,
  month,
  year,
};

export const DEFAULT_FOLDER = {
  name: '전체',
  id: 'all',
};
