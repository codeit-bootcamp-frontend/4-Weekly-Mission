    const regexEamil = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]'); // 이메일 정규 표현식
const regexPassword = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/) // 영문, 숫자 1개 이상 포함 및 8자 이상

export {regexEamil, regexPassword}