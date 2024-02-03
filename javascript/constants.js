/**
 * 이메일 정규 상수
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * 비밀번호 정규 상수
 */
const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z]).{8,}/

const errorMsg = {
    emptyEmail: '이메일을 입력해 주세요.',
    emptyPassword: '비밀번호를 입력해 주세요.',
    invalidEmail: '올바른 이메일 주소가 아닙니다.',
    invalidPassword: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    checkEmail: '이메일을 확인해 주세요.',
    checkPassword: '비밀번호를 확인해 주세요.',
    usedEmail: '이미 사용 중인 이메일입니다.',
    differentPassword: '비밀번호가 일치하지 않아요.',
}

const minPasswordLength = 8

export { EMAIL_REGEX, PASSWORD_REGEX, errorMsg, minPasswordLength }
