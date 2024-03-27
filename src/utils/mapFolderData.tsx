import { mapLinks } from "./mapLinks.tsx";

interface FolderData {
  name: string;
  owner: {
    profileImageSource: string;
    name: string;
  };
  links: any[];
}

export const mapFolderData = (folder: FolderData) => {
  if (!folder) return [];
  const { name, owner, links } = folder;

  const mappedLinks = links.map(mapLinks);

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: mappedLinks ?? [],
  };
};
