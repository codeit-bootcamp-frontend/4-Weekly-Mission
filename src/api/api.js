const URL = "https://bootcamp-api.codeit.kr/api";

export const getUser = async ({ userId }) => {
  try {
    const response = await fetch(`${URL}/users/${userId}`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getFolder = async () => {
  try {
    const response = await fetch(`${URL}/sample/folder`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error fetching folder data:", error);
    throw error;
  }
};
