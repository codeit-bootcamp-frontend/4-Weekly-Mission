// createdAt 날짜 변경
export function dateChange(time: string | number | Date): string {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${year}. ${month}. ${day}`;
  return formattedDate;
}

// 현재 날짜와 createdAt의 시간 차이
export function timeChange(date: string | number | Date): string {
  const now = new Date();
  const time = new Date(date);
  const diff = now.getTime() - time.getTime(); // Use getTime() to get the time in milliseconds

  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) {
    return "1 minute ago";
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return minutes + " minutes ago";
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return hours + " hours ago";
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return days + " days ago";
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return months + " months ago";
  }

  const years = Math.floor(months / 12);
  return years + " years ago";
}
