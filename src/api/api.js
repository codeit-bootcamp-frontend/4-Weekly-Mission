export async function getUserInfo() {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/sample/user`);

  if (!response.ok) {
    throw new Error("유저정보를 불러오는데 실패했습니다.");
  }

  const body = await response.json();

  return body;
}

export async function getFolders() {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/sample/folder`);

  if (!response.ok) {
    throw new Error("카드를 불러오는데 실패했습니다.");
  }

  const body = await response.json();

  return body;
}

export async function getUserFolders(folderId) {
  let url = `${process.env.REACT_APP_BASE_URL}/users/1/links`;

  if (folderId) {
    url += `?folderId=${folderId}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("카드를 불러오는데 실패했습니다.");
  }

  const body = await response.json();
  return body;
}

export async function getButtonList() {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users/1/folders`);

  if (!response.ok) {
    throw new Error("버튼 리스트를 불러오는데 실패했습니다.");
  }

  const body = await response.json();
  return body;
}
