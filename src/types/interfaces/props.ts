import { Card } from './fetchDatas';

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
