export type UserDataType = {
  email: string | null;
  image: string | null;
  error: unknown | null;
};

export type currentFolderDataType = {
  title: string | null;
  id: string | null;
};

export type modalFolderDataType = {
  folderName: string;
  folderID: number;
  linkCount: number;
};

export type modalDataType = {
  modalType: string | null;
  subTitle: string | null;
  folder: modalFolderDataType[] | null;
  currentFolderID: number | null;
  currentLinkID: number | null;
};

export type cardDataType = {
  id: number | null;
  createdAt: string | null;
  url: string | null;
  title: string | null;
  description: string | null;
  imageSource: string | null;
};

export type FolderDataType = {
  userName: string | null;
  userImage: string | null;
  name: string | null;
  cardData: cardDataType[] | null;
  error: unknown | null;
};

type link = {
  count: number;
};

type categoryType = {
  id: number | null;
  createdAt: string | null;
  name: string | null;
  user_id: number | null;
  favorite: boolean;
  link: link | null;
};

export type CategoryDataType = {
  category: categoryType[] | null;
  error: unknown | null;
};

export type folderCardType = {
  id: number;
  created_at: string | null;
  updated_at: string | null;
  url: string | null;
  title: string | null;
  description: string | null;
  image_source: string | null;
  forder_id: number | null;
};
export type folderCardDataType = {
  card: folderCardType[] | null;
  error: null | unknown;
};
