//모듈화 예정입니다...

const EMAIL_REGEX = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

export function emailCheck(email_address){     
	return EMAIL_REGEX.test(email_address)
}