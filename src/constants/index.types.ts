export interface FolderData {
  name: string;
  owner: {
    profileImageSource: string;
    name: string;
  };
  links: LinkProps[];
  count: number;
}

export interface FormetLinkProps {
  id: string;
  image_source: string;
  created_at: Date;
  description: string;
  title: string;
  url: string;
}

export interface LinkProps {
  id: string;
  imageSource: string;
  createdAt: Date;
  description: string;
  title: string;
  url: string;
}

export interface UserDataProps {
  auth_id: string;
  created_at: Date;
  email: string;
  id: number;
  image_source: string;
  name: string;
}

export interface UserFolderProps {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}
