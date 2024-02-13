// 카드 컴포넌트에서 createdAt 데이터 기준으로 현재 Date와 차이에 따라 아래와 같은 규칙으로 설정해 주세요.
// 2분 미만은 “1 minute ago”
// 59분 이하는 “OO minutes ago”
// 60분 이상은 “1 hour ago”
// 23시간 이하는 “OO hours ago”
// 24시간 이상은 “1 day ago”
// 30일 이하는 “OO days ago”
// 31일 이상은 “1 month ago”
// 11달 이하는 “OO months ago”
// 12달 이상은 “1 year ago”
// OO달 이상은 “{OO/12(소수점 버린 정수)} years ago”

// data 는 2023. 12. 11 형식으로
// 원래 createdAt 형식 :"2022-12-23T09:44:10Z" 형식

export function formatDate(createdAt) {
  const date = createdAt.split('T')[0].replaceAll('-', '. ');
  return date;
}
export function getLastTime(createdAt) {
  const nowDate = new Date();
  const createdDate = new Date(createdAt);
  const lastTime = nowDate - createdDate;
  const secondsDif = Math.floor(lastTime / 1000);
  const minutesDif = Math.floor(secondsDif / 60);
  const hoursDif = Math.floor(minutesDif / 60);
  const daysDif = Math.floor(hoursDif / 24);
  const monthsDif = Math.floor(daysDif / 30);
  const yearsDif = Math.floor(monthsDif / 12);

  if (secondsDif < 120) {
    return '1 minute ago';
  }
  if (minutesDif < 60) {
    return `${minutesDif} minutes ago`;
  }
  if (hoursDif < 2) {
    return '1 hour ago';
  }
  if (hoursDif < 24) {
    return `${hoursDif} hours ago`;
  }
  if (daysDif < 2) {
    return '1 day ago';
  }
  if (daysDif <= 30) {
    return `${daysDif} days ago`;
  }
  if (monthsDif < 2) {
    return '1 month ago';
  }
  if (monthsDif <= 11) {
    return `${monthsDif} months ago`;
  }
  if (yearsDif < 2) {
    return '1 year ago';
  }
  return `${Math.floor(yearsDif / 12)} years ago`;
}
