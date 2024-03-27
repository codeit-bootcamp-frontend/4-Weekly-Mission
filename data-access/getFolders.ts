import { BASE_URL } from "./BASE_URL";

export async function getFolders({ folderId }: { folderId: string }) {
  const query = folderId ? `?folderId=${folderId}` : "";

  const response = await fetch(`${BASE_URL}users/4/links${query}`);
  const result = await response.json();

  return result;
}
