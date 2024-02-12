export function calculateDateDifferences(stringDate) {
  const currentTime = new Date();
  const time = new Date(stringDate);

  const timeDifference = currentTime - time;

  const result = getDateDifferencesLabel(destructureTime(timeDifference));
  return result;
}

function destructureTime(timeDifference) {
  const secondDifference = Math.trunc(timeDifference / 1000);
  const minutesDifference = Math.trunc(secondDifference / 60);
  const hoursDifference = Math.trunc(minutesDifference / 60);
  const daysDifference = Math.trunc(hoursDifference / 24);
  const monthsDifference = Math.trunc(daysDifference / 30);
  const yearsDifference = Math.trunc(monthsDifference / 12);

  return { minutesDifference, hoursDifference, daysDifference, monthsDifference, yearsDifference };
}

function getDateDifferencesLabel(allTimeTypes) {
  const { minutesDifference, hoursDifference, daysDifference, monthsDifference, yearsDifference } = allTimeTypes;

  switch (true) {
    case minutesDifference < 2:
      return "1 minute ago";
    case minutesDifference <= 59:
      return `${Math.floor(minutesDifference)} minutes ago`;
    case hoursDifference < 2:
      return "1 hour ago";
    case hoursDifference <= 23:
      return `${Math.floor(hoursDifference)} hours ago`;
    case daysDifference < 2:
      return "1 day ago";
    case daysDifference <= 30:
      return `${Math.floor(daysDifference)} days ago`;
    case monthsDifference < 2:
      return "1 month ago";
    case monthsDifference <= 11:
      return `${Math.floor(monthsDifference)} months ago`;
    case yearsDifference < 2:
      return "1 year ago";
    default:
      return `${Math.floor(yearsDifference)} years ago`;
  }
}

export function extractDateFormat(rawDataTime) {
  const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
  const match = rawDataTime.match(dateRegex);

  return match ? match[1] : null;
}