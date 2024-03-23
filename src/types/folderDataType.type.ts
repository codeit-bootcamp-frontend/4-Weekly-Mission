export interface folderDataType {
  created_at?: string;
  favorite?: boolean;
  id: number | string;
  link?: { [key: string]: number };
  name: string;
  user_id?: number;
}
export interface folderList {
  id: string;
  name: string;
}
