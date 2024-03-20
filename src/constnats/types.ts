interface Count {
  count: number;
}

export interface Link {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source?: string;
  imageSource?: string;
  folder_id: null;
  name: string;
  user_id: number;
  favorite: boolean;
  link: object;
  time?: string;
  date?: string;
}

export interface Folder {
  id: number | null;
  created_at?: string;
  name: string;
  user_id?: number;
  favorite?: boolean;
  link?: Count;
}

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface User {
  id: number;
  name: string;
  owner: Owner;
}
