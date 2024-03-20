import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  format,
} from "date-fns";

export function dateDiffCalc(dateString: string) {
  const currentDate = new Date();
  const givenDate = new Date(dateString);
  const diffMinutes = differenceInMinutes(currentDate, givenDate);
  const diffHours = differenceInHours(currentDate, givenDate);
  const diffDays = differenceInDays(currentDate, givenDate);
  const diffMonths = differenceInMonths(currentDate, givenDate);
  const diffYears = differenceInYears(currentDate, givenDate);

  if (diffMinutes < 2) {
    return "1 minute ago";
  } else if (diffMinutes <= 59) {
    return `${diffMinutes} minutes ago`;
  } else if (diffHours < 1) {
    return "1 hour ago";
  } else if (diffHours <= 23) {
    return `${diffHours} hours ago`;
  } else if (diffDays < 1) {
    return "1 day ago";
  } else if (diffDays <= 30) {
    return `${diffDays} days ago`;
  } else if (diffMonths < 1) {
    return "1 month ago";
  } else if (diffMonths <= 11) {
    return `${diffMonths} months ago`;
  } else if (diffYears < 1) {
    return "1 year ago";
  } else {
    return `${diffYears} years ago`;
  }
}

export function dateFormatter(dateString: string) {
  const formattedDate = format(new Date(dateString), "yyyy.MM.dd");
  return formattedDate;
}
