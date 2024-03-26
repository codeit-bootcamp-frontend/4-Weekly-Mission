import { Link } from "@/types/link";
import { mapLinksData } from "link/util-map";

interface Owner {
  profileImageSource: string;
  name: string;
}

interface Folder {
  name: string;
  owner?: Owner;
  links: Link[];
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
