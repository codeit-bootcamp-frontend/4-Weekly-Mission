export const getSampleUser = async () => {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getSampleFolder = async () => {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
