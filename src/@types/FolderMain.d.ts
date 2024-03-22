import FolderListItemProps from "./FolderListItem";
import { onModal } from "./Modal";

export interface FolderMainProps {
  memoizedAddImgSrc: string;
  memoizedAddImgAlt: string;
  isSelectedAll: 0;
  folderListItem: FolderListItemProps[];
  filterdFolderListItem: FolderListItemProps[];
  folderList: string[];
  handleButtonListItemClick: handleButtonListItemClick;
  clickedButtonId: number;
  handleModal: onModal;
  folderTitleName: string;
  value: string;
}

export type handleButtonListItemClick = (id: number, name: string) => void;
