export function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  // getMonth()는 0부터 시작하므로 1을 더함
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}.${month}.${day}`;
}
