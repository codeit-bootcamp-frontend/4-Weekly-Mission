export interface CardProps {
  id: number;
  time: any;
  imgUrl?: string;
  title: string;
  description: string;
  date: any;
  url: string;
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
