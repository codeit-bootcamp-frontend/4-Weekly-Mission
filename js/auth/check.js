import { getAccessToken } from './storage.js';

export const checkAccessTokenAndRedirect = () => {
    const accessToken = getAccessToken();
    if (accessToken) {
        window.location.href = '/folder.html';
    }
};

checkAccessTokenAndRedirect();