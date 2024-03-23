import { FolderCard } from "../card/folderCard";

import "./folderList.css";

export const FolderList = ({ list }) => {
  return (
    <div className="container">
      {list?.map((v) => (
        <FolderCard data={v} id={`${v?.id}`} />
      ))}
    </div>
  );
};
