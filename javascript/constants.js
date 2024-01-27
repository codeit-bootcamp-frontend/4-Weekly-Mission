/**
 * 이메일 정규 상수
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * 비밀번호 정규 상수
 */
const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z]).{8,}/

export { EMAIL_REGEX, PASSWORD_REGEX }
