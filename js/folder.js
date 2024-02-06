import { redirect } from './common/utils.js';

setTimeout(() => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  redirect('/');
}, 10000);
