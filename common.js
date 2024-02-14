/* common functions used for signin and signup pages */

export const ERROR_MESSAGE = {
    EMPTY_EMAIL_INPUT : '이메일을 입력해 주세요.',
    EMPTY_PASSWORD_INPUT : '비밀번호를 입력해 주세요.',
    INVALID_EMAIL : '올바른 이메일 주소가 아닙니다.',
    INVALID_PASSWORD : '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.',
    UNMATCH_PASSWORD : '비밀번호가 일치하지 않아요.',
    ALREADY_USED_EMAIL : '이미 사용 중인 이메일입니다.',
    CHECK_EMAIL :  '이메일을 확인해 주세요.',
    CHECK_PASSWORD : '비밀번호를 확인해 주세요.',
};

export function isValidEmail(email) {
    // 간단한 이메일 형식 검사
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
    return emailRegex.test(email);
}

export function showErrorMessage(element, message) {
    element.textContent = message;
    element.style.display = 'block';
    element.previousElementSibling.style.borderColor = 'red'; // 테두리 색상 빨간색으로 변경
}

export function hideErrorMessage(element) {
    element.textContent = '';
    element.style.display = 'none';
    element.previousElementSibling.style.borderColor = ''; // 테두리 색상 초기화
}

/*비밀번호와 비밀번호 확인 인풋 칸에서 공통으로 쓸 수 있는 함수를 만들어보려하였으나 실패...*/
/*export function toggleIconVisiblity(input, toggleIcon) {
    const type_ = (input.type === 'password' ? 'text' : 'password');
    input.type = type_;
    toggleIcon.src = (type_ === 'password' ? 'eye-closed.png' : 'eye-open.png');
}*/