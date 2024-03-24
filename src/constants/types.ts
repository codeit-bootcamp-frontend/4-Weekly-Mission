import { ReactNode } from "react";

/* NOTE - SHARED 페이지 API 데이터 */

/* SECTION - SHARED HEADER USERPROFILE */

export interface UserProfile {
  id?: number;
  name?: string;
  links: Share[];
  owner: Owner;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

/* SECTION - SHARED MAIN CARD */

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

/* NOTE - Folder 페이지 API 데이터 */

/* SECTION - FolderList */

export interface FolderList {
  created_at?: string;
  favorite?: boolean;
  id: number | null;
  name?: string;
  user_id?: number;
  link?: {
    count: number;
  };
}

/* SECTION - Folder Card */

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

export interface BaseModal {
  children: ReactNode;
  title: string;
  onClose?: () => void;
}
