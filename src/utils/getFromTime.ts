//createdFromTime
export const getFromTime = (time: number) => {
  const today = new Date();
  const update = new Date(time);

  const minutes = (today.getTime() - update.getTime()) / 1000 / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;

  if (months >= 12) return `${Math.floor(months / 12)} year ago`;
  if (months <= 11) return `${Math.floor(months)} months ago`;
  if (days >= 31) return `1 month ago`;
  if (days <= 30) return `${Math.floor(days)} days ago`;
  if (hours >= 24) return `1 day ago`;
  if (hours <= 23) return `${Math.floor(hours)} hours ago`;
  if (minutes >= 60) return `1 hour ago`;
  if (minutes <= 59) return `${Math.floor(minutes)} minutes ago`;
  if (minutes < 2) return `1 minutes ago`;
};
