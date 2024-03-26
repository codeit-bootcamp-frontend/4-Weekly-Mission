export const createDate = (value: string) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

export const intervalDate = (value: string) => {
  const createdDate: Date = new Date(value);
  const currentDate: Date = new Date();

  const diffMinute = Math.floor(+currentDate - +createdDate / 1000 / 60);
  const diffHour = Math.floor(diffMinute / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffMonth / 12);

  if (diffMinute < 2) {
    return '1 minute ago';
  }
  if (diffMinute <= 59) {
    return `${diffMinute} minutes ago`;
  }
  if (diffHour <= 23) {
    return `${diffHour} hour${diffHour < 2 ? '' : 's'} ago`;
  }
  if (diffDay <= 30) {
    return `${diffDay} day${diffDay < 2 ? '' : 's'} ago`;
  }
  if (diffMonth <= 11) {
    return `${diffMonth} month${diffMonth < 2 ? '' : 's'} ago`;
  } else {
    return `${diffYear} year${diffYear < 2 ? '' : 's'} ago`;
  }
};
