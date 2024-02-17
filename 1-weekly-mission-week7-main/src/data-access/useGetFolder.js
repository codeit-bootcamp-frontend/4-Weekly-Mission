import { mapFolderData } from "util/mapFolderData";
import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";
/*기본 요구사항 - 폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용해 주세요.
폴더 버튼을 클릭하면 폴더에 해당하는 링크들로 카드를 구성해 주세요. 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다들는 UI를 보여주세요.*/
export const useGetFolder = () => {
  const getUser = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getUser);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
