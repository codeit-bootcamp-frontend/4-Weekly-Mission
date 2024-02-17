const API_ADDRESS = "https://bootcamp-api.codeit.kr/api";

export const getProfile = async () => {
  const response = await fetch(`${API_ADDRESS}/users/1`);
  const result = await response.json();
  const userData = {
    email: result.data[0].email,
    image: result.data[0].image_source,
  };

  if (!response.ok) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  return userData;
};

export const getFolderName = async () => {
  const response = await fetch(`${API_ADDRESS}/users/1/folders`);
  const result = await response.json();

  if (!response.ok) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  return result;
};

export const getLinkData = async (id) => {
  if (!id) {
    const response = await fetch(`${API_ADDRESS}/users/1/links`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error("불러오는 데 실패했습니다.");
    }

    return result;
  } else {
    const response = await fetch(`${API_ADDRESS}/users/1/links?folderId=${id}`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error("불러오는 데 실패했습니다.");
    }

    return result;
  }
};
