import { hostname } from "./auth.js";

// accessToken 추가
export const accessTokenSet = (result) => {
    localStorage.setItem('accessToken', result.data.accessToken);
    window.location.href = hostname;
}

// accessToken이 있을 시 페이지 이동
if (localStorage.getItem('accessToken')) {
    location.href = hostname;
}