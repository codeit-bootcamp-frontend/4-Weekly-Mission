export function getDaysAgo(value) {
  const date = new Date(value);
  let timeStampDate = date.getTime();
  if (isNaN(timeStampDate)) {
    // 날짜를 파싱하여 각 구성 요소를 추출
    let dateParts = value.match(/\d+/g);
    let year = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]) - 1; // 월은 0부터 시작하므로 1을 빼준다.
    let day = parseInt(dateParts[2]);
    let hour = parseInt(dateParts[3]);
    let minute = parseInt(dateParts[4]);
    let second = parseInt(dateParts[5]);
    let millisecond = parseInt(dateParts[6]);

    // UTC로부터의 밀리초를 계산
    timeStampDate = Date.UTC(
      year,
      month,
      day,
      hour,
      minute,
      second,
      millisecond
    );
  }

  const today = Date.now();
  const minuteDifference = (today - timeStampDate) / 1000 / 60;
  if (minuteDifference < 2) {
    return "1 minute ago";
  }
  if (minuteDifference <= 59) {
    return `${Math.floor((today - timeStampDate) / 1000 / 60)} minutes ago`;
  }
  if (minuteDifference / 60 < 2) {
    return "1 hour ago";
  }
  if (minuteDifference / 60 < 24) {
    return `${Math.floor((today - timeStampDate) / 1000 / 60 / 60)} hours ago`;
  }
  if (minuteDifference / 60 < 48) {
    return "1 day ago";
  }
  if (minuteDifference / 60 / 24 <= 30) {
    return `${Math.floor(minuteDifference / 60 / 24)} days ago`;
  }
  if (minuteDifference / 60 / 24 < 61) {
    return "1 month ago";
  }
  if (minuteDifference / 60 / 24 / 31 < 12) {
    return `${Math.floor(minuteDifference / 60 / 24 / 31)} months ago`;
  }
  if (minuteDifference / 60 / 24 / 365 < 2) {
    return "1 year ago";
  }
  return `${Math.floor(minuteDifference / 60 / 24 / 365)} years ago`;
}

export function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
