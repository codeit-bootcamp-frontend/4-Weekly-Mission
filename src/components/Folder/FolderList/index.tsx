import { MouseEvent } from "react";
import { FolderAdd } from "../FolderAdd";
import { Folder } from "../../../types";
import "./FolderList.css";

interface Props {
  folderList: Folder[];
  selectId: number | null;
  onSelectFolderList: ({ name, id }: { name: string; id: number }) => void;
}

export const FolderList = ({
  folderList,
  onSelectFolderList,
  selectId,
}: Props) => {
  const handleClickFolderList = (e: MouseEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      const id = target.id;
      const textContent = target.textContent;

      onSelectFolderList({ name: textContent || "", id: parseInt(id) || 0 });
    }
  };

  // const handleClickFolderList = (e: MouseEvent) => {
  //   onSelectFolderList({
  //     name: (e.target as HTMLElement).textContent as string,
  //     id: parseInt((e.target as HTMLElement).id),
  //   });
  // };

  return (
    <div className="folderList">
      <div className="folderList-content">
        <span
          className={`folderList-button ${!selectId ? "selected" : ""}`}
          onClick={handleClickFolderList}
          id={selectId === null ? "" : selectId?.toString()}
        >
          전체
        </span>
        {folderList?.map((item) => (
          <span
            className={`folderList-button ${
              selectId === item.id ? "selected" : ""
            }`}
            key={item.id}
            id={item.id.toString()}
            onClick={handleClickFolderList}
          >
            {item.name}
          </span>
        ))}
      </div>

      <FolderAdd />
    </div>
  );
};
