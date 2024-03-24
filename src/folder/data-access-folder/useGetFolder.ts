import { mapFolderData } from "../util-map";
import { useAsync } from "../../sharing/util";
import { axiosInstance } from "../../sharing/util";

interface Props {
  loading: boolean;
  error: any;
  data?: string[] | null;
}

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get("sample/folder");
  const { loading, error, data }: Props = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
