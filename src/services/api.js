import useFetch from 'hooks/useFetch';

export async function getUserInfo() {
  const url = 'users/1';

  const { data, loading, error } = useFetch(url);
  return { data, loading, error };
}

// SharedPage에서 사용
export async function getFoldersInfo() {
  const url = 'sample/folder';

  const { data, loading, error } = useFetch(url);
  return { data, loading, error };
}

// 파라미터(id)가 있을 경우 users/1/links?folderId={해당 폴더 ID}로 확장되도록 변경할 것
export async function getLinksInfo() {
  const url = `users/1/links`;

  const { data, loading, error } = useFetch(url);
  return { data, loading, error };
}
