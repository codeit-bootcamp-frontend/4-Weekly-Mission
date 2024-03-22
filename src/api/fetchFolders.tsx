export function fetchFolders(folderId:string) {
  const url =
    folderId === 'all'
      ? 'https://bootcamp-api.codeit.kr/api/users/1/links'
      : `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => data.data)
    .catch((error) => {
      throw error;
    });
}
