import { Profile } from "./FolderPageApi";
const BASE_API = "https://bootcamp-api.codeit.kr/api";

export const getSampleData = async (): Promise<Profile | undefined> => {
  try {
    const response = await fetch(`${BASE_API}/sample/user`);
    const result = await response.json();
    return {
      email: result.email,
      image: result.profileImageSource,
    };
  } catch (error) {
    console.log(error);
  }
};

export type FolderType = {
  profileImage: string;
  folderName: string;
  profileName: string;
  cardLinks: {
    id: number;
    createdAt: number;
    url: string;
    title: string;
    description: string;
    imageSource: string;
  }[];
};

export const getSampleFolderData = async (): Promise<
  FolderType | undefined
> => {
  try {
    const response = await fetch(`${BASE_API}/sample/folder`);
    const result = await response.json();
    const { owner, name, links } = result.folder;
    return {
      profileImage: owner.profileImageSource,
      profileName: owner.name,
      folderName: name,
      cardLinks: links,
    };
  } catch (error) {
    console.log(error);
  }
};
