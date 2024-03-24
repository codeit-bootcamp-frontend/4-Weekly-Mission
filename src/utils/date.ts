export function formatRelativeDate(date = new Date()) {
  // 날짜가 안 맞는다...
  // 변경 필요.
  const A_MINUTE = 60 * 1000;
  const A_HOUR = 60 * A_MINUTE;
  const A_DAY = 24 * A_HOUR;
  const A_MONTH = 31 * A_DAY;
  const A_YEAR = 12 * A_MONTH;

  const diff = new Date().valueOf() - date.valueOf();

  if (diff < A_MINUTE * 2) {
    return '1 minute ago';
  }
  if (diff < A_HOUR) {
    return `${Math.floor(diff / 1000 / 60)} minutes ago`;
  }
  if (diff < A_DAY) {
    return `${Math.floor(diff / 1000 / 60 / 60)} hour ago`;
  }
  if (diff < A_MONTH) {
    return `${Math.floor(diff / 1000 / 60 / 60 / 24)} day ago`;
  }
  if (diff < A_YEAR) {
    return `${Math.floor(diff / 1000 / 60 / 60 / 24 / 31)} months ago`;
  }
  return `${Math.floor(diff / 1000 / 60 / 60 / 24 / 31 / 12)} years ago`;
}

export function formatDate(pDate = new Date()) {
  // 2023-01-12T22:27:22Z
  // 위 날짜는 변환 했을 때 2023. 1. 13이 나온다.
  // 변경 필요.
  const year = pDate.getFullYear();
  const month = pDate.getMonth() + 1;
  const date = pDate.getDate();

  return `${year}. ${month}. ${date}`;
}
