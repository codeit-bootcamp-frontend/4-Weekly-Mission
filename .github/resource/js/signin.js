import { email, password, emailRegex, showError, deleteError, errorPwd, error } from './auth.js'
import { accessTokenSet } from './accessToken.js';

const url = 'https://bootcamp-api.codeit.kr/api/sign-in';

const form = document.querySelector('.login_form');
form.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
        })
        .then(response => {
            if(!response.ok) { // reponse.ok 결과는 status가 200-299 일 때 true가 된다고 한다.
                throw new Error(`Status: ${response.status}`); // 200~299 이외의 다른 status 라면 error를 발생시키고 catch 문으로 넘어간다.
            }
            return response.json();
        })
        .then(result => {
            accessTokenSet(result);
        })
        .catch(errors => {
            if(email.value !== 'test@codeit.com') {
                showError(email, error, 'email_check');
            } else if(password.value !== 'sprint101') {
                showError(password, errorPwd, 'pwdCheck');
            }
        })
    }
);

// 비밀번호 input
password.addEventListener('focusout', () => {
    if(password.value === '') {
        showError(password, errorPwd, 'pwdEmpty');
    } else if(password.value !== '') {
        deleteError(password, errorPwd);
    }
});

// 이메일 정규식, 값 비교
email.addEventListener('focusout', () => {
    if(emailRegex.test(email.value) && email.value !== '') {
        deleteError(email, error);
    }
});
