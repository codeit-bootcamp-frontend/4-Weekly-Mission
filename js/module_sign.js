export const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
export const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; // 규칙 : 영문, 숫자 조합 8자 이상 입력해야한다
export const LOGIN_INFO = {
    email: 'test@codeit.com',
    password: 'sprint101',
};

// 이메일 형식 체크
export function emailValidCheck(email) {
    return !EMAIL_PATTERN.test(email);
}
// 비밀번호 생성 규칙 검사
export function passwordRoleCheck(value) {
    return !PASSWORD_PATTERN.test(value);
}
// 이벤트 타입에 따른 에러박스 토글
// 에러 메시지가 있으면 활성, 없으면 비활성 분기
export function errorBoxToggle(el, text) {
    if (!text) {
        errorBoxDisable(el);
    } else {
        errorBoxEnable(el, text);
    }
}
// 에러박스 활성화
export function errorBoxEnable(el, text) {
    const ERROR_BOX_ELEM = document.querySelector(`[data-target='${el.getAttribute('id')}']`);
    ERROR_BOX_ELEM.textContent = text;
    ERROR_BOX_ELEM.style.display = 'block';
    el.classList.add('error-box');
}
// 에러박스 비활성화
export function errorBoxDisable(el) {
    const ERROR_BOX_ELEM = document.querySelector(`[data-target='${el.getAttribute('id')}']`);
    ERROR_BOX_ELEM.textContent = '';
    ERROR_BOX_ELEM.style.display = 'none';
    el.classList.remove('error-box');
}

// 비밀번호 view 여부 switch
export function passwordSwitch(targetElement) {
    const CHECK = targetElement.dataset.check;
    const TARGET_INPUT = document.querySelector(`#${CHECK}`);
    const EYE = targetElement.querySelector('img');
    const EYE_STATUS = EYE.dataset.onoff == 'off' ? 'on' : 'off';
    const INPUT_TYPE = EYE_STATUS == 'off' ? 'password' : 'text';

    EYE.dataset.onoff = EYE_STATUS;
    EYE.setAttribute('src', `/images/eye-${EYE_STATUS}.png`);

    TARGET_INPUT.setAttribute('type', INPUT_TYPE);
}

// 비밀번호 - 비밀번호 확인 값 대조
export function passwordConfirm(el) {
    const PASSWORD = document.querySelector('#password');

    if (PASSWORD.value != el.value) {
        errorBoxToggle(el, '비밀번호가 다릅니다');
    } else {
        errorBoxToggle(el);
    }
}
// 로그인 api
export async function apiSignin(formData) {
    try {
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.status == 200) {
            // 성공시
            const result = await response.json();
            window.localStorage.setItem('accessToken', result.data.accessToken);
            return Promise.resolve('success');
        } else if (response.status == 400) {
            return Promise.reject('fail');
        }
    } catch (error) {
        alert('통신이 원활하지 않습니다. 다시 시도해주십시요');
    }
}
// 회원가입 api
export async function apiSignup(formData) {
    try {
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.status == 200) {
            // 성공시
            const result = await response.json();
            window.localStorage.setItem('accessToken', result.data.accessToken);
            return Promise.resolve('success');
        } else if (response.status == 400) {
            return Promise.reject('fail');
        }
    } catch (error) {
        alert('통신이 원활하지 않습니다. 다시 시도해주십시요');
    }
}
export async function apiEmailCheck(email) {
    const formData = {
        email: email,
    };
    try {
        const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.status == 200) {
            return Promise.resolve('success');
        } else {
            const result = await response.json();
            return Promise.reject(result.error.message);
        }
    } catch (error) {
        console.log(error);
    }
}
