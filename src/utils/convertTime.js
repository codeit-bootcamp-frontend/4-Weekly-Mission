export function convertTime(time) {
  const now = new Date();
  const timestamp = new Date(time);
  const difference = now - timestamp;

  // 밀리초를 분, 시간, 일, 달, 년으로 변환
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;

  if (difference < minute * 2) {
    return "1 minute ago";
  } else if (difference < hour) {
    const minutes = Math.floor(difference / minute);
    return `${minutes} minutes ago`;
  } else if (difference < hour * 2) {
    return "1 hour ago";
  } else if (difference < day) {
    const hours = Math.floor(difference / hour);
    return `${hours} hours ago`;
  } else if (difference < day * 2) {
    return "1 day ago";
  } else if (difference < month) {
    const days = Math.floor(difference / day);
    return `${days} days ago`;
  } else if (difference < month * 2) {
    return "1 month ago";
  } else if (difference < year) {
    const months = Math.floor(difference / month);
    return `${months} months ago`;
  } else if (difference < year * 2) {
    return "1 year ago";
  } else {
    const years = Math.floor(difference / year);
    return `${years} years ago`;
  }
}

export function formatDate(beforeDate) {
  const date = new Date(beforeDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}. ${month}. ${day}`;
}
