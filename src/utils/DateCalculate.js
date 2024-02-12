export function calculateDateDifference(stringDate) {
  const currentTime = new Date();
  const time = new Date(stringDate);

  const timeDifference = currentTime - time;

  return getDateDifferencesLabel(timeDifference);
}

function getDateDifferencesLabel(timeDifference) {
  const { minutesDifference, hoursDifference, daysDifference, monthsDifference, yearsDifference } = calculateDateType(timeDifference);

  switch (true) {
    case minutesDifference < 2:
      return "1 minute ago";
    case minutesDifference <= 59:
      return `${minutesDifference} minutes ago`;
    case hoursDifference < 2:
      return "1 hour ago";
    case hoursDifference <= 23:
      return `${hoursDifference} hours ago`;
    case daysDifference < 2:
      return "1 day ago";
    case daysDifference <= 30:
      return `${daysDifference} days ago`;
    case monthsDifference < 2:
      return "1 month ago";
    case monthsDifference <= 11:
      return `${monthsDifference} months ago`;
    case yearsDifference < 2:
      return "1 year ago";
    default:
      return `${yearsDifference} years ago`;
  }
}

function calculateDateType(timeDifference) {
  const secondDifference = Math.trunc(timeDifference / 1000);
  const minutesDifference = Math.trunc(secondDifference / 60);
  const hoursDifference = Math.trunc(minutesDifference / 60);
  const daysDifference = Math.trunc(hoursDifference / 24);
  const monthsDifference = Math.trunc(daysDifference / 30);
  const yearsDifference = Math.floor(monthsDifference / 12);

  return { minutesDifference, hoursDifference, daysDifference, monthsDifference, yearsDifference };
}

export function formatDate(stringDate) {
  const date = new Date(stringDate);
  
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}