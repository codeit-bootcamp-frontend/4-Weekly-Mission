export async function getUserInfo() {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user`);

  if (!response.ok) {
    throw new Error("유저정보를 불러오는데 실패했습니다.");
  }

  const body = await response.json();

  return body;
}

export async function getFolders() {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/folder`);

  if (!response.ok) {
    throw new Error("카드를 불러오는데 실패했습니다.");
  }

  const body = await response.json();

  return body;
}
