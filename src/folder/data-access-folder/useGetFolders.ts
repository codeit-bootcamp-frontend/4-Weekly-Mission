import { axiosInstance } from "../../sharing/util";
import { useAsync } from "../../sharing/util";

interface Props {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link: any;
}

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = data?.data ?? [];
  const sortedFolders: Props = folders.sort(
    (a: Props, b: Props) => a?.id - b?.id
  );

  return { loading, error, data: sortedFolders };
};
