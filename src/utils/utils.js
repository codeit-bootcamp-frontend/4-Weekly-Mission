export const formatDate = (createdDate) => {
  const date = new Date(createdDate);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

export const getTimeAgo = (createdTime) => {
  const createdDate = new Date(createdTime);
  const currentDate = new Date();

  const differenceMinute = Math.floor((currentDate - createdDate) / 1000 / 60);
  const differenceHour = Math.floor(differenceMinute / 60);
  const differenceDay = Math.floor(differenceHour / 24);
  const differenceMonth = Math.floor(differenceDay / 30);
  const differenceYear = Math.floor(differenceMonth / 12);

  if (differenceMinute < 2) {
    return '1 minute ago';
  } else if (differenceMinute <= 59) {
    return `${differenceMinute} minutes ago`;
  } else if (differenceHour <= 23) {
    return `${differenceHour} hour${differenceHour < 2 ? '' : 's'} ago`;
  } else if (differenceDay <= 30) {
    return `${differenceDay} day${differenceDay < 2 ? '' : 's'} ago`;
  } else if (differenceMonth <= 11) {
    return `${differenceMonth} month${differenceMonth < 2 ? '' : 's'} ago`;
  } else {
    return `${differenceYear} year${differenceYear < 2 ? '' : 's'} ago`;
  }
};
