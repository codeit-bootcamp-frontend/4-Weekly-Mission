export interface Link {
  id: string;
  url: string;
  title: string;
  description: string;
  createdAt: string;
  imageSource: string;
  created_at: string;
  image_source: string;
}

export interface FolderInfo {
  owner: {
    profileImageSource: string;
    name: string;
  };
  name: string;
  links: Link[];
}

export interface Folder {
  id: string;
  created_at: string;
  favorite: boolean;
  name: string;
  link: {
    count: number;
  };
  user_id: number;
}

export interface User {
  email: string;
  image_source: string;
  profileImageSource: string;
}
