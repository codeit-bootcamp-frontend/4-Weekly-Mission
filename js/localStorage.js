// 로컬 스토리지에 저장하는 함수
const localStorage = {
  save: function( key,value ) {
    return window.localStorage.setItem(key, value);
  }, 
  get: function( key ) {
    return window.localStorage.getItem(key);
  },
  remove: function( key ) {
    return window.localStorage.removeItem(key);
  }
} 

export { localStorage };