export type UserType = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export type UserLinkType = {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string | null;
  image_source: string | null;
  folder_id: string | null;
};

export type UserFolderType = {
  id: number;
  created_at?: string;
  name: string;
  user_id?: number;
  favorite?: boolean;
  link?: { count: number };
};

export type LinkType = {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  url: string;
  title: string;
  description: string | null;
  imageSource: string | null;
  folderId: string | null;
};

export type FolderType = {
  id: number;
  name: string;
  owner: { id: number; name: string; profileImageSource: string };
  links: Array<LinkType>;
  count: number;
};
