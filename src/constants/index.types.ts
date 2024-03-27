export interface FolderData {
  name: string;
  owner: {
    profileImageSource: string;
    name: string;
  };
  links: ObjectLink[];
  count: number;
}

export interface FormatLink {
  id: string;
  image_source: string;
  created_at: Date;
  description: string;
  title: string;
  url: string;
}

export interface ObjectLink {
  id: string;
  imageSource: string;
  createdAt: Date;
  description: string;
  title: string;
  url: string;
}

export interface User {
  auth_id: string;
  created_at: Date;
  email: string;
  id: number;
  image_source: string;
  name: string;
}

export interface ObjectFolder {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}
