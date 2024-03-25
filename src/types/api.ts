export interface FolderAPI {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
}

export interface Folder {
  id: number;
  createdAt: string;
  name: string;
  userId: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export interface LinkAPI {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: null;
}

export interface Link {
  id: number;
  createdAt: string;
  updatedAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
  folderId: null;
}

export interface User {
  id: number;
  createAt: string;
  name: string;
  imageSource: string;
  email: string;
  authId: string;
}
