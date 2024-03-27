import { ReactNode } from 'react';
export interface Folder {
  id: number | null;
  name: string;
  link: {
    count?: number;
  };
}

export interface FolderItem {
  id: number | null;
  name: string;
  count?: number;
}

export interface Item1 {
  id: number;
  url: string;
  image_source?: string;
  title: string;
  created_at: string;
  description: string;
}

export interface Item2 {
  id: number;
  url: string;
  imageSource?: string;
  title: string;
  createdAt: string;
  description: string;
}

export interface HeaderItem {
  name: string;
  email: string;
  profileImageSource: string;
}

export interface HookProps {
  children: ReactNode;
}
