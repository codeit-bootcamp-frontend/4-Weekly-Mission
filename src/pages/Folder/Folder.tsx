import useFetch from "utils/hooks/useFetch";
import FolderHeader from "./Header/AddLInk";
import FolderMain from "./Main/FolderMain";
import { FOLDER_LIST_API_URL } from "constants/url";
import { FolderList } from "constants/types";

interface FolderFetchData {
  data: FolderList[];
}

const FolderPage = () => {
  const {
    data: folderListData,
    error: dataError,
    loading: dataLoading,
  } = useFetch<FolderFetchData>(FOLDER_LIST_API_URL);

  if (dataLoading) return <div>Loading...</div>;
  if (dataError || !folderListData) return <div>Error</div>;

  const folderList = folderListData.data;

  return (
    <>
      <FolderHeader folderList={folderList} />
      <FolderMain folderList={folderList} />
    </>
  );
};

export default FolderPage;
