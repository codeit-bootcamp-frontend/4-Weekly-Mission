export const getSampleUser = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const result = await response.json();

  return result;
};

export const getSampleFolder = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const result = await response.json();

  return result;
};
