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
