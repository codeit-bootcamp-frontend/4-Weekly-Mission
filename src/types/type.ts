export interface LinkType {
  id: number;
  createdAt?: string;
  created_at?: string;
  imageSource?: string;
  image_source?: string;
  title: string;
  description: string;
  url: string;
}

export interface CategoryType {
  created_at?: string;
  favorite?: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id?: number;
}

export interface DefaultCategoryType {
  id: number;
  name: string;
  link: {
    count: number;
  };
}

export interface SelectCategoryType {
  id: number;
  name: string;
}

export interface ModalActionType {
  isView?: boolean;
  action: string;
  subTitle?: string;
  url?: string;
}
