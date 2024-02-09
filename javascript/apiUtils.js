import { URL } from './constants.js';

const postAPI = async (url, userData) => {
    return fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

/**
 * 로그인 정보 fetch 함수
 * @param {*} data 이메일, 비밀번호 정보 객체
 * @returns
 */
const confirmLogin = async (data) => {
    try {
        const response = await postAPI(URL.main + URL.signin, data);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const result = await response.json();
        storeToken(result);
        return response;
    } catch (error) {
        console.error('Error during login:', error);
    }
};

const emailUsable = async (input) => {
    const emailData = { email: input };

    try {
        const response = await postAPI(URL.main + URL.checkEmail, emailData);
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response;
    } catch (error) {
        console.error('Error during email confirmation:', error);
    }
};

const confirmSignup = async (data) => {
    try {
        const response = await postAPI(URL.main + URL.signup, data);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const result = response.json();
        storeToken(result);
        return response;
    } catch (error) {
        console.error('Error during signup:', error);
    }
};

const storeToken = (result) => {
    localStorage.setItem('accessToken', result.data.accessToken);
    localStorage.setItem('refreshToken', result.data.refreshToken);
};

export { confirmLogin, emailUsable, confirmSignup };
