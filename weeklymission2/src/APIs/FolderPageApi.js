const BASE_API = "https://bootcamp-api.codeit.kr/api";

export const getUserData = async () => {
  const userData = { email: null, image: null };
  try {
    const response = await fetch(`${BASE_API}/users/1`);
    const result = await response.json();
    userData.email = result.data[0].email;
    userData.image = result.data[0].image_source;
    return userData;
  } catch (error) {
    console.log(error);
    return (userData = null);
  }
};

export const getFolderName = async () => {
  try {
    const response = await fetch(`${BASE_API}/users/1/folders`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getLinkData = async (id) => {
  try {
    if (!id) {
      const response = await fetch(`${BASE_API}/users/1/links`);
      const result = await response.json();
      return result;
    } else {
      const response = await fetch(`${BASE_API}/users/1/links?folderId=${id}`);
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
