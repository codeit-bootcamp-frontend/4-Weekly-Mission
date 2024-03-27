export const timeCalculator = (time: string) => {
  const givenTime: Date = new Date(time)
  const currentTime: Date = new Date()

  // 시간 차이 계산 - 밀리초 단위
  const diff = currentTime.getTime() - givenTime.getTime()

  // 밀리초를 분, 시, 일, 월, 년 단위로 변환
  const minutes = Math.floor(diff / 1000 / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (minutes < 2) return '1 minute ago'
  else if (minutes < 60) return `${minutes} minutes ago`
  else if (hours < 24) return hours === 1 ? '1 hour ago' : `${hours} hours ago`
  else if (days < 31) return days === 1 ? '1 day ago' : `${days} days ago`
  else if (months < 12)
    return months === 1 ? '1 month ago' : `${months} months ago`
  else return years === 1 ? '1 year ago' : `${years} years ago`
}
