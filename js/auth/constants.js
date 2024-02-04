export const BASE_URL = 'https://bootcamp-api.codeit.kr';
export const SIGN_IN_ENDPOINT = '/api/sign-in';
export const CHECK_EMAIL_ENDPOINT = '/api/check-email';
export const SIGN_UP_ENDPOINT = '/api/sign-up';

export const VALIDATION_MESSAGES = {
    email: {
        incorrect: "이메일을 확인해 주세요.",
        alreadyInUse: "이미 사용 중인 이메일입니다.",
        invalid: "올바른 이메일 주소가 아닙니다.",
        empty: "이메일을 입력해 주세요."
    },
    password: {
        incorrect: "비밀번호를 확인해 주세요.",
        empty: "비밀번호를 입력해 주세요.",
        weak: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
        mismatch: "비밀번호가 다릅니다."
    }
};

