import axios from "axios";
import useAsync from "../utils/useAsync";
import processFolderData from "../utils/processFolderData";
const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const useGetSampleFolder = () => {
  const getUserData = () => axios.get(`${BASE_URL}/sample/folder`);
  const { pending, error, data } = useAsync(getUserData);

  const folderData = processFolderData(data?.folder);
  return { pending, error, data: folderData };
};
