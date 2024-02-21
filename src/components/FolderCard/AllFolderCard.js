import { useAsync } from "../../hooks/useAsync";
import { axiosInstance } from "../../utils/axiosInstance";
import ReadFolderCard from "./ReadFolderCard";

function AllFolderCard() {
  const getAllFolder = () => axiosInstance.get("users/4/links");
  const { loading, data } = useAsync(getAllFolder);

  if (!data) {
    return;
  }
  return (
    <div>
      {loading ? <div>Loading...</div> : <ReadFolderCard links={data.data} />}
    </div>
  );
}

export default AllFolderCard;
