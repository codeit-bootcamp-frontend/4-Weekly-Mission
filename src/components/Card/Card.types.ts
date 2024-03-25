import { UserFolderType } from '../../types/types';

export type CardProps = {
  createdAt: string | null;
  url: string;
  title: string;
  imageURL: string | null;
  bookmark: boolean;
  popover: boolean;
  folders?: UserFolderType[];
};
