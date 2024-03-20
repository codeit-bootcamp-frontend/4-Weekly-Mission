export interface UserDataType {
  email: string | undefined;
  image: string | undefined;
  error: unknown | undefined;
}

interface cardData {
  id: number | undefined;
  createdAt: string | undefined;
  url: string | undefined;
  title: string | undefined;
  description: string | undefined;
  imageSource: string | undefined;
}

export interface FolderDataType {
  userName: string | undefined;
  userImage: string | undefined;
  name: string | undefined;
  cardData: cardData[] | undefined;
  error: unknown | undefined;
}

interface link {
  count: number;
}

interface category {
  id: number | undefined;
  createdAt: string | undefined;
  name: string | undefined;
  user_id: number | undefined;
  favorite: boolean;
  link: link | undefined;
}

export interface CategoryDataType {
  category: category[] | undefined;
  error: unknown | undefined;
}
