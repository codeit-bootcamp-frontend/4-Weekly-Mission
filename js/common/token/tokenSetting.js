// 페이지 접근 시 accessToken확인
function isUserTokenExist(email){
  if(getFromLocalStorage(email)){
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
    // key 정보가 있다면 삭제
    if (getFromLocalStorage(key)) {
      localStorage.removeItem(key);
    }
  }, time);
}

// 주기적으로 토큰 전체 삭제
function periodicallyRemoveAllValue(time) {
  setInterval(() => {
    localStorage.clear();
  }, time);
}

// 로컬 스토리지가 있는지 확인
function isLocalStorageExist() {
  if(window.localStorage.length){
    return true;
  }else{
    return false;
  }
}

export default {saveToLocalStorage, getFromLocalStorage, isUserTokenExist, periodicallyRemoveValue, periodicallyRemoveAllValue, isLocalStorageExist};