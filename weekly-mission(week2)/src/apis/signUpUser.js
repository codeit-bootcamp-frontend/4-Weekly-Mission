// 회원가입 관련 통신 함수들 모음

const isDuplicateEmail = async (email) => {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email)
  });

  if (response.status === 409) return true;

  return false;
}

export { isDuplicateEmail };
