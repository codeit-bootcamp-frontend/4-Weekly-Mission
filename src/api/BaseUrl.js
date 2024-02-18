const baseUrl = 'https://bootcamp-api.codeit.kr/api';

export const getUser = async () => {
  try {
    const response = await fetch(`${baseUrl}/sample/user`);
    if (!response.ok) {
      throw new Error(`프로필 데이터를 불러오는 데 실패했습니다.`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getFolder = async () => {
  try {
    const response = await fetch(`${baseUrl}/sample/folder`);
    if (!response.ok) {
      throw new Error(`폴더 데이터를 불러오는 데 실패했습니다.`);
    }

    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
