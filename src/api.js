const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export async function fetchProfile() {
  const userID = 1;
  const res = await fetch(`${BASE_URL}users/${userID}`);
  if (!res.ok) {
    throw new Error("cannot download profile info");
  }
  const result = await res.json();
  return result.data[0];
}

export async function fetchSampleFolder() {
  const res = await fetch(`${BASE_URL}sample/folder`);
  if (!res.ok) {
    throw new Error("cannot download links");
  }
  const body = await res.json();
  return body.folder;
}

export async function fetchFolders() {
  const res = await fetch(`${BASE_URL}users/1/folders`);
  if (!res.ok) {
    throw new Error("cannot download the list of folders");
  }
  const result = await res.json();
  return result.data;
}

export async function fetchFolder(id = null) {
  var query = "";
  if (id !== null) {
    query += `?folderId=${id}`;
  }
  console.log(`fetch folder name ${id}`);
  const res = await fetch(`${BASE_URL}users/1/links${query}`);
  if (!res.ok) {
    throw new Error("cannot download the selected folder");
  }
  const result = await res.json();
  return result.data;
}
