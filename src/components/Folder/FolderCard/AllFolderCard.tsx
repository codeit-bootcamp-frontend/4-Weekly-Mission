import React from "react";
import { useAsync } from "../../../hooks/useAsync.tsx";
import { axiosInstance } from "../../../utils/axiosInstance.tsx";
import ReadFolderCard from "../ReadFolderCard.tsx";

interface Data {
  data: any;
  loading: boolean;
}

function AllFolderCard() {
  const getAllFolder = () => axiosInstance.get("users/4/links");
  const { loading, data }: Data = useAsync(getAllFolder);

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
