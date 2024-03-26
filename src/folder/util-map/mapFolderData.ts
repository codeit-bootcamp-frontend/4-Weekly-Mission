import { mapLinksData } from 'link/util-map';

interface Folder {
  name: string;
  owner?: {
    profileImageSource?: string;
    name?: string;
  };
  links?: string[];
}

export const mapFolderData = (folder: Folder) => {
  if (!folder) return [];

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData) ?? [],
  };
};
