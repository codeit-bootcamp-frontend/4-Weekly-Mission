interface FolderListDataType {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: { count: number };
}

export default FolderListDataType;
