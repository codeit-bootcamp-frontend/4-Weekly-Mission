import { FolderListItemType } from "./FolderListItem";
import { OnModalProps } from "./Modal";

export default interface ListItemProps extends OnModalProps {
  item: FolderListItemType;
}
