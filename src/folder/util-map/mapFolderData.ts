import { mapLinksData } from "../../link/util-map";
import { Link } from "../../link/util-map";

/*
  link 임포트
  id, createdAt, url, imageSource, title?, description?
*/

export interface Folder {
  name: string;
  owner: {
    profileImageSource: string;
    name: string;
  };
  links: Link[];
}

interface MapFolderData {
  profileImage: string;
  ownerName: string;
  folderName: string;
  links: ReturnType<typeof mapLinksData>[];
}

export const mapFolderData = (folder: Folder): MapFolderData | [] => {
  if (!folder) return [];

  const { name, owner, links } = folder;

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(link => mapLinksData(link)) ?? [],
  };
};

