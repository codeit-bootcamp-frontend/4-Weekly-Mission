import { useFolder } from "../../hooks/useFolder";
import { FolderCard } from "../card/folderCard";

import "./folderList.css";

export const FolderList = () => {
  const { folder } = useFolder();

  return (
    <div className="container">
      {folder?.links?.map((v) => (
        <FolderCard data={v} id={`${v?.id}`} />
      ))}
    </div>
  );
};
