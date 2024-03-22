import { FolderListItem } from "./FolderListItem";
import { onModal } from "./Modal";

export interface FolderMainProps {
  memoizedAddImgSrc: string;
  memoizedAddImgAlt: string;
  isSelectedAll: 0;
  folderListItem: FolderListItem[];
  filterdFolderListItem: FolderListItem[];
  folderList: FolderListProps[];
  handleButtonListItemClick: handleButtonListItemClick;
  clickedButtonId: number;
  handleModal: onModal;
  folderTitleName: string;
  value: string;
}

export interface FolderListProps {
  created_at: string;
  favorite: boolean;
  id: number;
  link: { count: number };
  name: string;
  user_id: number;
}

export type handleButtonListItemClick = (id: number, name: string) => void;
