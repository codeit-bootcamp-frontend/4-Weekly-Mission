export function calculateDateDifferences(stringDate) {
  const currentTime = new Date();
  const time = new Date(stringDate);

  const timeDifference = currentTime - time;

  const result = answerDateDifferences(destructureTime(timeDifference));
  return result;
}

function destructureTime(timeDifference) {
  const { minutes: minutesDifference, hours: hoursDifference, days: daysDifference, months: monthsDifference, years: yearsDifference } = {
    minutes: timeDifference / (1000 * 60),
    hours: (timeDifference / (1000 * 60)) / 60,
    days: ((timeDifference / (1000 * 60)) / 60) / 24,
    months: (((timeDifference / (1000 * 60)) / 60) / 24) / 30,
    years: ((((timeDifference / (1000 * 60)) / 60) / 24) / 30) / 12,
  };

  return { minutesDifference, hoursDifference, daysDifference, monthsDifference, yearsDifference };
}

function answerDateDifferences(allTimeTypes) {
  const { minutesDifference, hoursDifference, daysDifference, monthsDifference, yearsDifference } = allTimeTypes;

  let result;
  switch (true) {
    case minutesDifference < 2:
      result = "1 minute ago";
      break;
    case minutesDifference <= 59:
      result = `${Math.floor(minutesDifference)} minutes ago`;
      break;
    case hoursDifference < 2:
      result = "1 hour ago";
      break;
    case hoursDifference <= 23:
      result = `${Math.floor(hoursDifference)} hours ago`;
      break;
    case daysDifference < 2:
      result = "1 day ago";
      break;
    case daysDifference <= 30:
      result = `${Math.floor(daysDifference)} days ago`;
      break;
    case monthsDifference < 2:
      result = "1 month ago";
      break;
    case monthsDifference <= 11:
      result = `${Math.floor(monthsDifference)} months ago`;
      break;
    case yearsDifference < 2:
      result = "1 year ago";
      break;
    default:
      result = `${Math.floor(yearsDifference)} years ago`;
  }

  return result;
}

export function extractDateFormat(rawDataTime) {
  const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
  const match = rawDataTime.match(dateRegex);

  return match ? match[1] : null;
}