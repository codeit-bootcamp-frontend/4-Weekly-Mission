const getSampleUserEmail = async () => {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
  const { email } = await response.json();
  return email;
};

export { getSampleUserEmail };
