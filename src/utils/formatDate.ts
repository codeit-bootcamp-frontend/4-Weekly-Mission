export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  // 월과 일이 10보다 작을 경우 앞에 0을 붙여주기 위해 `padStart(2, '0')` 사용
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  // getMonth()는 0부터 시작
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}
