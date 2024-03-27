export interface FolderData {
  count: number;
  id: number;
  links: LinksData[];
  name: string;
  owner: OwnerData;
}
export interface LinksData {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}

interface OwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}
