/**
 * 이메일 정규 상수
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * 비밀번호 정규 상수
 */
const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/

export { emailRegex, passwordRegex }
