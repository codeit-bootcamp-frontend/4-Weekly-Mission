export interface UserDataType {
  email: string | null;
  image: string | undefined;
  error: unknown | null;
}

export interface cardDataType {
  id: number | null;
  createdAt: string | null;
  url: string | null;
  title: string | null;
  description: string | null;
  imageSource: string | undefined;
}

export interface FolderDataType {
  userName: string | null;
  userImage: string | undefined;
  name: string | null;
  cardData: cardDataType[] | null;
  error: unknown | null;
}

interface link {
  count: number;
}

interface category {
  id: number | null;
  createdAt: string | null;
  name: string | null;
  user_id: number | null;
  favorite: boolean;
  link: link | null;
}

export interface CategoryDataType {
  category: category[] | null;
  error: unknown | null;
}

export interface folderCardType {
  id: number;
  created_at: string | null;
  updated_at: string | null;
  url: string | null;
  title: string | null;
  description: string | null;
  image_source: string | undefined;
  forder_id: number | null;
}
export interface folderCardDataType {
  card: folderCardType[] | null;
  error: null | unknown;
}
