const profileBox = document.querySelector('.myProfile');
const profileName = document.querySelector('#myProfileName');
const loginBtn = document.querySelector('#LoginBtn');

/*
JSON.stringify() : JavaScript 객체 -> 문자열
JSON.parse() : 문자열 -> JavaScript 객체 
*/

// 사용자 이메일 가져오기
const getEmail = async function() {
  try {
    const response  = await fetch('https://bootcamp-api.codeit.kr/api/sample/user') 
    const userInfo = await response.json();
    const email = await userInfo.email;
    // throw new Error('Not User!!');
    await setEmail("user", email);

  } catch (error) {
    console.log(error)
    await setEmail("unuser");
  }
}

const setEmail = async function(status, email) {
  if(status === "user") {
    const myEmail = await document.querySelector('#myEmail');
    await (myEmail.textContent = email);
    await loginBtn.setAttribute('style', 'display: none;');
  } else if(status === "unuser") {
    await profileName.setAttribute('style', 'display: none;');
  }
}

getEmail();