// 페이지 접근 시 accessToken확인
function isUserTokenExist(){
  if(getFromLocalStorage('user')){
    return true;
  }else{
    return false;
  }
}

// 로컬 스토리지에 저장
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

// 로컬 스토리지에서 값을 가져오는 함수
function getFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  return storedValue ? storedValue : null;
}

// 주기적으로 로컬 스토리지의 accessToken 삭제하는 함수
function periodicallyRemoveValue(key, time) {
  setInterval(() => {
    // 'user'정보가 있다면 삭제
    if (getFromLocalStorage(key)) {
      localStorage.removeItem(key);
    }
  }, time);
}

export default {saveToLocalStorage, getFromLocalStorage, isUserTokenExist, periodicallyRemoveValue};