import { ReactNode } from "react";

export interface Folder {
  created_at: string;
  date: string;
  description: string | null;
  folder_id: number | null;
  id: number;
  image_source: string | null;
  time?: string;
  title: string | null;
  updated_at: string | null;
  url: string;
}

export interface FolderList {
  created_at?: string;
  favorite?: boolean;
  id: number | null;
  name: string;
  user_id?: number;
  link?: {
    count: number;
  };
}

export interface Share {
  createdAt: string;
  date: string;
  description: string;
  id: number;
  imageSource: string;
  time?: string;
  title: string;
  url: string;
}

export interface BaseModal {
  children: ReactNode;
  title: string;
  onClose?: () => void;
}

export interface User {
  id?: number;
  name?: string;
  owner?: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}
