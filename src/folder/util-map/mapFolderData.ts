import { mapLinksData } from "../../link/util-map";

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface Links {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface PropsFolder {
  name: string;
  owner: Owner;
  links: Links[];
}

export const mapFolderData = (folder: PropsFolder) => {
  if (!folder) return [];

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map((link) => mapLinksData(link)) ?? [],
  };
};
