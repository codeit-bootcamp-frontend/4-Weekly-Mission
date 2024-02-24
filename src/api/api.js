const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export const getFolderInfo = async () => {
  try {
    const response = await fetch(`${BASE_URL}sample/folder`);
    const result = await response.json(); // 재사용성을 위해 response.json()으로 끝맺는게 좋음
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async () => {
  try {
    const response = await fetch(`${BASE_URL}sample/user`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getFolderList = async () => {
  try {
    const response = await fetch(`${BASE_URL}users/1/folders`);
    const result = await response.json(); // 재사용성을 위해 response.json()으로 끝맺는게 좋음
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const getAllLinkData = async (id) => {
  const url = id
    ? `${BASE_URL}users/1/folders/${id}`
    : `${BASE_URL}users/1/links`;
  try {
    const response = await fetch(url);
    const result = await response.json(); // 재사용성을 위해 response.json()으로 끝맺는게 좋음
    return result;
  } catch (error) {
    console.log(error);
  }
};
