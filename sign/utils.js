//모듈화 예정입니다...

const EMAIL_REGEX = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

export function emailCheck(email_address){     
	return EMAIL_REGEX.test(email_address)
}

//error 디자인 설정하기
export function errorColorChange(e){
  e.classList.add('sign-input-error');
}
export function errorColorRomove(e){
  e.classList.remove('sign-input-error');
}
