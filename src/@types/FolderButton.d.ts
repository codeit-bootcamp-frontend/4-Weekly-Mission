import { handleButtonListItemClick } from "./FolderMain";
import { OnModalProps } from "./Modal";

export interface FolderButtonProps extends OnModalProps {
  handleButtonListItemClick: handleButtonListItemClick;
  folderList: FolderListProps[];
  clickedButtonId: number;
  memoizedAddImgSrc: string;
  memoizedAddImgAlt: string;
}
