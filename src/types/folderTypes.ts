export interface folderDataType {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}

export interface ownerDataType {
  profileImageSource: string;
  id: number;
  name: string;
}

export interface folderType {
  id: number;
  links: folderDataType[];
  owner: ownerDataType;
  name: string;
}
