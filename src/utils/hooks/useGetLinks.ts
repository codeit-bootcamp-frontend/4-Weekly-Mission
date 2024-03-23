import useFetch from "utils/hooks/useFetch";

export const useGetLinks = (userId: number, folderId: number | null) => {
  const API = process.env.REACT_APP_API;
  return useFetch(
    folderId
      ? `${API}/users/${userId}/links?folderId=${folderId}`
      : `${API}/users/${userId}/links`
  );
};
