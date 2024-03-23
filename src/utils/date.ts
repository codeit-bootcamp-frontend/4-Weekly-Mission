export function dateParse(dateString: string) {
  // 주어진 날짜 및 시간 문자열
  const dateFormat = dateString;

  // Date 객체 생성 및 파싱
  const date = new Date(dateFormat);

  // 원하는 형식으로 포맷팅
  const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  return formattedDate;
}

export function diffDate(dateString: string) {
  const now = new Date();
  const created = new Date(dateString);

  const diffMilliseconds = +now - +created;
  const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffYears >= 1) {
    return `${diffYears} ${diffYears === 1 ? 'year' : 'years'} ago`;
  } else if (diffMonths >= 1) {
    return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
  } else if (diffDays >= 1) {
    return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
  } else if (diffHours >= 1) {
    return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
  } else if (diffMinutes >= 60) {
    return `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`;
  } else {
    return '1 minute ago';
  }
}
