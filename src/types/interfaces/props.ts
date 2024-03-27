import { ModalOpen } from '../functionsType';
import { Card, Folder } from './fetchDatas';

export interface CardProps extends Card {
  date: any;
  time: any;
}

export interface FacebookShareProps {
  url: string;
  quote: any;
}

export interface HeaderProfileProps {
  url: string;
}

export interface InformationProps {
  url: string;
}

export interface FolderOptionBarProps {
  text: string;
  selectedFolderId: number;
}

export interface FolderSortBarProps {
  folders: Folder[];
  handleClick: any;
  selectedId: number;
}

export interface OptionButtonProps {
  id: number;
  svg: any;
  text: string;
  handleModalOpen: any;
}

export interface PopOverProps {
  id: number;
  url: string;
}

export interface SortButtonProps {
  id: number;
  text: string;
  handleClick: any;
  isClicked?: boolean;
}
