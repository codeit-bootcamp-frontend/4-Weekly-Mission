export interface Folder {
  id: number;
  created_at: string;
  image_source: string;
}

export interface FolderUser extends Folder {
  name: string;
  email: string;
  auth_id: string;
  profileImageSource: string;
}

export interface FolderLink extends Folder {
  updated_at?: string;
  url: string;
  title: string;
  description?: string;
  folder_id?: string;
  createdAt: string;
  imageSource?: string;
}

export interface FolderList extends Folder {
  name: string;
  user_id: number;
  favorite: boolean;
  link: { count: number };
}

export interface SharedUser extends Folder {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface SharedFolder extends Folder {
  folder?: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    links?: Link[];
    count: number;
  };
}

export interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description?: string;
  imageSource?: string;
}
