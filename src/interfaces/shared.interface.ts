import { folderDataType } from "./folder.interface";

interface ownerType {
  id: number;
  name: string;
  profileImageSource: string;
}

interface folderType {
  count: number;
  id: number;
  links: folderDataType[];
  name: string;
  owner: ownerType;
}

export interface UserType {
  folder: folderType;
}

export interface cardDataType {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}
