export function setTime(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  if (minutes < 2) {
    return '1 minute ago';
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 2) {
    return '1 hour ago';
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 2) {
    return '1 day ago';
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 2) {
    return '1 month ago';
  } else if (months < 12) {
    return `${months} months ago`;
  } else if (years < 2) {
    return '1 year ago';
  } else {
    return `${years} years ago`;
  }
}

export const getKrTime = (data) => {
  // 입력받은 날짜 데이터를 Date 객체로 변환하고, 현재 시간대의 UTC 시간과의 차이를 계산하여 한국 시간(KST)으로 변환합니다.
  const isCreatedAt = new Date(data).getTime() + new Date(data).getTimezoneOffset() * 60 * 1000;
  // 한국과 UTC 시간대의 차이를 밀리초로 계산하여 상수에 저장합니다. 한국은 UTC+9 시간대이므로 9시간에 해당하는 시간을 계산합니다.
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  // 한국 시간(KST)을 계산한 값을 이용하여 한국 시간(KST)의 Date 객체를 생성합니다.
  const kr_curr = new Date(isCreatedAt + KR_TIME_DIFF);

  // 한국 시간(KST)의 연도, 월, 일, 시간, 분을 추출합니다.
  const year = kr_curr.getFullYear(); // 연도를 가져옵니다.
  const month = kr_curr.getMonth() + 1; // 월을 가져오며, 0부터 시작하므로 1을 더합니다.
  const isMonth = month >= 10 ? month : '0' + month; // 월이 10 이상이면 그대로, 10 미만이면 앞에 '0'을 추가하여 두 자리로 표시합니다.
  const day = kr_curr.getDate(); // 일을 가져옵니다.
  const isDay = day >= 10 ? day : '0' + day; // 일이 10 이상이면 그대로, 10 미만이면 앞에 '0'을 추가하여 두 자리로 표시합니다.
  const hour = kr_curr.getHours(); // 시간을 가져옵니다.
  const isHour = hour >= 10 ? hour : '0' + hour; // 시간이 10 이상이면 그대로, 10 미만이면 앞에 '0'을 추가하여 두 자리로 표시합니다.
  const minutes = kr_curr.getMinutes(); // 분을 가져옵니다.
  const isMinutes = minutes >= 10 ? minutes : '0' + minutes; // 분이 10 이상이면 그대로, 10 미만이면 앞에 '0'을 추가하여 두 자리로 표시합니다.

  // 'YYYY.MM.DD. HH:mm' 형식으로 변환한 문자열을 반환합니다.
  return year + '.' + isMonth + '.' + isDay + '. ' + isHour + ':' + isMinutes;
};
