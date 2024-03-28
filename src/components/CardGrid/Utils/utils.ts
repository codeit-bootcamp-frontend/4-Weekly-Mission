export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export function getTimeAgo(inputDate: string): string {
  const date = new Date(inputDate);
  const now = new Date();

  const differenceInSeconds = Math.floor(
    (now.getTime() - date.getTime()) / 1000
  );
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInMonths / 12);

  if (differenceInSeconds < 120) {
    return "1 minute ago";
  }
  if (differenceInMinutes <= 59) {
    return `${differenceInMinutes} minutes ago`;
  }
  if (differenceInHours < 24) {
    return `${differenceInHours} hours ago`;
  }
  if (differenceInDays < 30) {
    return `${differenceInDays} days ago`;
  }
  if (differenceInMonths < 12) {
    return `${differenceInMonths} months ago`;
  }
  return `${Math.floor(differenceInYears)} years ago`;
}
