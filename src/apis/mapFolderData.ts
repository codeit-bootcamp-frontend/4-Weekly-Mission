import { mapLinksData } from '@/apis/mapLinksData';
type Owner = {
  id: number;
  name: string;
  profileImageSource: string;
};

type Links = {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

type MapFolderDataType = {
  id: number;
  name: string;
  owner: Owner;
  links: Links[];
};

export const mapFolderData = (folder: MapFolderDataType) => {
  if (!folder) return [];

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData) ?? [],
  };
};
