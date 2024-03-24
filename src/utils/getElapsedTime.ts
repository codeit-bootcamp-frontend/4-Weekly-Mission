import moment from "moment";

export const getElapsedTime = (createdAt: string) => {
  const currentDate = moment();
  const createdDate = moment(createdAt);

  const elapsedTime = currentDate.diff(createdDate);

  const duration = moment.duration(elapsedTime);

  if (duration.asYears() >= 2) {
    return `${Math.floor(duration.asYears())} years ago`;
  }
  if (duration.asYears() >= 1) {
    return `1 year ago`;
  }
  if (duration.asMonths() >= 2) {
    return `${Math.floor(duration.asMonths())} months ago`;
  }
  if (duration.asMonths() >= 1) {
    return `1 month ago`;
  }
  if (duration.asDays() >= 2) {
    return `${Math.floor(duration.asDays())} days ago`;
  }
  if (duration.asDays() >= 1) {
    return `1 day ago`;
  }
  if (duration.asHours() >= 2) {
    return `${Math.floor(duration.asHours())} hours ago`;
  }
  if (duration.asHours() >= 1) {
    return `1 hour ago`;
  }
  if (duration.asMinutes() >= 2) {
    return `${Math.floor(duration.asMinutes())} minutes ago`;
  }
  return `1 minute ago`;
};
