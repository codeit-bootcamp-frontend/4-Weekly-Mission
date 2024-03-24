export interface Link {
  id: number;
  title: string;
  url: string;
  description: string;
  createdAt: string;
  imageSource: string;
}

export interface FolderInfoData {
  id: number;
  count: number;

  name: string;
  links: Link[];
  owner: {
    name: string;
    profileImageSource: string;
  };
}

export interface UserInfoData {
  auth_id: string;
  id: number;
  email: string;
  name: string;
  image_source: string;
  created_at: string;
}

export interface UserLinksData {
  id: number;
  url: string;
  title: string;
  description: string;
  image_source: string | null;
  created_at: string;
}
