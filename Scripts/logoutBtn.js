//folder에서의 토큰제거 함수 기능 실험을 위한 임시 js입니다. 추후 로그아웃 기능 등록을 담당할 것으로 예상됩니다.
import {accessTokenRemoveFromLocalStorageToLogout} from './tokenHandle.js'

const logoutBtn = document.querySelector('#logoutBtn')

logoutBtn.addEventListener('click', accessTokenRemoveFromLocalStorageToLogout)