const getFormattedDate = date => {
  const dateObject = new Date(date);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  return `${year}. ${month}. ${day}`;
};

const getTimeAgo = date => {
  const now = new Date();
  const createdDate = new Date(date);

  const timeDifferenceInMilliseconds = now - createdDate;
  const secondsDifference = Math.floor(timeDifferenceInMilliseconds / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(monthsDifference / 12);

  switch (true) {
    case secondsDifference < 120:
      return '1 minute ago';
    case minutesDifference <= 59:
      return `${minutesDifference} minutes ago`;
    case hoursDifference < 2:
      return '1 hour ago';
    case hoursDifference <= 23:
      return `${hoursDifference} hours ago`;
    case daysDifference < 2:
      return '1 day ago';
    case daysDifference <= 30:
      return `${daysDifference} days ago`;
    case monthsDifference < 2:
      return '1 month ago';
    case monthsDifference <= 11:
      return `${monthsDifference} months ago`;
    case yearsDifference < 2:
      return '1 year ago';
    default:
      return `${Math.floor(yearsDifference)} years ago`;
  }
};

export { getFormattedDate, getTimeAgo };
