import { redirect, removeLocalstorage } from './common/utils.js';

setTimeout(() => {
  removeLocalstorage('accessToken');
  removeLocalstorage('refreshToken');
  redirect('/main');
}, 10000);
