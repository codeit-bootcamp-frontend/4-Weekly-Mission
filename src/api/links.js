import { BASE_API_URL } from "./base";

export const getLinks = async (folderId = null) => {
  let url = `${BASE_API_URL}/api/users/1/links`;
  if (folderId) url += `?folderId=${folderId}`;
  const response = await fetch(url);

  if (!response.ok) return;
  const data = await response.json();
  return data;
};
