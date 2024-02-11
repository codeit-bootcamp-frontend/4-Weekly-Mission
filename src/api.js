export const getProfileData = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );

  if (!response.ok) return;

  const data = await response.json();
  console.log(data);

  return data;
};
