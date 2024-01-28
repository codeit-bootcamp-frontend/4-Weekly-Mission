  //이메일 기준값 지정
  function baseEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  //비밀번호 기준값 지정
  function basePassword(password) {
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
    return passwordRegex.test(password);
  }

export default{baseEmail, basePassword};