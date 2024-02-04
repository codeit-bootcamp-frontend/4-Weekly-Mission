import { getAccessToken } from './storage.js';

/**
 * 로컬 스토리지에서 accessToken을 확인
 * accessToken이 존재하면 '/folder.html' 페이지로 리다이렉트
 */
export const checkAccessTokenAndRedirect = () => {
    const accessToken = getAccessToken();
    if (accessToken) {
        window.location.href = '/folder.html';
    }
};

checkAccessTokenAndRedirect();
