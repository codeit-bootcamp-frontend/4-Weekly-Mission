export const getProfileData = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );

  if (!response.ok) return;

  const data = await response.json();

  return data;
};

export const getFolderData = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );

  if (!response.ok) return;

  const data = await response.json();

  return data;
};
