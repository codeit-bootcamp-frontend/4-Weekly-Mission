interface User {
  id: number;
  name: string;
  email: string;
}

export interface SharedPageUser extends User {
  profileImageSource: string;
}

export interface FolderPageUser extends User {
  created_at?: string;
  image_source: string;
  auth_id?: string;
}

export interface SharedPageFolderOwner {
  ownerImg: string;
  ownerName: string;
  folderName: string;
}

export interface Card {
  id: number;
  url: string;
  imgUrl?: string;
  title: string;
  description: string;
}

export interface SharedPageLink extends Card {
  lastTimeString: string;
  uploadDate: string;
}

interface LinkCount {
  count: number;
}

export interface Folder {
  id: number;
  created_at?: string;
  name: string;
  user_id?: string;
  favorite?: boolean;
  link?: LinkCount;
  isClicked?: boolean | null;
}
