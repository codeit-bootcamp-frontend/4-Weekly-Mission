export const momentFormat = (createdAt) => {
  const date = new Date(createdAt)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}. ${month}. ${day}`
}

export const elapsedTimeCalc = (date) => {
  const end = new Date(date)

  const minutes = Math.floor((Date.now() - end.getTime()) / 1000 / 60)
  if (minutes < 2) return `1 minute ago`
  if (minutes < 59) return `${minutes} minute ago`

  const hours = Math.floor(minutes / 60)
  if (hours < 1) return `1 hour ago`
  if (hours <= 23) return `${hours} hours ago`

  const day = Math.floor(hours / 24)
  if (day <= 1) return `1 day ago`
  if (day <= 30) return `${day} days ago`

  const month = Math.floor(day / 31)
  if (month === 1) return `${month} month ago`
  if (month >= 1 && month <= 11) return `${month} months ago`
  if (month === 12) return `1 year ago`
  if (month > 12) return `${Math.floor(month / 12)} years ago`
}
