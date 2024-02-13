export const elapsedTime = (date) => {
  const Minute = 60;
  const Hour = 3600;
  const Day = 86400;
  const Month = 2592000;
  const Year = 31536000;

  const Seconds = Math.floor((new Date() - new Date(date)) / 1000);

  if (Seconds < Minute) {
    return "1 minute ago";
  } else if (Seconds < Hour) {
    return `${Math.floor(Seconds / Minute)} minutes ago`;
  } else if (Seconds < Day) {
    return `${Math.floor(Seconds / Hour)} hours ago`;
  } else if (Seconds < Month) {
    return `${Math.floor(Seconds / Day)} days ago`;
  } else if (Seconds < Year) {
    return `${Math.floor(Seconds / Month)} months ago`;
  } else {
    return `${Math.floor(Seconds / Year)} years ago`;
  }
};
