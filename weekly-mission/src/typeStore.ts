export interface OwnerDataType {
  count: number;
  id: number;
  links: Links[];
  name: string;
  owner: owner;
}

export type Links = {
  id: number;
  createdAt?: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
  created_at: string;
  image_source?: string;
  folder_id?: string;
};

type owner = {
  id: number;
  name: string;
  profileImageSource: string;
};

export interface CategoryDataType {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

export interface ProfileDataType {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface ModalDataType {
  state: boolean;
  type: string;
  title: string;
  buttonText?: string;
  placeHolder?: string;
  deleteTarget?: string;
  folderName?: string;
}

export interface StylePropsType {
  $type?: string;
  $state?: string;
  $background?: string | boolean;
  $show?: boolean;
  $backColor?: string;
  $visibility?: string;
}
