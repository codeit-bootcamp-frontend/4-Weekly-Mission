import { BASE_URL } from "./BASE_URL";

export const getFolders = async ({ folderId }) => {
  const query = folderId ? `?folderId=${folderId}` : "";

  const response = await fetch(`${BASE_URL}users/1/links${query}`);
  const result = await response.json();

  return result;
};
