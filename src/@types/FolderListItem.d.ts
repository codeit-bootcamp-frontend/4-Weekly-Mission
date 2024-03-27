import { OnModalProps } from "./Modal";

export interface FolderListItemProps extends OnModalProps {
  folderListItem: FolderListItem[];
  filterdFolderListItem: FolderListItem[];
  value: string;
}

export interface FolderListItem extends SearchListProps {
  id: number;
  created_at: string;
  updated_at: string;
  image_source: string;
  folder_id: string;
}

export interface SearchListProps {
  url: string;
  title: string;
  description: string;
}
