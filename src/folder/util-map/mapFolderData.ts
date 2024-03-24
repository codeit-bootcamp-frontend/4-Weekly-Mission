import { mapLinksData } from "../../link/util-map";

interface Props {
  name: any;
  owner: string;
  links: string;
}

export const mapFolderData = (folder: Props) => {
  if (!folder) return [];

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinksData) ?? [],
  };
};
