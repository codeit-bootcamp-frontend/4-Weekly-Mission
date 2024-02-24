export function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}

export function formatTimeAgo(value) {
  const currentDate = new Date();
  const createdDate = new Date(value);
  const timeDiff = currentDate - createdDate;
  const secondsDiff = Math.floor(timeDiff / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);
  const monthsDiff = Math.floor(daysDiff / 30);
  const yearsDiff = Math.floor(monthsDiff / 12);

  if (minutesDiff < 2) return "1 minute ago";
  if (minutesDiff < 60) return minutesDiff + " minutes ago";
  if (hoursDiff === 1) return "1 hour ago";
  if (hoursDiff < 24) return hoursDiff + " hours ago";
  if (daysDiff === 1) return "1 day ago";
  if (daysDiff < 30) return daysDiff + " days ago";
  if (monthsDiff === 1) return "1 month ago";
  if (monthsDiff < 12) return monthsDiff + " months ago";
  if (yearsDiff === 1) return "1 year ago";
  return Math.floor(monthsDiff / 12) + " years ago";
}
