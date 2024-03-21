import { UserFolderType } from '../../../types/types';

export type FoldersNavbarProps = {
  items: UserFolderType[];
  selectedItem: { id: number; name: string };
  onChangeSelectItem: (id: number, name: string) => void;
};
