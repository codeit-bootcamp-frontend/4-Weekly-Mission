export interface folderListType {
  data: folderListDataType[];
}

export interface folderListDataType {
  id: number;
  created_at: string;
  folder_id?: number;
  title?: string;
  updated_at?: string;
  url: string;
  description?: string;
  image_source?: string;
}

export interface favoriteListDataType {
  id: number;
  created_at: string;
  link: { [count: string]: number };
  name: string;
  user_id: number;
  favorite: boolean;
}
