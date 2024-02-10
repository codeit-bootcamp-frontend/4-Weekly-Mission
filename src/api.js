const URL = "https://bootcamp-api.codeit.kr/api/sample";

async function User() {
  const response = await fetch(`${URL}/user`);
  const body = await response.json();
  return body;
}

export default User;
