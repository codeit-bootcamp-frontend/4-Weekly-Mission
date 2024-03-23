import { folderDataType } from "../../types/folderTypes";
import { FolderCard } from "../card/folderCard";
import "./folderList.css";

interface IfolderList {
  list: folderDataType[];
}

export const FolderList = ({ list }: IfolderList) => {
  return (
    <div className="container">
      {list?.map((v) => (
        <FolderCard key={`${v.id}`} data={v} />
      ))}
    </div>
  );
};
