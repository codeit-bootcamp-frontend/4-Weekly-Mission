const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export async function getUserFolders() {
  try {
    const response = await fetch(BASE_URL + "users/1/folders");
    if (!response.ok) {
      throw new Error("error");
    }
    const answer = await response.json();
    return answer;
  } catch (err) {
    console.error(err);
    return {};
  }
}

export async function getUserLinks(folder) {
  if (folder == null) {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/users/1/links"
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const answer = await response.json();

      return answer;
    } catch (err) {
      console.error(err);
      return {};
    }
  } else {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/users/1/links?isNull(folderId)"
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const answer = await response.json();

      return answer;
    } catch (err) {
      console.error(err);
      return {};
    }
  }
}
