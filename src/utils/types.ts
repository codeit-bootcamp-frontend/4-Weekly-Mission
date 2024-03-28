export interface User {
  email: string | null;
  profileImageSource?: string | null;
  image_source?: string | null;
}

export interface Folder {
  id: number;
  created_at?: string;
  name?: string;
  user_id?: number;
  favorite?: boolean;
  link: { count: number };
}

export interface Link {
  id: number;
  created_at: string;
  updated_at?: string;
  url: string;
  title?: number | null;
  description?: string | null;
  image_source?: string | null;
  folder_id?: number;
}
