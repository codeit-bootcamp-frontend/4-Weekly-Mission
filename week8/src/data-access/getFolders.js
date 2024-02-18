import { BASE_URL } from "./BASE_URL";

export const getFolders = async () => {
  const response = await fetch(`${BASE_URL}users/1/links`);
  const result = await response.json();
  return result;
};

export const getFolder = async ({ folderID }) => {
  const query = `?folderId=${folderID}`;
  const response = await fetch(`${BASE_URL}users/1/links${query}`);
  const result = await response.json();
  return result;
};
