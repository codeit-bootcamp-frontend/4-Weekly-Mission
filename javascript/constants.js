export const EMAILREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
export const PASSWORDREGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const ERROREMEESAGE = {
    EMPTYEMAIL: '이메일을 입력해주세요.',
    EMPTYPASSWORD: '비밀번호를 입력해주세요.',
    UNVAILDEMAILFORMAT: '올바른 이메일 주소가 아닙니다.',
    UNVALIDEMAIL: '이메일을 확인해 주세요.',
    UNVALIDPASSWORD: '비밀번호를 확인해 주세요.',
    ALREADYUSEEMAIL: '이미 사용중인 이메일입니다.',
    UNVAILDPASSOWRDFORMAT: '비밀번호 영문,숫자 조합 8자 이상 입력해 주세요.',
    DIFFERPASSOWRD: '비밀번호가 일치하지 않아요.'
}