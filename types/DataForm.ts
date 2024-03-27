//favorite, link, name, user_id

//getCategory
export interface FolderListDataForm {
  id: number | string;
  created_at: string;
  favorite: true;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

//getFolders
export interface getFolderDataForm {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string;
  url: string;
}

// useGetFolder
export interface FolderPageDataForm {
  //folder []
  count: number;
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: LinkDataForm[];
}

export interface LinkDataForm {
  id: number;
  createdAt: string;
  description: string;
  imageSource: string;
  url: string;
  title: string;
}

//useGetUser
export interface UserDataForm {
  // data []
  auth_id: string;
  created_at: string;
  email: "string";
  id: number;
  image_source: string;
  name: string;
}

//
export interface CardInfoDataForm {
  url: string;
  image_source: string;
  description: string;
  created_at: string;
  data: FolderListDataForm[];
}
