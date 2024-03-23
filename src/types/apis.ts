export type GetFolderResponse = {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
};

export type GetUserResponse = {
  id: number;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export type GetLinkResponse = {
  id: number;
  created_at: Date;
  createdAt: Date;
  updated_at: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
  imageSource: string;
  folder_id: number;
  [key: string]: number | Date | string;
};
