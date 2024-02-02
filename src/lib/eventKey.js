/**
 * 
 * @param {*} callback - Enter키 눌렸을 때 실행될 함수
 */
function enter(callback){
  if(event.key === 'Enter'){
    callback()
  }
}

export {enter}