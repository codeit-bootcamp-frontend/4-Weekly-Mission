export interface linkObject {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}

export interface OwnerObject {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface FolderObject {
  count: number;
  id: number;
  links: linkObject[];
  name: string;
  owner: OwnerObject;
}

export interface SharePageFolderData {
  folder: FolderObject;
}
