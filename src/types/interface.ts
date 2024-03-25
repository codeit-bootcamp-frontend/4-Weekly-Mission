export interface User {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface Folder {
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
}

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface FolderResponse {
  folder: Folder;
  count: number;
}

export interface FoldersData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export interface FoldersResponse {
  data: FoldersData[];
}

export interface LinkData {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
}

export interface FolderLinksResponse {
  data: LinkData[];
}
