import axios from "axios";
import useAsync from "../utils/useAsync";
const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const useGetFolderLists = () => {
  const getFolderLists = () => axios.get(`${BASE_URL}/users/4/folders`);
  const { pending, error, data } = useAsync(getFolderLists);

  const folderLists = data?.data ?? [];
  const sortedFolderLists = folderLists.sort((a, b) => a?.id - b?.id);

  return { pending, error, data: sortedFolderLists };
};
