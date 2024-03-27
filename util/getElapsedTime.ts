import moment from "moment";

export const getElapsedTime = (createdAt: string) => {
  const now = moment();
  const createdAtDate = moment(createdAt);
  const elapsedTime = now.diff(createdAtDate);
  const duration = moment.duration(elapsedTime);

  if (duration.asMonths() >= 13) {
    return `${Math.floor(duration.asYears())} years ago`;
  }
  if (duration.asMonths() >= 12) {
    return `1 year ago`;
  }
  if (duration.asMonths() <= 11) {
    return `${Math.floor(duration.asMonths())} months ago`;
  }
  if (duration.asDays() >= 31) {
    return `1 month ago`;
  }
  if (duration.asDays() <= 30) {
    return `${Math.floor(duration.asDays())} days ago`;
  }
  if (duration.asHours() >= 24) {
    return `1 day ago`;
  }
  if (duration.asHours() <= 23) {
    return `${Math.floor(duration.asHours())} hours ago`;
  }
  if (duration.asMinutes() >= 60) {
    return `1 hour ago`;
  }
  if (duration.asMinutes() <= 59) {
    return `${Math.floor(duration.asMinutes())} minutes ago`;
  }
  return `1 minute ago`;
};
