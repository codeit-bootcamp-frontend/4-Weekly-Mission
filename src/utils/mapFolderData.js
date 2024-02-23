import { mapLinks } from "./mapLinks";

export const mapFolderData = (folder) => {
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
