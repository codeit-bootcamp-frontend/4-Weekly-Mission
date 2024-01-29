// 이메일 형식 확인하는 정규식
const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

// 비밀번호 형식 확인하는 정규식
const passwordRegex = /^(?=.*[a-zA-Z0-9]).{8,15}$/

export { emailRegex, passwordRegex }