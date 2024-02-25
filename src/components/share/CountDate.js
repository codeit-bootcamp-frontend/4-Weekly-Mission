function CountDate(time){
  const creat = time // 받아온 time(Card에 적혀있는 시간)
  const now = new Date() // 현재시간
  const diff = now.getTime() - creat.getTime(); // time - creat = 지난 시간
  
  // 밀리 초로 단위 변환
  const secInMS = Math.floor(diff / 1000);
  const minInMS = Math.floor(secInMS / 60);
  const hourInMS = Math.floor(minInMS / 60);
  const dayInMS = Math.floor(hourInMS / 24);
  const monthInMS = Math.floor(dayInMS / 30);

  if(monthInMS >= 12){
    // 12개월 이상은 “{OO/12(소수점 버린 정수)} years ago”
    return `${Math.floor(monthInMS / 12)} years ago`;
  } else if (monthInMS > 0) {
    // 1개월 이상은 “OO months ago”
    return `${monthInMS} months ago`;
  } else if (dayInMS >= 31) {
    // 31일 이상은 “1 month ago”
    return `1 month ago`;
  } else if (dayInMS > 0) {
    // 1일 이상은 “OO days ago”
    return `${dayInMS} days ago`;
  } else if (hourInMS >= 24) {
    // 24시간 이상은 “1 day ago”
    return `1 day ago`;
  } else if (hourInMS > 0) {
    // 1시간 이상은 “OO hours ago”
    return `${hourInMS} hours ago`;
  } else if (minInMS >= 60) {
    // 60분 이상은 “1 hour ago”
    return `1 hour ago`;
  } else if (minInMS > 1) {
    // 2분 이상은 “OO minutes ago”
    return `${minInMS} minutes ago`;
  } else {
    // 1분 미만은 “1 minute ago”
    return `1 minute ago`;
  }
}

export default CountDate;
